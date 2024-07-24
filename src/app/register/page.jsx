"use client"

import React, { useState } from 'react'
import { registerUser } from '@/action/user'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { redirect } from 'next/navigation'


const RegisterPage = () => {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (formData) => {
    const result = await registerUser(formData)
    if (result.success) {
      redirect('/login') // Redirect to home page on success
    } else {
      setError(result.error)
    }
  }

  return (
    <div className='w-full flex flex-col my-32 items-center justify-center'>
      <form action={handleSubmit} className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center border-4 p-4 md:p-10 border-primary rounded'>
        <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input className='w-full p-2 mb-4 border rounded' placeholder='email' type="email" name="email" id="email" required />
        <input className='w-full p-2 mb-4 border rounded' placeholder="****" type="password" name="password" id="password" required />
        <input className='w-full p-2 mb-4 border rounded' placeholder="age" type="text" name="age" id="age" required />
        <button className='bg-primary text-white p-2 rounded w-full' type='submit'>signup</button>
        <p className='mt-4'>Already have an account? <Link className='font-bold text-black hover:text-white hover:rounded hover:bg-primary p-2' href='/login'>Login</Link></p>
      </form>
    </div>
  )
}

export default RegisterPage