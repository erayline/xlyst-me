import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/models/User";
import { hash } from "bcryptjs";

export async function POST(request){
    const data = await request.json();
    
    await mongoose.connect(process.env.MONGO_URI);
    
    // Check for existing email
    const existingEmail = await User.findOne({email: data.email});
    if (existingEmail) {
        return NextResponse.json(
            { message: "Email already exists" },
            { status: 409 } // 409 Conflict
        );
    }

    // Check for existing username
    const existingUsername = await User.findOne({userName: data.username});
    if (existingUsername) {
        return NextResponse.json(
            { message: "Username already exists" },
            { status: 409 } // 409 Conflict
        );
    }

    const hashedPassword = await hash(data.password, 12);

    await User.create({
        email: data.email,
        password: hashedPassword,
        userName: data.username
    });

    return NextResponse.json({success: true}, { status: 201 });
}