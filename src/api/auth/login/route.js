// pages/api/auth/login.js
import { signIn } from "@/auth";

export default async function handler(req, res) {
    const { email, password } = req.body;

    try {
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (result?.error) {
            return res.status(401).json({ error: "Invalid email or password" }); // Unauthorized
        }

        return res.status(200).json({ success: true });
    } 
    
    
    catch (e) {
        console.error("Login error:", e);
        return res.status(500).json({ error: "An unexpected error occurred" }); // Internal Server Error
    }
}
