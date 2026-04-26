import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// A guest (parent) adds a star rating to an approved teacher
export const rateTeacher = mutation({
    args: {
        teacherProfileId: v.id("teacherProfiles"),
        stars: v.number(),   // 1–5
        comment: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        if (args.stars < 1 || args.stars > 5) throw new Error("Stars must be 1–5");

        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();
        if (!user || user.role !== "guest") throw new Error("Only guests can rate teachers");

        // prevent duplicate rating
        const existing = await ctx.db
            .query("ratings")
            .withIndex("by_guest_teacher", (q) =>
                q.eq("guestUserId", user._id).eq("teacherProfileId", args.teacherProfileId)
            )
            .unique();
        if (existing) throw new Error("You have already rated this teacher");

        const profile = await ctx.db.get(args.teacherProfileId);
        if (!profile || profile.status !== "approved") throw new Error("Teacher not found");

        // insert rating
        await ctx.db.insert("ratings", {
            teacherProfileId: args.teacherProfileId,
            guestUserId: user._id,
            stars: args.stars,
            comment: args.comment,
            createdAt: Date.now(),
        });

        // update cached star count on profile
        await ctx.db.patch(args.teacherProfileId, {
            starCount: profile.starCount + args.stars,
            ratingCount: profile.ratingCount + 1,
            updatedAt: Date.now(),
        });
    },
});

// Get all ratings for a teacher profile
export const getRatings = query({
    args: { teacherProfileId: v.id("teacherProfiles") },
    handler: async (ctx, args) => {
        return ctx.db
            .query("ratings")
            .withIndex("by_teacher", (q) => q.eq("teacherProfileId", args.teacherProfileId))
            .order("desc")
            .collect();
    },
});