import mongoose from "mongoose";
import { UserLink } from "@/models/UserLink";
import { NextResponse } from "next/server";
import { User } from "@/models/User";

export async function POST(request) {
    const data = await request.json();
    const { username } = data;

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const user = await User.findOne({ userName: username });
    console.log(user);

    if (!user) return NextResponse.json({ success: false });

    const userId = user._id;

    const linkList = await UserLink.find({ user: userId });
    console.log(linkList);

    return NextResponse.json({ success: true, liste: linkList });
}
