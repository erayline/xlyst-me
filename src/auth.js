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
        authorize: async () =>{
            return {
                username:"oldu",
                email:"email@email.email"
            }
        }
    })
  ],
})