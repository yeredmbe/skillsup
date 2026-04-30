import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Helper to assert the caller is an admin
async function requireAdmin(ctx: any) {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const user = await ctx.db
        .query("users")
        .withIndex("by_clerkId", (q: any) => q.eq("clerkId", identity.subject))
        .unique();
    if (!user || user.role !== "admin") throw new Error("Admin access required");
    return user;
}

// List all pending teacher profiles for review
export const listPendingTeachers = query({
    handler: async (ctx) => {
        await requireAdmin(ctx);
        const profiles = await ctx.db
            .query("teacherProfiles")
            .withIndex("by_status", (q) => q.eq("status", "pending"))
            .collect();

        return Promise.all(
            profiles.map(async (p) => {
                const user = await ctx.db.get(p.userId);
                return { ...p, userName: user?.name, userEmail: user?.email };
            })
        );
    },
});

// Approve a teacher profile
export const approveTeacher = mutation({
    args: { profileId: v.id("teacherProfiles") },
    handler: async (ctx, args) => {
        await requireAdmin(ctx);
        const profile = await ctx.db.get(args.profileId);
        if (!profile) throw new Error("Profile not found");

        await ctx.db.patch(args.profileId, {
            status: "approved",
            isVerified: true,
            updatedAt: Date.now(),
        });

        // promote user role to teacher
        await ctx.db.patch(profile.userId, { role: "teacher" });
    },
});

// Reject a teacher profile with a reason
export const rejectTeacher = mutation({
    args: {
        profileId: v.id("teacherProfiles"),
        reason: v.string(),
    },
    handler: async (ctx, args) => {
        await requireAdmin(ctx);
        await ctx.db.patch(args.profileId, {
            status: "rejected",
            rejectionReason: args.reason,
            updatedAt: Date.now(),
        });
    },
});

// List all users (guests + teachers)
export const listUsers = query({
    args: {
        role: v.optional(v.union(v.literal("guest"), v.literal("teacher"), v.literal("admin"))),
    },
    handler: async (ctx, args) => {
        await requireAdmin(ctx);
        if (args.role) {
            return ctx.db
                .query("users")
                .withIndex("by_role", (q) => q.eq("role", args.role!))
                .collect();
        }
        return ctx.db.query("users").collect();
    },
});

// Ban or unban a user
export const setUserBan = mutation({
    args: {
        userId: v.id("users"),
        isBanned: v.boolean(),
    },
    handler: async (ctx, args) => {
        await requireAdmin(ctx);
        await ctx.db.patch(args.userId, { isBanned: args.isBanned });
    },
});

// Change a user's role manually
export const setUserRole = mutation({
    args: {
        userId: v.id("users"),
        role: v.union(v.literal("guest"), v.literal("teacher"), v.literal("admin")),
    },
    handler: async (ctx, args) => {
        await requireAdmin(ctx);
        await ctx.db.patch(args.userId, { role: args.role });
    },
});