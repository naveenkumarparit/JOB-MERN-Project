import app from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'; // Import bcryptjs here

// ✅ Load environment variables from config.env
dotenv.config({ path: "./.env" });

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection failed:", err));

// ✅ Configure Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at port ${PORT}`);
});