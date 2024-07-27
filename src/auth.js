import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        name:"credentials",
        credentials: {
            email: {label:"email",type:"email"},
            password: {label:"password",type:"password"},
          },
        authorize: async (credentials) =>{
          const email = credentials.email;
          const password = credentials.password;

          // burada route falan yap kendi giris methodunu kodla
          let result = await fetch("https://platinleaf.vercel.app/api/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                email:email,
                password:password,
            })
            })
            result = await result.json();
            console.log(result);
            return {
                username:"oldu",
                email:email
            }
        }
    })
  ],
  pages:{
    signIn:"/login"
  }
})