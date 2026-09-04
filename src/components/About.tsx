"use client";

const WORKFLOW_STEPS = [
  {
    step: "01",
    label: "Understand",
    desc: "Grasp the business problem and user pain points before writing a single line of code.",
  },
  {
    step: "02",
    label: "Observe",
    desc: "Study existing processes, user behaviour, and data flows in their natural context.",
  },
  {
    step: "03",
    label: "Map Workflow",
    desc: "Document every step, decision point, and handoff in the current process.",
  },
  {
    step: "04",
    label: "Find Bottlenecks",
    desc: "Pinpoint friction, repetition, and automation opportunities hiding in plain sight.",
  },
  {
    step: "05",
    label: "Design AI Workflow",
    desc: "Architect intelligent pipelines that replace bottlenecks with autonomous systems.",
  },
  {
    step: "06",
    label: "Build",
    desc: "Develop with React, Next.js, Node.js, and AI APIs — clean, typed, tested.",
  },
  {
    step: "07",
    label: "Deploy",
    desc: "Ship via CI/CD with zero-downtime releases and real-time observability.",
  },
  {
    step: "08",
    label: "Improve",
    desc: "Measure, iterate, and compound gains. Every deploy starts the next cycle.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-[#e5e5e5] py-24 lg:py-32">
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="text-4xl font-bold tracking-tight text-[#111111] lg:text-5xl">
            How I build — from first meeting to final deploy.
          </h2>
          <p className="mt-5 text-lg text-[#71717a]">
            Eight steps. No skipped stages. Every engagement starts here.
          </p>
        </div>

        {/* Hairline-grid pipeline */}
        <div className="overflow-hidden rounded-xl border border-[#e5e5e5]">
          <div className="grid grid-cols-1 gap-px bg-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((item) => (
              <div
                key={item.step}
                className="group bg-white p-6 transition-colors duration-150 hover:bg-[#f8f8f8]"
              >
                {/* Step number */}
                <span className="font-mono text-xs font-semibold tabular-nums text-[#5c47f5]">
                  {item.step}
                </span>

                {/* Label */}
                <h3 className="mt-3 text-base font-semibold text-[#111111]">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-[#71717a]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <p className="text-sm text-[#71717a]">
            Used across every client engagement since 2019.
          </p>
          <div className="flex flex-wrap gap-2">
            {["AI Automation", "Frontend Engineering", "Workflow Design"].map(
              (t) => (
                <span key={t} className="tag">{t}</span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
