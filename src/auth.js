import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;

        let result = await fetch("https://platinleaf.vercel.app/api/login", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          })
        })
        result = await result.json();
        
        // Make sure to return null if authentication fails
        if (result.error) {
          return null;
        }
        
        return {
          id: result.user.id, // Assuming the API returns an id
          username: result.user.userName,
          email: email
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // If `user` exists, it means this is the initial sign in
      if (user) {
        token.id = user.id
        token.username = user.username
      }
      return token
    },
    async session({ session, token }) {
      // Add the username to the session
      session.user.id = token.id
      session.user.username = token.username
      return session
    }
  },
  pages: {
    signIn: "/login"
  }
})