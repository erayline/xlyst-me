"use server";

import Link from "next/link";

const Navbar = async () => {

  return (
    <nav className="m-4">
      <div className="rounded-md lg:w-2/3 text-white flex flex-wrap items-center justify-center lg:justify-between mx-auto p-4 bg-slate-950">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <p className="text-5xl">🍸</p>
          <span className="self-center text-white text-3xl font-semibold">
            Prestige List
          </span>
        </Link>

        {0 ? (
          <ul className="hidden lg:flex flex-col font-medium mt-4 rounded-lg lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
            <li>
              <Link
                href={"/x/" + "kral"}
                className="navbar-li block rounded lg:border-0"
              >
                Profile
              </Link>
            </li>
            <li>
                <button
                  className="navbar-li block rounded lg:border-0"
                  type="submit"
                >
                  Logout
                </button>
            </li>
          </ul>
        ) : (
          <div
            className="hidden w-full lg:block lg:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link href="/" className="navbar-li block rounded lg:border-0">
                  How it works?
                </Link>
              </li>
              <li>
                <Link
                  href="/packs"
                  className="navbar-li block rounded lg:border-0"
                >
                  Packs
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="navbar-li hover:lg:bg-white hover:lg:text-black block rounded bg-slate-950 text-white border-2"
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
