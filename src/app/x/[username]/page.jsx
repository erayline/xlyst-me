"use client"

import LinkTile from '@/components/LinkTile'
import React from 'react'
import { useState,useEffect } from 'react';

const Page = ({params}) => {
    const [datam,setDatam] = useState(null);

    useEffect(async ()=>{
        const result = await fetch('https://platinleaf.vercel.app/api/link/getUserLinks', {
            method:"POST",
            body: JSON.stringify({
                username: params.username
            })
        }
        ) // Replace with your API endpoint
        let liste = await result.json();
        setDatam(liste);
    },[])
    
    // const linkListesiJsx = datam.map((element,index) => {
    //     <LinkTile key={index} title={element.title} url={element.url} icon={element.icon}/>
    // })
    function sayDatam(){
        console.log(datam);
        console.log(datam.liste)
        datam.liste.map((element) => console.log(element));
        datam.liste.map((element) => console.log(element.title));
    }


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
                            <LinkTile title={"dummy"} url={"url.com"} icon={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"}/>
                            {/* {linkListesiJsx} */}
                        </ul>
                    </li>
                </ul>
                <button onClick={sayDatam}>stk</button>
        </div>
    )
}

export default Page