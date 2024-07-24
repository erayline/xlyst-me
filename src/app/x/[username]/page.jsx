"use server"

import connectDB from '@/lib/db'
import { userLink } from '@/models/userLink';
import React from 'react'
import { User } from '@/models/user';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

async function getUserInfo(username){
  await connectDB();
  const person = await User.findOne({username:username});
  return person;
}
async function getUserLinks(userId){
  await connectDB();
  const userLinks = userLink.find({user:userId});
  return userLinks;
}


const Profile = async ({params}) => {
  const session = await auth();
  if(session) console.log(session.user.username);
  const person = await getUserInfo(params.username);
  if(!person) redirect("/")
  


  const personLinks = await getUserLinks(person.id);
  
  const linkListesi = personLinks.map((element,index)=>{
    return (
      <li key={index} className='border-4 border-primary rounded m-2 hover:bg-primary hover:text-white'>
        <a className='flex flex-row p-4 gap-2 justify-center w-64' href={element.url}>
          <h4 className='text-xl font-bold'>{element.title}</h4>
        </a>
      </li>
    )
  })


  //if user not found, redirect to homepage

  return (
    <div className='w-full flex flex-col my-8 items-center justify-center'>
      {session ? (session.user.username == params.username ? <div>senin profilin</div> : null) : null}
      
      <div className='flex flex-col justify-center items-center '>
        <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>@{person.username}</h2>
        <ul className=''>
          {linkListesi}
        </ul>
      </div>


    </div>      
      
  )
}

export default Profile