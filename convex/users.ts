import { v } from "convex/values";
import { query, mutation, internalQuery } from "./_generated/server";

// Called from Clerk webhook or on first login to sync the user
export const upsertUser = mutation({
    args: {
        clerkId: v.string(),
        email: v.string(),
        name: v.string(),
    },
    handler: async (ctx, args) => {
        const existing = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
            .unique();

        if (existing) {
            // update name/email in case they changed it in Clerk
            await ctx.db.patch(existing._id, {
                email: args.email,
                name: args.name,
            });
            return existing._id;
        }

        const newUserId = await ctx.db.insert("users", {
            clerkId: args.clerkId,
            email: args.email,
            name: args.name,
            role: "guest",   // everyone starts as guest
            isBanned: false,
            createdAt: Date.now(),
        });

        // Welcome Notification
        await ctx.db.insert("notifications", {
            userId: newUserId,
            title: "Welcome to SkillsUp! 🎉",
            message: `Hi ${args.name.split(' ')[0] || "there"}, welcome to SkillsUp! We're thrilled to have you. Start exploring subjects and finding the best tutors to level up your skills today.`,
            isRead: false,
            createdAt: Date.now(),
        });

        return newUserId;
    },
});

export const getUserByClerkId = internalQuery({
    args: { clerkId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
            .unique();
    },
});

// Get the current authenticated user's record
export const getMe = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) return null;

        return ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();
    },
});