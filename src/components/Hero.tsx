"use client";

import Link from "next/link";

const STATS = [
  { value: "9+", label: "Years experience" },
  { value: "50+", label: "Projects shipped" },
  { value: "React · Next.js", label: "Core stack" },
];

export default function Hero() {
  return (
    <section className="border-b border-[#e5e5e5] py-28 lg:py-36">
      <div className="container-custom">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <p className="eyebrow mb-6">
            Available for freelance · Frontend & AI Systems
          </p>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl xl:text-[5rem]">
            I turn business chaos into{" "}
            <span className="gradient-text">intelligent software</span>.
          </h1>

          {/* Sub-copy */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#71717a]">
            Frontend engineer with 9+ years shipping scalable web products.
            Now specialising in AI workflow automation — mapping how your
            business actually runs, then building systems that do the work
            automatically.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/work" className="btn-primary">
              See My Work →
            </Link>
            <Link href="#about" className="btn-secondary">
              How I Work
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-[#e5e5e5] pt-10">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <p className="text-2xl font-bold tabular-nums text-[#111111]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm text-[#71717a]">{stat.label}</p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="hidden h-8 w-px bg-[#e5e5e5] sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
