"use client";

import { addLink } from "@/action/link";

const Register = () => {
  return (
    <div className='w-full flex flex-col my-32 items-center justify-center'>
      <form action={addLink} className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center border-4 p-4 md:p-10 border-primary rounded'>
        <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>Add a Link</h2>
        <input className='w-full p-2 mb-4 border rounded' placeholder='Title(X, my products...)' type="title" name="title" id="title" required />
        <input className='w-full p-2 mb-4 border rounded' placeholder="url" type="text" name="url" id="url" required />
        <button className='bg-black text-white p-2 rounded w-full' type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Register;
