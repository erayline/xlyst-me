import {UserLink} from "@/models/UserLink"
import { NextResponse } from "next/server"
import mongoose from "mongoose";

export async function POST(request){
    let data = await request.json()
    //data has url, and title
    const userId = data.userId;
    const url = data.url;
    const title = data.title;

    await mongoose.connect(process.env.MONGO_URI);

    const createdLink = await UserLink.create({
        url:url,
        title:title,
        user:userId
    })
    if(!createdLink) return NextResponse({success:false});
    
    return NextResponse({success:true});
}   