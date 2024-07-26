import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/models/User";


export async function POST(request){
    const data = await request.json();
    console.log("*************************")
    mongoose.connect(process.env.MONGO_URI);
    console.log("mongoose connected");
    User.create(
        {
        email:"deneme@deneme.deneme",
        password:"deneme",
        username:"deneme"
        }
    )
    console.log("new user created");

    return NextResponse.json(data)
}