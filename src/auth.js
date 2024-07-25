import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials" 


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
        name:"Credentials",
        credentials:{
            email:{label:"Email",type:"email"},
            password:{label:"Password",type:"password"}
        },
        authorize: async (credentials)=>{
            const email = credentials.email;
            const password = credentials.password;
            if(!email||!password){
                throw new Error("Please fill in the form");
            }
            //fetch kullanarak kullanıcı adlarını falan çağıracağız
            return ( {
              email:"eray@e.e",
              name:"eray"
            } )

        }
    })
  ],
  pages:{
    signIn:'/login'
  }
})