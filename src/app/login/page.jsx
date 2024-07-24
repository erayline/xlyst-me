'use client'

import { loginUser } from '@/action/user'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LoginRegister = () => {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const formData = new FormData(event.target)

    try {
      const result = await loginUser(formData)
      if (result.error) {
        setError(result.error)
      } else if (result.success) {
        // Successful login
        router.push('/') // Redirect to home page or dashboard
      }
    } catch (error) {
      console.error("Login error:", error)
      setError('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <div className='w-full flex flex-col my-32 items-center justify-center'>
      <form onSubmit={handleSubmit} className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center border-4 p-4 md:p-10 border-primary rounded'>
        <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>Login</h2>
        <input className='w-full p-2 mb-4 border rounded' placeholder='email' type="email" name="email" id="email" required />
        <input className='w-full p-2 mb-4 border rounded' placeholder="****" type="password" name="password" id="password" required />
        <button type='submit' className='bg-primary text-white p-2 rounded w-full'>Login</button>
        {error && <p className='mt-4 text-red-500'>{error}</p>}
        <p className='mt-4'>Don't have an account? <Link href="/register" className='font-bold text-black hover:text-white hover:rounded hover:bg-primary p-2'>Register</Link></p>
      </form>
    </div>
  )
}

export default LoginRegister