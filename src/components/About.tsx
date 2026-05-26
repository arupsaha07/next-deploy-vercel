"use client";

export default function About() {
  return (
    <section className="relative py-32">
      <div className="container-custom">
        
        {/* SECTION HEADER */}
        <div className="mb-16 max-w-3xl">
          <div
            className="
              mb-4
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-slate-300
              backdrop-blur-md
            "
          >
            ✦ About Me
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Building scalable frontend systems
            with modern web technologies.
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div
            className="
              glass-card
              hover-lift
              p-8
              lg:p-10
            "
          >
            <h3 className="text-2xl font-bold text-white">
              Frontend Engineer with Product Thinking
            </h3>

            <div className="mt-6 space-y-6 text-slate-400 leading-8">
              
              <p>
                I'm Arup Saha, a frontend developer with over
                <span className="text-white font-semibold"> 9+ years </span>
                of experience building responsive, scalable, and user-focused
                applications for modern web platforms.
              </p>

              <p>
                My core expertise lies in
                <span className="text-white font-semibold">
                  {" "}React.js, Next.js, JavaScript, TypeScript,
                  Tailwind CSS, and frontend architecture.
                </span>
              </p>

              <p>
                Over the years, I have worked on enterprise-level dashboards,
                customer portals, banking and finance applications, support
                systems, and interactive UI platforms while collaborating
                closely with agile teams.
              </p>

              <p>
                Currently, I'm expanding into
                <span className="text-white font-semibold">
                  {" "}AI workflows, automation systems, Node.js,
                  and modern full-stack development
                </span>
                to build next-generation digital experiences.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            
            {/* EXPERIENCE CARD */}
            <div
              className="
                glass-card
                hover-lift
                p-8
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    Experience
                  </p>

                  <h3 className="mt-2 text-5xl font-black text-white">
                    9+
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Years building modern frontend applications
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    bg-purple-500/10
                    p-4
                    text-3xl
                  "
                >
                  🚀
                </div>
              </div>
            </div>

            {/* SKILLS CARD */}
            <div
              className="
                glass-card
                hover-lift
                p-8
              "
            >
              <p className="text-sm text-slate-400">
                Core Stack
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "Node.js",
                  "AI Workflows",
                  "Responsive UI",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-300
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:border-purple-500/30
                      hover:bg-purple-500/10
                      hover:text-white
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* JOURNEY CARD */}
            <div
              className="
                glass-card
                hover-lift
                relative
                overflow-hidden
                p-8
              "
            >
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-500/10
                  blur-3xl
                "
              />

              <p className="text-sm text-slate-400">
                Current Focus
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Interactive UI + AI Powered Experiences
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Exploring the intersection of frontend engineering,
                AI automation, modern UI systems, and scalable
                product experiences using Next.js and intelligent workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}