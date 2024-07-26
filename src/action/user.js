"use server"

const register = async (formData)=>{
    const email = formData.get("email")
    const password = formData.get("password")
    const username = formData.get("username")

    let result = await fetch("https://platinleaf.vercel.app/api/register",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            email:email,
            password:password,
            username:username
        })
    })
    result = await result.json();
    console.log(email , result);
}

export {register};