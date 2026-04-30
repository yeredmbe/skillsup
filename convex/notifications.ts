import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Fetch notifications for the currently logged in user
export const getUserNotifications = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) return [];

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();

        if (!user) return [];

        return await ctx.db
            .query("notifications")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .order("desc")
            .take(20);
    },
});

// Mark a specific notification as read
export const markAsRead = mutation({
    args: { notificationId: v.id("notifications") },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const notification = await ctx.db.get(args.notificationId);
        if (!notification) return;

        await ctx.db.patch(args.notificationId, { isRead: true });
    },
});

// Mark all notifications as read for the user
export const markAllAsRead = mutation({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();

        if (!user) return;

        const unreadNotifications = await ctx.db
            .query("notifications")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .filter((q) => q.eq(q.field("isRead"), false))
            .collect();

        await Promise.all(
            unreadNotifications.map((n) => ctx.db.patch(n._id, { isRead: true }))
        );
    },
});
