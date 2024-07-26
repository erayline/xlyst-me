import { User } from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(request){
    const email = request.email;
    const password = request.password;

    if(!email || !password) NextResponse.json({success:false})


    await mongoose.connect(process.env.MONGO_URI);
    const user = await User.find({email:email})

    if(!user){
        NextResponse.json({success:false}, { status: 201 })
    } 

    NextResponse.json({success:true}, { status: 201 })
}