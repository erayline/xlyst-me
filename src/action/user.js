"use server"

import { signIn } from "@/auth";
import connectDB from "@/lib/db";
import { User } from "@/models/user";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";


export const loginUser = async(formData)=>{
    const email = formData.get('email');
    const password = formData.get('password');

    try{
        await signIn('credentials',{
            redirect:false,
            callbackUrl:'/',
            email,
            password
        })
    }catch(e){
        return e.cause;
    }
    redirect('/');
}


export const registerUser = async (formData) => {

    //form'dan dataları çekme
    const email = formData.get('email');
    const password = formData.get('password');
    const age = formData.get('age')

    //birisi boş mu
    if(!email||!password||!age){
        throw new Error('please fill all');
    }
    
    //db'ye bağlanma
    await connectDB()

    //kullanıcı varsa durdur
    const existingUser = await User.findOne({email});
    if(existingUser) throw new Error("user already exist");

    //password hashle
    const hashedPassword = await hash(password,12);
    
    //kullanıcıyı ekle
    await User.create({
        email,
        password:hashedPassword,
        age
    })
    console.log("New User created :)");

    //yönlendir
    redirect('/loginregister')
}

