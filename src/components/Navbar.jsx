import { auth, signOut } from "@/auth";

const Navbar = async () => {
  const feedbackLink = "";
  const session = await auth();
    return (
    <nav className="m-4">
      <div className="rounded-md lg:w-3/4 text-white flex flex-wrap items-center justify-center lg:justify-between mx-auto p-4 bg-slate-950">
        <a href="https://platinleaf.vercel.app" className="flex items-center space-x-3 rtl:space-x-reverse">
          <p className="text-5xl">🧭</p>
          <span className="self-center text-white text-3xl font-semibold">
            XLyst
          </span>
        </a>

        {session ? (
          <ul className="hidden lg:flex flex-col font-medium mt-4 rounded-lg lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
            <li>
              <a
                href={"https://insigh.to/b/xlyst"}
                className="navbar-li block rounded lg:border-0"
              >
                Feedback? 🌇
              </a>
            </li>
            <li>
              <a
                href={"https://platinleaf.vercel.app/x/" + session.user.username}
                className="navbar-li block rounded lg:border-0"
              >
                Profile
              </a>
            </li>
            <li>
             <form action={async () => {
                'use server'
                await signOut();
              }}>
                <button
                  className="navbar-li block rounded lg:border-0"
                  type="submit"
                >
                  Logout
                </button>
              </form>
            </li>
          </ul>
        ) : (
          <div
            className="hidden w-full lg:block lg:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
              
              <li>
              <a
                href={"https://insigh.to/b/xlyst"}
                className="navbar-li block rounded lg:border-0"
              >
                Feedback? 🌇
              </a>
            </li>
              <li>
                <a
                  href="https://platinleaf.vercel.app/login"
                  className="navbar-li hover:lg:bg-white hover:lg:text-black block rounded bg-slate-950 text-white border-2"
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
