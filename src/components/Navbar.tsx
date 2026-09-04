import Link from "next/link";
import { createClient } from "@/src/lib/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white">
      <div className="container-custom flex h-16 items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-[#111111] transition-opacity hover:opacity-70"
        >
          Arup Saha
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/work"
            className="text-sm font-medium text-[#71717a] transition-colors hover:text-[#111111]"
          >
            Work
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium text-[#71717a] transition-colors hover:text-[#111111]"
          >
            Skills
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-[#71717a] transition-colors hover:text-[#111111]"
          >
            Services
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/login"
                className="hidden text-sm font-medium text-[#71717a] transition-colors hover:text-[#111111] md:block"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-[#5c47f5] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4c38e5]"
              >
                Hire Me
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <span className="hidden text-sm text-[#71717a] md:block">
                Welcome back
              </span>
              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="rounded-lg border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#dc2626] transition-colors hover:bg-red-50"
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
