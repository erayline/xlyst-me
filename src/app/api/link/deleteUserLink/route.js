import { UserLink } from '@/models/UserLink';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function POST(req) {
        await mongoose.connect(process.env.MONGO_URI);

        const { id } = await req.json();

        await UserLink.findByIdAndDelete(id);
        
        return NextResponse.json({message:"deleted successfuly"});
}