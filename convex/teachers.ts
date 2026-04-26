import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Step 1: teacher creates or updates their draft profile
export const upsertProfile = mutation({
    args: {
        phone: v.string(),
        whatsappUrl: v.string(),
        lastDiploma: v.string(),
        subjects: v.array(v.string()),
        monthlyRate: v.number(),
        bio: v.optional(v.string()),
        profilePicture: v.optional(v.id("_storage")),
        coverPicture: v.optional(v.id("_storage")),
        diplomaPicture: v.optional(v.id("_storage")),
        profileVideo: v.optional(v.id("_storage")),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();
        if (!user) throw new Error("User not found");

        const existing = await ctx.db
            .query("teacherProfiles")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .unique();

        const now = Date.now();

        if (existing) {
            // only allow edits on draft or rejected profiles
            if (existing.status === "pending" || existing.status === "approved") {
                throw new Error("Cannot edit a profile that is pending or approved");
            }
            await ctx.db.patch(existing._id, { ...args, updatedAt: now });
            return existing._id;
        }

        return await ctx.db.insert("teacherProfiles", {
            userId: user._id,
            ...args,
            status: "draft",
            isVerified: false,
            starCount: 0,
            ratingCount: 0,
            createdAt: now,
            updatedAt: now,
        });
    },
});

// Step 2: after payment confirmed, submit profile for admin review
export const submitForApproval = mutation({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();
        if (!user) throw new Error("User not found");

        // verify payment exists and is completed
        const payment = await ctx.db
            .query("payments")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .filter((q) => q.eq(q.field("status"), "completed"))
            .first();
        if (!payment) throw new Error("Payment required before submitting for approval");

        const profile = await ctx.db
            .query("teacherProfiles")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .unique();
        if (!profile) throw new Error("Profile not found");
        if (profile.status !== "draft" && profile.status !== "rejected") {
            throw new Error("Profile already submitted");
        }

        await ctx.db.patch(profile._id, {
            status: "pending",
            updatedAt: Date.now(),
        });
    },
});

// Public: search approved teachers (guests can call this)
export const searchTeachers = query({
    args: {
        subject: v.optional(v.string()),
        maxRate: v.optional(v.number()),
        sortByStars: v.optional(v.boolean()),
    },
    handler: async (ctx, args) => {
        let profiles = await ctx.db
            .query("teacherProfiles")
            .withIndex("by_status", (q) => q.eq("status", "approved"))
            .collect();

        if (args.subject) {
            profiles = profiles.filter((p) => p.subjects.includes(args.subject!));
        }
        if (args.maxRate !== undefined) {
            profiles = profiles.filter((p) => p.monthlyRate <= args.maxRate!);
        }
        if (args.sortByStars) {
            profiles.sort((a, b) => b.starCount - a.starCount);
        }

        // join with user name/email
        return Promise.all(
            profiles.map(async (p) => {
                const user = await ctx.db.get(p.userId);
                return { ...p, userName: user?.name, userEmail: user?.email };
            })
        );
    },
});

// Get a single teacher's public profile
export const getTeacherProfile = query({
    args: { profileId: v.id("teacherProfiles") },
    handler: async (ctx, args) => {
        const profile = await ctx.db.get(args.profileId);
        if (!profile || profile.status !== "approved") return null;
        const user = await ctx.db.get(profile.userId);
        return { ...profile, userName: user?.name, userEmail: user?.email };
    },
});

// Get the current user's own profile (any status)
export const getMyProfile = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) return null;
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();
        if (!user) return null;
        return ctx.db
            .query("teacherProfiles")
            .withIndex("by_userId", (q) => q.eq("userId", user._id))
            .unique();
    },
});