"use client";

import { skills } from "@/src/data/skills";

const STATS = [
  { value: "9+",     label: "Years experience",         mono: true },
  { value: "20+",    label: "Projects delivered",        mono: true },
  { value: "Modern", label: "AI-driven dev workflow",    mono: false },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[#e5e5e5] py-24 lg:py-32">
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <p className="eyebrow mb-4">Capabilities</p>
            <h2 className="text-4xl font-bold tracking-tight text-[#111111] lg:text-5xl">
              The stack I use to build.
            </h2>
          </div>
          <p className="max-w-sm text-[#71717a]">
            Nine years of shipping across enterprise dashboards, banking
            portals, AI automation systems, and design-system work.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-xl border border-[#e5e5e5] bg-white p-6 transition-colors duration-150 hover:border-[#5c47f5]/30 hover:bg-[#f8f8f8]"
            >
              {/* Icon */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-[#f8f8f8] text-[#5c47f5] transition-colors group-hover:border-[#5c47f5]/20 group-hover:bg-[#5c47f5]/5">
                <skill.icon className="h-4 w-4" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-base font-semibold text-[#111111]">
                {skill.title}
              </h3>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#e5e5e5]">
          <div className="grid grid-cols-1 gap-px bg-[#e5e5e5] sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-8 py-7 text-center">
                <p
                  className={`text-3xl font-bold text-[#111111] ${s.mono ? "tabular-nums" : ""}`}
                >
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm text-[#71717a]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
