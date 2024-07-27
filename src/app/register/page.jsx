"use client"

import { register } from "@/action/user"

const Register = () => {

  return (
    <div className='w-full flex flex-col my-32 items-center justify-center'>
      <form action={register} className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center border-4 p-4 md:p-10 border-primary rounded'>
        <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>Register</h2>
        <input className='w-full p-2 mb-4 border rounded' placeholder='email' type="email" name="email" id="email" required />
        <input className='w-full p-2 mb-4 border rounded' placeholder="****" type="password" name="password" id="password" required />
        <input className='w-full p-2 mb-4 border rounded' placeholder="username" type="text" name="username" id="username" required />
        <button className='bg-black text-white p-2 rounded w-full' type='submit'>signup</button>
        <p className='mt-4'>Already have an account? <a className='font-bold text-black p-2' href='/login'>Login</a></p>
      </form>
    </div>
  )
}

export default Register