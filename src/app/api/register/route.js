import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/models/User";
import { hash } from "bcryptjs";


export async function POST(request){
    const data = await request.json();
    
    await mongoose.connect(process.env.MONGO_URI);
    const existingUser = await User.findOne({email:data.email})
    
    if (existingUser) {
        return NextResponse.json(
            { message: "User already exists" },
            { status: 409 } // 409 Conflict
        );
    }

    const hashedPassword = await hash(data.password,12);

    await User.create({
        email: data.email,
        password: hashedPassword,
        userName: data.username
    });

    return NextResponse.json({success:true}, { status: 201 });
}