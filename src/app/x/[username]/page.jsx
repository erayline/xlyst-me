"use client"

import LinkTile from '@/components/LinkTile';
import React, { useState, useEffect } from 'react';

const Page = ({ params }) => {
    const [datam, setDatam] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/link/getUserLinks', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: params.username
                })
            });
            const data = await response.json();
            setDatam(data.liste);
        };

        fetchData();
    }, [params.username]);

    function sayDatam() {
        console.log(datam, "bu fetchten gelen");
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
                        {datam ? datam.map((link, index) => (
                            <LinkTile key={index} title={link.title} url={link.url} icon={link.icon} />
                        )) : (
                            <p>Loading...</p>
                        )}
                    </ul>
                </li>
            </ul>
            <button onClick={sayDatam}>stk</button>
        </div>
    )
};

export default Page;
