"use client"

import LinkTile from '@/components/LinkTile'
import React from 'react'
import { useState,useEffect } from 'react';

const Page = ({params}) => {
    const [userList,setUserList] = useState(null);

    useEffect(async ()=>{
        const result = await fetch('https://platinleaf.vercel.app/api/link/getUserLinks', {
            method:"POST",
            body: JSON.stringify({
                username: params.username
            })
        }
        ) // Replace with your API endpoint
        let res = await result.json();

        res = res.liste.map((element,index)=> {
            return <LinkTile key={index} title={element.title} url={element.url} icon={element.icon}/>
        })


        setUserList(res);
    },[])
    
    // const linkListesiJsx = datam.map((element,index) => {
    //     <LinkTile key={index} title={element.title} url={element.url} icon={element.icon}/>
    // }) 

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
                            {userList}
                        </ul>
                    </li>
                </ul>
        </div>
    )
}

export default Page