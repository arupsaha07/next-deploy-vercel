"use client";

import { Sparkles } from "lucide-react";
import { services } from "@/src/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-24 md:px-12"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Services
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Building AI-Powered Digital Experiences
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/70">
            I design and develop scalable platforms, automation systems,
            intelligent workflows, and premium user experiences for modern
            businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  hover:bg-white/10
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-400/0
                    via-cyan-400/0
                    to-cyan-400/10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-7 text-white/70">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-3
                          py-1
                          text-xs
                          text-white/70
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Glow */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-cyan-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}