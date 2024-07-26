"use server"

const register = async (formData)=>{
    const email = formData.get("email")
    const password = formData.get("password")
    const username = formData.get("username")

    let result = await fetch("http://localhost:3000/api/register",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({mesaj:"naber"})
    })
    result = await result.json();
    console.log(email , result);
}

export {register};