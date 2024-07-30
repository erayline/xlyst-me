// import { auth } from "@/auth";

import { redirect } from "next/navigation";



const addLink = async (formData) => {
    const title = formData.get('title');
    const url = formData.get('url');
    const username = formData.get('username');
    const iconUrl = formData.get('iconUrl');

    const response = await fetch("/api/link/addLink", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            url,
            username,
            iconUrl
        })
    });

    const data = await response.json();
    if (data.success) {
        redirect(`https://www.xlyst.me/x/${username}`)
        // handle success
    } else {
        // handle error
    }
};

export { addLink };
