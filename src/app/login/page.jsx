'use client'
import { login } from "@/action/user";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useEffect, useState } from 'react';

const Login = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [error, setError] = useState('');

    useEffect(() => {
        if (session && session.user?.username) {
            router.push(`/x/${session.user.username}`);
        }
    }, [session, router]);

    if (status === "loading") return <div className='m-10 text-center text-9xl'>🍸</div>
    
    if (session) return null; // Return null while redirecting

    const handleSubmit = async (formData) => {
        const result = await login(formData);
        if (result && result.error) {
            setError(result.error);
        }
    }

    return (
        <div className='w-full flex flex-col my-32 items-center justify-center'>
            <form action={handleSubmit} className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center border-4 p-4 md:p-10 border-primary rounded'>
                <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input className='w-full p-2 mb-4 border rounded' placeholder='email' type="email" name="email" id="email" required />
                <input className='w-full p-2 mb-4 border rounded' placeholder="****" type="password" name="password" id="password" required />
                <button type='submit' className='bg-black text-white p-2 rounded w-full'>Login</button>
                <p className='mt-4'>Don't have an account? <Link href="/register" className='font-bold text-black p-2'>Register</Link></p>
            </form>
        </div>
    )
}

export default Login