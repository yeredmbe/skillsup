
import { v } from "convex/values";
import { action, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";

export const recordPayment = internalMutation({
    args: {
        userId: v.id("users"),
        amount: v.number(),
        currency: v.string(),
        transactionId: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("payments", {
            userId: args.userId,
            amount: args.amount,
            currency: args.currency,
            status: "completed",
            createdAt: Date.now(),
        });
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

        // get user by clerk ID
        const user: any = await ctx.runQuery(internal.users.getUserByClerkId, {
            clerkId: identity.subject,
        });

        if (!user) throw new Error("User not found");

        try {
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
            // The token structure is based on the provided sample or common JWT structures
            const token = authData.token || authData.data?.token || authData.access_token;

            if (!token) throw new Error("Toumkap auth failed: No token received");

            // Step 2: Process transaction
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
                throw new Error(`Toumkap payment failed: ${errData}`);
            }

            const txData: any = await txRes.json();

            // Step 3: Record successful payment in DB
            await ctx.runMutation(internal.payment.recordPayment, {
                userId: user._id,
                amount: args.amount,
                currency: "XAF",
                transactionId: txData.transactionId || "toumkap_tx",
            });

            return { success: true, message: txData.message || "Payment successful" };
        } catch (error: any) {
            console.error("Payment error:", error);
            throw new Error(error.message || "Payment processing failed");
        }
    },
});