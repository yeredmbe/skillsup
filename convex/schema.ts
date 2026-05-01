import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // ─── core user (synced from Clerk) ──────────────────────────
    users: defineTable({
        clerkId: v.string(),
        email: v.string(),
        name: v.string(),
        role: v.union(v.literal("guest"), v.literal("teacher"), v.literal("admin")),
        isBanned: v.boolean(),
        createdAt: v.number(),
    })
        .index("by_clerkId", ["clerkId"])
        .index("by_role", ["role"]),

    teacherProfiles: defineTable({
        userId: v.id("users"),
        phone: v.string(),
        whatsappUrl: v.string(),
        lastDiploma: v.string(),
        subjects: v.array(v.string()),
        monthlyRate: v.number(),
        // Cloudinary URLs for uploaded files
        profilePicture: v.optional(v.string()),
        coverPicture: v.optional(v.string()),
        diplomaPicture: v.optional(v.string()),
        profileVideo: v.optional(v.string()),
        bio: v.optional(v.string()),
        // Added missing fields
        firstName: v.optional(v.string()),
        lastName: v.optional(v.string()),
        location: v.optional(v.string()),
        status: v.union(
            v.literal("draft"),
            v.literal("pending"),
            v.literal("approved"),
            v.literal("rejected"),
        ),
        isVerified: v.boolean(),
        rejectionReason: v.optional(v.string()),
        starCount: v.number(),
        ratingCount: v.number(),
        createdAt: v.number(),
        updatedAt: v.number(),
    })
        .index("by_userId", ["userId"])
        .index("by_status", ["status"])
        .index("by_starCount", ["starCount"]),

    // ─── star ratings from parents ───────────────────────────────
    ratings: defineTable({
        teacherProfileId: v.id("teacherProfiles"),
        guestUserId: v.id("users"),
        stars: v.number(),  // 1–5
        comment: v.optional(v.string()),
        createdAt: v.number(),
    })
        .index("by_teacher", ["teacherProfileId"])
        .index("by_guest_teacher", ["guestUserId", "teacherProfileId"]),

    // ─── one-time verification payment ───────────────────────────
    payments: defineTable({
        userId: v.id("users"),
        amount: v.number(),
        currency: v.string(),
        status: v.union(
            v.literal("pending"),
            v.literal("completed"),
            v.literal("failed"),
        ),
        transactionId: v.optional(v.string()),
        createdAt: v.number(),
    })
        .index("by_userId", ["userId"])
        .index("by_transactionId", ["transactionId"]),

    // ─── system notifications ────────────────────────────────────
    notifications: defineTable({
        userId: v.id("users"),
        title: v.string(),
        message: v.string(),
        isRead: v.boolean(),
        createdAt: v.number(),
    }).index("by_userId", ["userId"]),
});