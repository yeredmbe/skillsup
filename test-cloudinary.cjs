const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dcihzr5rr",
    api_key: "598218942634989",
    api_secret: "PlHYvbziALlpz-1k2j3e9EKaxz0"
});

async function test() {
    try {
        const res = await cloudinary.api.ping();
        console.log("Ping successful:", res);
    } catch (e) {
        console.error("Ping failed:", e);
    }
}
test();
