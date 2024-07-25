"use server"

import { redirect } from "next/navigation";

export const loginUser = async (formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || "An unexpected error occurred" };
    }

    return { success: true };
  } catch (e) {
    console.error("Login error:", e);
    return { error: "An unexpected error occurred" };
  }
}

export const registerUser = async (formData) => {
  const email = formData.get('email');
  const password = formData.get('password');
  const age = formData.get('age');

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, age }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || "An unexpected error occurred" };
    }

    console.log("New User created :)");
    return { success: true };
  } catch (e) {
    console.error("Registration error:", e);
    return { error: "An unexpected error occurred" };
  }
}
