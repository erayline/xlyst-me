import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/models/User";


export async function POST(request){

    mongoose.connect(process.env.MONGO_URI);
    User.create({email:"deneme@deneme.deneme",password:"deneme",username:"deneme"})
    const data = await request.json();

    return NextResponse.json(data)
}