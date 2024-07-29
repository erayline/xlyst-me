"use client"

import LinkTile from '@/components/LinkTile'
import { useSession } from 'next-auth/react';
import React from 'react'
import { useState, useEffect } from 'react';

const Page = ({ params }) => {
    const [userList, setUserList] = useState(null);
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://platinleaf.vercel.app/api/link/getUserLinks', {
                method: "POST",
                body: JSON.stringify({
                    username: params.username
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let res = await result.json();
            console.log(res);

            // Map the response to LinkTile components
            res = res.liste.map((element, index) => {
                return <LinkTile key={index} title={element.title} url={element.url} icon={element.icon} />
            });
            setUserList(res);
        };

        fetchData().catch(console.error);
    }, [params.username]);

    if (status === "loading") {
        return (<div className='text-center text-9xl'>🍸</div>);
    }

    const addLinkJsx = <a className='inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-yellow-500 hover:text-black' href='https://platinleaf.vercel.app/addLink'>Add Link</a>;

    return (
        <div className='m-2'>
            <ul className='flex flex-col items-center'>
                {(session) && ((session.user.username == params.username) && addLinkJsx)}
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
    );
}

export default Page;
