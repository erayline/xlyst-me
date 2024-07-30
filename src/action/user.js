"use server"

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const login = async (formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const session = await signIn('credentials', {
    redirect: false,
    callbackUrl: "/",
    email,
    password
  });

  if (session?.ok) {
    redirect(`/x/${session.user.username}`);
  } else {
    // Handle login error (optional)
    console.error("Login failed");
  }
};

const register = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  let result = await fetch("https://platinleaf.vercel.app/api/register", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      username
    })
  });

  result = await result.json();
  
  if (result.success) {
    redirect('/login');
  } else {
    // Handle registration error (optional)
    console.error("Registration failed");
  }
};

export { register, login };
