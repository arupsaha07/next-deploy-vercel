"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { ShowcaseItem } from "@/src/types/project.type";
import DeviceFrame from "../common/DeviceFrame";

interface FeatureShowcaseProps {
  items: ShowcaseItem[];
}

export default function FeatureShowcase({ items }: FeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  const active = items[activeIndex];
  const total = items.length;

  const goTo = (index: number) => {
    setActiveIndex((index + total) % total);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <section className="mb-20">
      <h2 className="mb-10 text-3xl font-bold text-foreground">Key Features</h2>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — feature copy */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.25 }}
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-secondary">
                {active.title}
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                {active.description}
              </p>

              <p className="mt-8 text-sm text-muted-foreground">
                {activeIndex + 1} of {total}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`View ${item.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    onClick={() => goTo(index)}
                    className={`
                      h-2 rounded-full transition-all duration-300
                      ${
                        index === activeIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-border hover:bg-muted-foreground"
                      }
                    `}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right — carousel frame */}
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screenshot"
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-card
              text-foreground
              transition-all
              duration-300
              hover:border-primary/30
              hover:bg-muted
              hover:text-primary
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative w-[280px] shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <DeviceFrame image={active.image} alt={active.title} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-card
              text-foreground
              transition-all
              duration-300
              hover:border-primary/30
              hover:bg-muted
              hover:text-primary
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
