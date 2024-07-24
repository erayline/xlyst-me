// pages/api/connectDB.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        }
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongoDB connected :) ");
    } catch (e) {
        console.error(e.message);
    }
};

export default async function handler(req, res) {
    await connectDB();
    res.status(200).json({ message: "Connected to MongoDB" });
}
