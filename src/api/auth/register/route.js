// pages/api/auth/register.js
import connectDB from "@/lib/db";
import { User } from "@/models/user";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { email, password, age } = req.body;

    try {
        if (!email || !password || !age) {
            return res.status(400).json({ error: 'Please fill all fields' }); // Bad Request
        }

        await connectDB();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "User already exists" }); // Conflict
        }

        const hashedPassword = await hash(password, 12);

        await User.create({
            email,
            password: hashedPassword,
            age
        });

        console.log("New User created :)");
        return res.status(201).json({ success: true }); // Created
    } catch (e) {
        console.error("Registration error:", e);
        return res.status(500).json({ error: "An unexpected error occurred" }); // Internal Server Error
    }
}
