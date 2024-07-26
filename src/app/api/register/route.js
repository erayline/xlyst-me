import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/models/User";


export async function POST(request){
    const data = await request.json();
    console.log("*************************")
    await mongoose.connect(process.env.MONGO_URI);
    console.log(db)
    console.log("mongoose connected");
    await User.create(
        {
        email:"deneme@deneme.deneme",
        password:"deneme",
        username:"deneme"
        }
    )
    console.log("new user created");

    return NextResponse.json(data)
}