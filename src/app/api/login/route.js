import { User } from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // İstek gövdesinden e-posta ve parolayı alın
        const { email, password } = await request.json();

        // E-posta veya parola eksikse hata döndür
        if (!email || !password) {
            return NextResponse.json({ success: false, message: "Email and password are required" }, { status: 400 });
        }

        // MongoDB'ye bağlan
        await mongoose.connect(process.env.MONGO_URI);

        // Kullanıcıyı e-posta ve parola ile bul
        const user = await User.findOne({ email, password });

        // Kullanıcı bulunamazsa hata döndür
        if (!user) {
            return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
        }

        // Kullanıcı bulunursa başarı döndür
        return NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
