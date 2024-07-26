import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/models/User";


export async function POST(request){
    const data = await request.json();
    await mongoose.connect(process.env.MONGO_URI);
    await User.create(
        {
        email:data.email,
        password:data.password,
        username:data.username
        }
    )
    return NextResponse.json(data)
}