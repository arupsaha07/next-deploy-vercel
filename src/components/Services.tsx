"use client";

import { services } from "@/src/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <p className="eyebrow mb-4">Services</p>
            <h2 className="text-4xl font-bold tracking-tight text-[#111111] lg:text-5xl">
              What I can build for you.
            </h2>
          </div>
          <p className="max-w-sm text-[#71717a]">
            From a single AI-powered feature to a full platform rebuild —
            I design and develop systems that scale.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-xl border border-[#e5e5e5] bg-white p-8 transition-all duration-200 hover:border-[#5c47f5]/30 hover:shadow-sm"
              >
                {/* Accent top bar on hover */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#5c47f5] transition-all duration-300 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-[#e5e5e5] bg-[#f8f8f8] text-[#5c47f5] transition-colors group-hover:border-[#5c47f5]/20 group-hover:bg-[#5c47f5]/5">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-semibold text-[#111111]">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-6 text-[#71717a]">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-[#e5e5e5] bg-[#f8f8f8] px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-semibold text-[#111111]">
              Ready to map your workflow?
            </p>
            <p className="mt-1 text-sm text-[#71717a]">
              Let's spend 30 minutes understanding your process before we write any code.
            </p>
          </div>
          <a
            href="mailto:arupsaha@example.com"
            className="btn-primary shrink-0"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
