"use server"

import { signIn } from "@/auth";
import { User } from "@/models/user";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import connectDB from "@/api/lib/db";



export const loginUser = async (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
  
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      });
  
      if (result?.error) {
        return { error: "Invalid email or password" };
      }
  
      return { success: true };
    } catch (e) {
      console.error("Login error:", e);
      return { error: "An unexpected error occurred" };
    }
  }

  export const registerUser = async (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const age = formData.get('age');

    try {
        if (!email || !password || !age) {
            return { error: 'Please fill all fields' };
        }
        await connectDB();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return { error: "User already exists" };
        }

        const hashedPassword = await hash(password, 12);
        
        await User.create({
            email,
            password: hashedPassword,
            age
        });

        console.log("New User created :)");
        return { success: true };
    } catch (e) {
        console.error("Registration error:", e);
        return { error: "An unexpected error occurred" };
    }   
}