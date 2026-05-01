"use node";
import { v } from "convex/values";
import { action } from "./_generated/server";
import { v2 as cloudinary } from "cloudinary";

const configureCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
};

export const testCloudinary = action({
    args: {},
    handler: async () => {
        configureCloudinary();
        try {
            const result = await cloudinary.api.ping();
            return { success: true, result };
        } catch (error: any) {
            return { success: false, error: error.message || String(error) };
        }
    },
});

export const getUploadSignature = action({
    args: {
        resourceType: v.union(v.literal("image"), v.literal("video"), v.literal("auto")),
    },
    handler: async (ctx, args) => {
        configureCloudinary();
        const timestamp = Math.round(new Date().getTime() / 1000);
        const signature = cloudinary.utils.api_sign_request(
            { timestamp },
            process.env.CLOUDINARY_API_SECRET!
        );
        return {
            timestamp,
            signature,
            apiKey: process.env.CLOUDINARY_API_KEY!,
            cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
            resourceType: args.resourceType,
        };
    },
});