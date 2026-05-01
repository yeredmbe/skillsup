export const uploadToCloudinary = async (
    file: File,
    resourceType: "image" | "video" | "auto",
    getSignature: (args: { resourceType: "image" | "video" | "auto" }) => Promise<{
        timestamp: number;
        signature: string;
        apiKey: string;
        cloudName: string;
        resourceType: string;
    }>
): Promise<string> => {
    const { timestamp, signature, apiKey, cloudName } = await getSignature({ resourceType });

    const formData = new FormData();
    formData.append("file", file);
    formData.append("timestamp", timestamp.toString());
    formData.append("signature", signature);
    formData.append("api_key", apiKey);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
        { method: "POST", body: formData }
    );

    const data = await response.json();
    if (!data.secure_url) throw new Error(data.error?.message || "Upload failed");
    return data.secure_url;
};