import { v } from "convex/values";
import { action, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const recordPayment = internalMutation({
    args: {
        userId: v.id("users"),
        amount: v.number(),
        currency: v.string(),
        transactionId: v.optional(v.string()),
        status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("payments", {
            userId: args.userId,
            amount: args.amount,
            currency: args.currency,
            status: args.status,
            transactionId: args.transactionId,
            createdAt: Date.now(),
        });
    },
});

export const updatePaymentStatus = internalMutation({
    args: {
        transactionId: v.string(),
        status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
    },
    handler: async (ctx, args) => {
        const payment = await ctx.db
            .query("payments")
            .withIndex("by_transactionId", (q) => q.eq("transactionId", args.transactionId))
            .first();
        if (!payment) throw new Error("Payment not found");
        await ctx.db.patch(payment._id, { status: args.status });
    },
});

export const processToumkapPayment = action({
    args: {
        phoneNumber: v.string(),
        amount: v.number(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const user: any = await ctx.runQuery(internal.users.getUserByClerkId, {
            clerkId: identity.subject,
        });
        if (!user) throw new Error("User not found");

        // Step 1: Authenticate with Toumkap
        const authRes = await fetch(process.env.TOUMKAP_AUTH_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "yeredmbe7@gmail.com",
                password: "3105June."
            })
        });
        if (!authRes.ok) throw new Error("Toumkap auth failed");

        const authData: any = await authRes.json();
        const token = authData.token || authData.data?.token || authData.access_token;
        if (!token) throw new Error("Toumkap auth failed: No token received");

        // Step 2: Initiate the transaction (this sends a prompt to the user's phone)
        const txRes = await fetch(process.env.TOUMKAP_TRANSACTION_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                phoneNumber: args.phoneNumber,
                amount: args.amount,
                email: user.email || process.env.TOUMKAP_FALLBACK_EMAIL,
                applicationKey: process.env.TOUMKAP_APPLICATION_KEY,
                successUrl: "https://skillsup.com/success",
                cancelUrl: "https://skillsup.com/cancel",
                ProductName: "SkillsUp Teacher Verification"
            })
        });

        if (!txRes.ok) {
            const errData = await txRes.text();
            throw new Error(`Toumkap payment initiation failed: ${errData}`);
        }

        const txData: any = await txRes.json();

        // console.log("Toumkap transaction response:", JSON.stringify(txData));

        const transactionId = txData.transactionReference;

        if (!transactionId) throw new Error("No transaction ID returned from Toumkap");

        // Step 3: Record payment as PENDING — user has not confirmed on phone yet
        await ctx.runMutation(internal.payment.recordPayment, {
            userId: user._id,
            amount: args.amount,
            currency: "XAF",
            transactionId,
            status: "pending",
        });

        // Step 4: Poll Toumkap until user confirms or rejects on their phone
        const statusUrl = `${process.env.TOUMKAP_STATUS_URL}/${transactionId}`;
        const maxAttempts = 12; // poll for up to ~60 seconds
        const pollInterval = 5000; // every 5 seconds

        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            await new Promise(res => setTimeout(res, pollInterval));

            const statusRes = await fetch(statusUrl, {
                headers: { "Authorization": `Bearer ${token}` }
            });

            if (!statusRes.ok) continue; // network blip, keep trying

            const statusData: any = await statusRes.json();
            const txStatus = statusData.transactionStatus || statusData.status || statusData.data?.status;

            if (txStatus === "SUCCESS" || txStatus === "SUCCESSFUL" || txStatus === "COMPLETED") {
                // User confirmed on their phone — mark payment completed
                await ctx.runMutation(internal.payment.updatePaymentStatus, {
                    transactionId,
                    status: "completed",
                });
                return { success: true, message: "Payment confirmed" };
            }

            if (txStatus === "FAILED" || txStatus === "CANCELLED" || txStatus === "EXPIRED") {
                // User declined or payment expired — mark as failed and stop
                await ctx.runMutation(internal.payment.updatePaymentStatus, {
                    transactionId,
                    status: "failed",
                });
                throw new Error("Payment was declined or cancelled. Please try again.");
            }

            // Still PENDING — keep polling
        }

        // Timed out — user never responded on their phone
        throw new Error("Payment timed out. Please check your phone and try again.");
    },
});