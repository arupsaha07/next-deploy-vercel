import Link from "next/link";
import { createClient } from "@/src/lib/supabase/server";
import ThemeToggle from "@/src/components/ThemeToggle";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between">
        {/* LEFT */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          arup<span className="gradient-text">.</span>
        </Link>

        {/* CENTER NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/work"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {!user ? (
            <>
              <Link
                href="/login"
                className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:block"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="
                  rounded-full
                  border
                  border-border
                  bg-card
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-foreground
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/30
                  hover:bg-muted
                "
              >
                Hire Me
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="hidden text-sm text-muted-foreground md:block">
                Welcome back
              </div>

              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="
                    rounded-full
                    border
                    border-error/20
                    bg-error/10
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-error
                    transition-all
                    duration-300
                    hover:bg-error/20
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
