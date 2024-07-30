"use client"

import LinkTile from '@/components/LinkTile'
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

const Page = ({params}) => {
    const [userList, setUserList] = useState([]);
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchUserLinks = async () => {
            const result = await fetch('https://platinleaf.vercel.app/api/link/getUserLinks', {
                method: "POST",
                body: JSON.stringify({
                    username: params.username
                })
            });

            const res = await result.json();

            setUserList(res.liste);
        };

        fetchUserLinks();
    }, [params.username]);

    const handleDelete = async (id) => {
        await fetch('https://platinleaf.vercel.app/api/link/deleteUserLink', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id:id })
        });

        setUserList(userList.filter(link => link._id !== id));
    };

    if (status === "loading") {
        return (<div className='m-10 text-center text-9xl'>🍸</div>);
    }

    const addLinkJsx = <a className='inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-yellow-500 hover:text-black' href='https://platinleaf.vercel.app/addLink'>Add Link</a>


    const isAdmin = session && (session.user.username === params.username);

    return (
        <div className='m-2'>
            <ul className='flex flex-col items-center'>
                {(session) && (isAdmin && addLinkJsx)}
                <li className="mt-10">
                    <h1 className='m-4 text-3xl font-bold'>
                        <span className='m-1 text-2xl font-extrabold'>$</span>{params.username}
                    </h1>
                </li>
                <li className='w-full flex justify-center'>
                    <ul className='flex flex-col items-start'>
                        {userList.map((element, index) => (
                            <LinkTile 
                                key={index} 
                                title={element.title} 
                                url={element.url} 
                                icon={element.icon} 
                                onDelete={() => handleDelete(element._id)}
                                isAdmin={isAdmin} 
                            />
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Page;
