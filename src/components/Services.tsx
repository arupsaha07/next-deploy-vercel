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
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-sm text-secondary backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Services
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Building AI-Powered Digital Experiences
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
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
                  border-border
                  bg-card
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-secondary/30
                  hover:bg-muted
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-secondary/0
                    via-secondary/0
                    to-secondary/10
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
                    border-secondary/20
                    bg-secondary/10
                    text-secondary
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-4 text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-7 text-muted-foreground">
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
                          border-border
                          bg-muted
                          px-3
                          py-1
                          text-xs
                          text-muted-foreground
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
                    bg-secondary
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
