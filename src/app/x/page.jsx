"use client"

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {

    const { data: session, status } = useSession();

    if(status == "loading"){
        return <></>
    }

    if(session) redirect('/' + session.user.username);

    if(!session) redirect('/');
}

export default page