"use client"

import LinkTile from '@/components/LinkTile'
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

const Page = ({params}) => {
    const [userList, setUserList] = useState([]);
    const { data: session, status } = useSession();
    const [adminView, setAdminView] = useState(false);

    useEffect(() => {
        const fetchUserLinks = async () => {
            const result = await fetch('https://www.xlyst.me/api/link/getUserLinks', {
            // const result = await fetch('http://localhost:3000/api/link/getUserLinks', {
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
        await fetch('https://www.xlyst.me/api/link/deleteUserLink', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id:id })
        });

        setUserList(userList.filter(link => link._id !== id));
    };

    if (status === "loading") {
        return (<div className='m-10 text-center text-9xl'>...</div>);
    }

    const addLinkJsx = <a className='inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-yellow-500 hover:text-black' href='https://xlyst.me/addLink'>Add Link</a>


    const isAdmin = session && (session.user.username === params.username);

    function handleAdminView(){
        setAdminView(p => !p);
    }

    return (
        <div className='m-2'>
            <ul className='flex flex-col items-center'>
                {
                    (isAdmin) &&
                    <button onClick={handleAdminView} className='text-center bg-zinc-300 p-3 m-3 font-semibold rounded-lg'>Admin/User view</button>
                }
                {(session) && adminView &&(isAdmin && addLinkJsx)}
                <li className='mt-2 flex flex-row items-center'>
                    <span className='my-1 text-4xl font-bold'>$</span>
                    <h1 className='my-4 mx-1 mt-3 text-3xl font-semibold'>
                        {params.username}
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
                                adminView={adminView}
                            />
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Page;
