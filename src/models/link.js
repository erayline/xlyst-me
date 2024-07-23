import mongoose from "mongoose";
import { Tilt_Neon } from "next/font/google";

const linkSchema = mongoose.Schema({
    //user,title,url,order,clicks
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    url:{
        type:String,
        required:true,
        trim:true
    },
    order:{
        type:Number,
        default:true
    },
    clicks:{
        type:Number,
        default:0
    }
})

export const Link = mongoose.models?.Link || mongoose.model("Link", linkSchema);