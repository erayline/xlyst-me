"use server"

const register = async (formData)=>{
    const email = formData.get("email")
    const password = formData.get("password")
    const username = formData.get("username")
    console.log(email);
}

export {register};