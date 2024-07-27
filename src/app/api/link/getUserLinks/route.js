import mongoose, { mongo } from "mongoose";
import { UserLink } from "@/models/UserLink";
import { NextResponse } from "next/server";
import { User } from "@/models/User";


export async function POST(request){
    const data = await request.json();
    const {userName} = data;


    await mongoose.connect(process.env.MONGO_URI);

    const user = await User.findOne({userName:userName});
    console.log(user);
    
    if(!user) return NextResponse.json({success:false})
    let userId = user.id;
    console.log(userId);
    
    const linkList = await UserLink.find({user:userId})
    console.log(linkList);
    return NextResponse.json({success:true,linkList})

}