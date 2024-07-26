import { NextResponse } from "next/server";
import mongoose from "mongoose";


export async function POST(request){

    mongoose.connect(process.env.MONGO_URI);
    
    const data = await request.json();

    return NextResponse.json(data)
}