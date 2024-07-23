import { auth } from "@/auth";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  
  console.log(session);

  return (
    <nav class="border-zinc-200">
      <div class="max-w-screen text-white flex flex-wrap items-center justify-center lg:justify-around mx-auto p-4 bg-zinc-800">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <p className="text-5xl">🍸</p>
          <span class="self-center text-white text-3xl font-semibold">Prestige List</span>
        </a>

        {session ? (
          <ul className="hidden lg:flex flex-col font-medium mt-4 rounded-lg lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
            <li>
              <a
                href="#"
                class="block py-2 px-3 lg:p-0 rounded lg:border-0 "
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 lg:p-0 rounded lg:border-0 "
              >
                Logout
              </a>
            </li>
          </ul>
          
        ) : (
            <div class="hidden w-full lg:block lg:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 px-3 lg:p-0 rounded lg:border-0  "
                >
                  How it works?
                </a>
              </li>
              <li>
                <a
                  href="/packs"
                  class="block py-2 px-3 lg:p-0 rounded lg:border-0  "
                >
                  Packs
                </a>
              </li>
              <li>
                <a
                  href="/loginregister"
                  class="block py-2 px-3 lg:p-0 rounded lg:border-0 "
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
