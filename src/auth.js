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

        try {
          let response = await fetch("https://platinleaf.vercel.app/api/login", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            })
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.message || "Login failed");
          }

          return {
            id: result.user._id,
            username: result.user.userName,
            email: email
          }
        } catch (error) {
          throw new Error(error.message || "Login failed");
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.user.username = token.username
      return session
    }
  },
  pages: {
    signIn: "/login"
  }
})