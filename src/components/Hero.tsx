"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-custom min-h-[calc(100vh-80px)] flex items-center py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            
            {/* SMALL BADGE */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                rounded-full
                border
                border-border
                bg-card
                px-4
                py-2
                text-sm
                text-muted-foreground
                backdrop-blur-md
              "
            >
              ✦ Frontend Engineer • React • Next.js
            </div>

            {/* HEADING */}
            <h1
              className="
                text-5xl
                font-black
                leading-tight
                tracking-tight
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              Crafting Modern
              <span className="gradient-text block">
                Web Experiences
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              I'm Arup Saha — a frontend engineer with 9+ years of
              experience building scalable, responsive, and interactive
              applications using React.js, Next.js, TypeScript, and
              modern UI systems.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              
              <Link
                href="/projects"
                className="
                  rounded-full
                  gradient-bg
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-primary-foreground
                "
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-full
                  border
                  border-border
                  bg-card
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-foreground
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-muted
                "
              >
                Hire Me
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-14 flex flex-wrap gap-10">
              
              <div>
                <h3 className="text-3xl font-bold text-foreground">9+</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-foreground">50+</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-foreground">React</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Specialized Stack
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            
            {/* MAIN GLASS CARD */}
            <div
              className="
                glass-card
                relative
                overflow-hidden
                p-8
              "
            >
              {/* TOP BAR */}
              <div className="flex items-center gap-2 border-b border-border pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              {/* CODE PREVIEW */}
              <div className="mt-6 space-y-4 font-mono text-sm">
                
                <div className="text-purple-400">
                  const developer = {"{"}
                </div>

                <div className="pl-6 text-muted-foreground">
                  name: <span className="text-cyan-400">"Arup Saha"</span>,
                </div>

                <div className="pl-6 text-muted-foreground">
                  role: <span className="text-cyan-400">"Frontend Engineer"</span>,
                </div>

                <div className="pl-6 text-muted-foreground">
                  stack: [
                  <span className="text-cyan-400">
                    "React", "Next.js", "TypeScript"
                  </span>
                  ],
                </div>

                <div className="pl-6 text-muted-foreground">
                  experience:
                  <span className="text-cyan-400"> "9+ Years"</span>,
                </div>

                <div className="text-purple-400">{"}"}</div>
              </div>

              {/* FLOATING GLOW */}
              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-purple-500/20
                  blur-3xl
                "
              />
            </div>

            {/* FLOATING CARD 1 */}
            <div
              className="
                glass-card
                absolute
                -left-10
                bottom-10
                hidden
                p-4
                lg:block
              "
            >
              <p className="text-sm text-muted-foreground">
                UI Engineering
              </p>

              <h4 className="mt-1 text-lg font-semibold text-foreground">
                Modern Design Systems
              </h4>
            </div>

            {/* FLOATING CARD 2 */}
            <div
              className="
                glass-card
                absolute
                -right-10
                top-10
                hidden
                p-4
                lg:block
              "
            >
              <p className="text-sm text-muted-foreground">
                Current Focus
              </p>

              <h4 className="mt-1 text-lg font-semibold text-foreground">
                Next.js + AI Workflows
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}