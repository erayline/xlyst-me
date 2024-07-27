import mongoose, { mongo } from "mongoose";
import { UserLink } from "@/models/UserLink";
import { NextResponse } from "next/server";
import { User } from "@/models/User";


export async function POST(request){
    const data = await request.json();
    const {username} = data;


    await mongoose.connect(process.env.MONGO_URI);

    const user = await User.findOne({userName:username});
    
    if(!user) return NextResponse.json({success:false})
    let userId = user.id;
    
    const linkList = await UserLink.find({user:userId})
    return NextResponse.json({success:true,liste:linkList})

}