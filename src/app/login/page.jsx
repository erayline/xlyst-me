'use client'


import { login } from "@/action/user";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const Login = () => {

    const { data: session, status } = useSession();

    if(status === "loading") return <div className='m-10 text-center text-9xl'>🍸</div>
    console.log(session);
    if(session) redirect($`https://platinleaf.vercel.app/x/${session.user.username}`);
    
    return (
      <div className='w-full flex flex-col my-32 items-center justify-center'>
        <form action={login}
 className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center border-4 p-4 md:p-10 border-primary rounded'>
          <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>Login</h2>
          <input className='w-full p-2 mb-4 border rounded' placeholder='email' type="email" name="email" id="email" required />
          <input className='w-full p-2 mb-4 border rounded' placeholder="****" type="password" name="password" id="password" required />
          <button type='submit' className='bg-black text-white p-2 rounded w-full'>Login</button>
          <p className='mt-4'>Don't have an account? <Link href="/register" className='font-bold text-black p-2'>Register</Link></p>
        </form>
      </div>
    )

  }

export default Login