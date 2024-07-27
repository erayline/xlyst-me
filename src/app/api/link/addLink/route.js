import { UserLink } from "@/models/UserLink";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request) {
    const data = await request.json();
    const { userId, url, title } = data;

    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Check if the userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error("Invalid userId format");
        }

        const createdLink = await UserLink.create({
            url,
            title,
            user: new mongoose.Types.ObjectId(userId),
        });

        return NextResponse.json({ success: true, link: createdLink });
    } catch (error) {
        console.error("Error creating link:", error);
        return NextResponse.json({ success: false, error: error.message });
    } finally {
        // Disconnect from the database
        await mongoose.disconnect();
    }
}
