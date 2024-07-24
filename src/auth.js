import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDB from "./api/lib/db";
import { User } from "./models/user";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    //burada google da tanıtabilirsin
    Credentials({
      name: "Credentials",

      credentials:{
        email:{label:"email",type:"email"},
        password:{label:"password",type:"password"}
      },

      //duruma göre yetkilendirme
      authorize: async(credentials)=>{
        const email = credentials.email;
        const password = credentials.password;
        
        //burada kontrolleri yapabilirsin;
        //doluluk
        if(!email||!password) throw new Error("Please fill them");
        //kullanıcı var mı?
        await connectDB()
        const user = await User.findOne({email}).select("+password +role").lean()
        if(!user) throw new Error("Account not found");
        const isMatched = await compare(password,user.password);
        if(!isMatched) throw new Error("Wrong password");

        //artık kullanıcı bilgilerini gönderiyorsun serverden
        return{
          email:user.email,
          username:user.username,
          id:user._id.toString()
        };

      }


    })
  ],
  pages:{
    signIn:"/loginregister"
  },

  callbacks:{
    async session({session,token}){
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.username = token.username;
        return session;
    },
    async jwt({token,user}){
        if(user){
            token.id = user.id;
            token.email = user.email;
            token.username = user.username;
          }
        return token;
    }
}

})