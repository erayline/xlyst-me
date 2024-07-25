"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export const login = async (formData)=>{
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email,password)

    try{
        await signIn('credentials',{
            redirect:false,
            callbackUrl:'/',
            email,
            password
        })
    } catch(e){
        return e.cause;
    }
    redirect('/');
}

// export const register = async (formData) =>{
//     const firstName = formData.get('firstname'); // form'dan data ona verdiğimiz ad ile çekiyoruz bundan önce middleware'i kodlamıştık
//     const lastName = formData.get('lastname'); // form'dan data ona verdiğimiz ad ile çekiyoruz bundan önce middleware'i kodlamıştık
//     const email = formData.get('email'); // form'dan data ona verdiğimiz ad ile çekiyoruz bundan önce middleware'i kodlamıştık
//     const password = formData.get('password'); // form'dan data ona verdiğimiz ad ile çekiyoruz bundan önce middleware'i kodlamıştık
    
//     if(!firstName || !lastName || !email || !password){
//         throw new Error('please fill all');
//     }

//     //burada kayıt endpointi lazım
//     await connectDB();
//     // eğer var mı diye kontrol et -> emial ile 
//     const existingUser = await User.findOne({email})
//     if(existingUser) throw new Error('user already exist');

    
//     const hashedPassword = await hash(password,12);
//     await User.create({firstName,lastName,email,password:hashedPassword});
//     //tanımlama yapmayınca değişken adı anahtar ismi, değeri ise anahtarın değeri oluyor
//     console.log(`user created! :)`);
//     redirect('/login');
// }