import { auth, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  
  const session = await auth();

  return (
    <nav class="m-4">
      <div class="rounded-md lg:w-2/3 text-white flex flex-wrap items-center justify-center lg:justify-between mx-auto p-4 bg-slate-950">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <p className="text-5xl">🍸</p>
          <span class="self-center text-white text-3xl font-semibold">
            Prestige List
          </span>
        </a>

        {session ? (
          <ul className="hidden lg:flex flex-col font-medium mt-4 rounded-lg lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
            <li>
              <Link href={"/x/" + session.user.username} class="navbar-li block  rounded lg:border-0 ">
                Profile
              </Link>
            </li>
            <li>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit" className="navbar-li block rounded lg:border-0">logout</button>
              </form>
            </li>
          </ul>
        ) : (
          <div class="hidden w-full lg:block lg:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="navbar-li block rounded lg:border-0  "
                >
                  How it works?
                </a>
              </li>
              <li>
                <a
                  href="/packs"
                  class="navbar-li block rounded lg:border-0  "
                >
                  Packs
                </a>
              </li>
              <li>
                <Link
                  href="/login"
                  class="navbar-li hover:lg:bg-white hover:lg:text-black block rounded bg-slate-950 text-white border-2 "
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
