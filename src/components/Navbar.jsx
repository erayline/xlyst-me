const Navbar = () => {
  
  return (
    <nav className="m-4">
      <div className="rounded-md lg:w-2/3 text-white flex flex-wrap items-center justify-center lg:justify-between mx-auto p-4 bg-slate-950">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <p className="text-5xl">🍸</p>
          <span className="self-center text-white text-3xl font-semibold">
            Prestige List
          </span>
        </a>

        {0 ? (
          <ul className="hidden lg:flex flex-col font-medium mt-4 rounded-lg lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
            <li>
              <a href={"/x/" + "kral"} className="navbar-li block  rounded lg:border-0 ">
                Profile
              </a>
            </li>
            <li>
              <a
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit" className="navbar-li block rounded lg:border-0">logout</button>
              </a>
            </li>
          </ul>
        ) : (
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="navbar-li block rounded lg:border-0  "
                >
                  How it works?
                </a>
              </li>
              <li>
                <a
                  href="/packs"
                  className="navbar-li block rounded lg:border-0  "
                >
                  Packs
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="navbar-li hover:lg:bg-white hover:lg:text-black block rounded bg-slate-950 text-white border-2 "
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
