"use client"

import LinkTile from '@/components/LinkTile'
import React from 'react'
import { useSession } from 'next-auth/react';
import { useState,useEffect } from 'react';

const Page = ({params}) => {
    const [datam,setDatam] = useState(null);

    useEffect(()=>{
        fetch('https://platinleaf.vercel.app/api/link/getUserLinks', {
            method:"POST",
            body: JSON.stringify({
                username: params.username
            })
        }
        ) // Replace with your API endpoint
        .then(response => response.json())
        .then(datam => setDatam(datam));
        console.log(datam);
    },[])
   


    return (
        <div className='m-2'>
                <ul className='flex flex-col items-center'>
                    <li className="mt-10">
                        <h1 className='m-4 text-3xl font-bold'>
                            <span className='m-1 text-2xl font-extrabold'>$</span>{params.username}
                        </h1>
                    </li>
                    <li className='w-full flex justify-center'>
                        <ul className='flex flex-col items-start'>
                            <LinkTile title={"title"} url={"google.com"} icon={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"}/>
                            <LinkTile title={"instagram"} url={"url.com"} icon={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"}/>
                        </ul>
                    </li>
                </ul>
        </div>
    )
}

export default Page