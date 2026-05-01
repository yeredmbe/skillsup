"use node";
import { v } from "convex/values";
import { action } from "./_generated/server";
import { v2 as cloudinary } from "cloudinary";

export const uploadMedia = action({
    args: {
        fileBase64: v.string(),
        resourceType: v.union(v.literal("image"), v.literal("video"), v.literal("auto")),
    },
    handler: async (ctx, args) => {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });

        try {
            const uploadResponse = await cloudinary.uploader.upload(args.fileBase64, {
                resource_type: args.resourceType,
            });
            return uploadResponse.secure_url;
        } catch (error: any) {
            console.error("Cloudinary upload error:", error);
            throw new Error(`Failed to upload to Cloudinary: ${error?.message || "Unknown error"}`);
        }
    },
});
