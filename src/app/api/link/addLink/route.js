import { UserLink } from "@/models/UserLink";
import { NextResponse } from "next/server";
import mongoose from "mongoose";



export async function POST(request) {
    const data = await request.json();
    const { userId, url, title } = data;


    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {

        const createdLink = await UserLink.create({ url, title, user: mongoose.Types.ObjectId(userId); });


        return NextResponse.json({ success: true, link: createdLink });
    } catch (error) {
        console.error("Error creating link:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
