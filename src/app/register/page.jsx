'use client'
import { register } from "@/action/user";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useState } from 'react';

const Register = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [registering, setRegistering] = useState('Register');

    const handleSubmit = async (formData) => {
        const result = await register(formData);
        if (result.success) {
            router.push('/login');
        } else if (result.error) {
            setError(result.error);
            setRegistering("Register");
        }
    }

    function handleLogging(){
      setRegistering("⏳");
    }
    return (
        <div className='w-full flex flex-col my-32 items-center justify-center'>
            <form action={handleSubmit} className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center border-4 p-4 md:p-10 border-primary rounded'>
                <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>Register</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input className='w-full p-2 mb-4 border rounded' placeholder='email' type="email" name="email" id="email" required />
                <input className='w-full p-2 mb-4 border rounded' placeholder='username' type="text" name="username" id="username" required />
                <input className='w-full p-2 mb-4 border rounded' placeholder="****" type="password" name="password" id="password" required />
                <button type='submit' onClick={handleLogging} className='bg-black text-white p-2 rounded w-full'>{registering}</button>
                <p className='mt-4'>Already have an account? <Link href="/login" className='font-bold text-black p-2'>Login</Link></p>
            </form>
        </div>
    )
}

export default Register;