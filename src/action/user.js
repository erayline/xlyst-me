"use server"


import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const login = async (formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const result = await signIn('credentials', {
      redirect: false,
      callbackUrl: "/",
      email,
      password
    });

    if (result.error) {
      return { error: result.error };
    }

    redirect(`/`);
  } catch (error) {
    return { error: "An unexpected error occurred. Please try again." };
  }
};


const register = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  try {
    let response = await fetch("https://xlyst.me/api/register", {
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

    if (response.ok) {
      redirect('/login');
    } else {
      const result = await response.json();
      // Return the error message to be displayed in the UI
      return { error: result.message };
    }
  } catch (error) {
    console.error("Registration failed", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
};

export { register, login };