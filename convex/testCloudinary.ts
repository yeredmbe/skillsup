"use node";
import { action } from "./_generated/server";
import { v2 as cloudinary } from "cloudinary";

export const testCloudinary = action({
    args: {},
    handler: async () => {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });

        try {
            const result = await cloudinary.api.ping();
            return { success: true, result };
        } catch (error: any) {
            return { success: false, error: error.message || String(error) };
        }
    },
});
