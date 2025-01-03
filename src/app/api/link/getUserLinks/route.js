import mongoose from "mongoose";
import { UserLink } from "@/models/UserLink";
import { NextResponse } from "next/server";


export async function POST(request){
    const data = await request.json();
    const {username} = data;


    await mongoose.connect(process.env.MONGO_URI);
    const linkList = await UserLink.find({user:username})

    console.log(linkList)


    return NextResponse.json({liste:linkList})

}