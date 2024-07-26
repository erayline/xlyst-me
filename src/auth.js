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