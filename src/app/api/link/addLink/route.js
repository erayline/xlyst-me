import { UserLink } from "@/models/UserLink";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request) {
    const data = await request.json();
    const { username, url, title, iconUrl } = data;

    await mongoose.connect(process.env.MONGO_URI);

    try {

        const createdLink = await UserLink.create({
            url,
            title,
            user: username,
            icon:iconUrl
        });

        return NextResponse.json({ success: true, username:username });
    } catch (error) {
        console.error("Error creating link:", error);
        return NextResponse.json({ success: false, error: error.message });
    } finally {
        // Disconnect from the database
        await mongoose.disconnect();
    }
}
