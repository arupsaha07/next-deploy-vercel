import Link from "next/link";
import { createClient } from "@/src/lib/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between">
        {/* LEFT */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          arup<span className="gradient-text">.</span>
        </Link>

        {/* CENTER NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link
                href="/login"
                className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white md:block"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/20
                  hover:bg-white/20
                "
              >
                Hire Me
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="hidden text-sm text-slate-300 md:block">
                Welcome back
              </div>

              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="
                    rounded-full
                    border
                    border-red-500/20
                    bg-red-500/10
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-red-400
                    transition-all
                    duration-300
                    hover:bg-red-500/20
                  "
                >
                  Logout
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}