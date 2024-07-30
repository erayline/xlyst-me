"use server"


import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const login = async (formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    });

    if (result.error) {
      return { error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.error("Login failed", error);
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
      return { success: true };
    } else {
      const result = await response.json();
      return { error: result.message };
    }
  } catch (error) {
    console.error("Registration failed", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
};

export { register, login };