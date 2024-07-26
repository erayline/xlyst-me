import { User } from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(request){
    const email = request.email;
    const password = request.password;

    if(!email || !password) NextResponse.json({success:false})
    console.log("mongodb is connecting")
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb is connected, user finding")
    const user = await User.find({email:email})
    console.log("user found")

    if(!user){
        NextResponse.json({success:false})
    } 

    NextResponse.json({success:true,user:user})
}