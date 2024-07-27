import UserLink from "@/models/UserLink"
import { NextResponse } from "next/server"

export async function POST(request){
    let data = await request.json()
    //data has url, and title
    const userId = data.userId;
    const url = data.url;
    const title = data.title;

    await mongoose.connect(process.env.MONGO_URI);
    
    

}   