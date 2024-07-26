"use server"

import { signIn } from "@/auth"
import { redirect } from "next/navigation"

const login = async (formData) =>{
    const email = formData.get('email');
    const password = formData.get('password');
    let answer = await signIn('credentials',{
        redirect:false,
        callbackUrl:"/",
        email,
        password}
    )
    answer = answer.json();
}

const register = async (formData)=>{
    const email = formData.get("email")
    const password = formData.get("password")
    const username = formData.get("username")

    let result = await fetch("https://platinleaf.vercel.app/api/register",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            email:email,
            password:password,
            username:username
        })
    })
    result = await result.json();
    if(result.success) redirect('/login');
}

export {register,login};