'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Layers3 } from 'lucide-react';

interface HeroSectionProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    category: string;
    client: string;
    domain: string;
    logo: string;
    heroImage: string;
    techStack: string[];
  };
}

export default function HeroSection({
  project,
}: HeroSectionProps) {
  const visibleTech = project.techStack.slice(0, 3);
  const remaining = project.techStack.length - visibleTech.length;

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            {/* Logo */}

            <Image
              src={project.logo}
              alt={project.client}
              width={56}
              height={56}
              className="mb-8"
            />

            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
              {project.title}
            </h1>

            <h2 className="mt-3 text-2xl text-muted-foreground">
              {project.subtitle}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
              {project.description}
            </p>

            {/* Category */}

            <div className="mt-8 inline-flex rounded-full border px-4 py-2 text-sm font-medium">
              {project.category}
            </div>

            {/* Stats */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border p-5">

                <Building2 className="mb-3 h-5 w-5 text-muted-foreground" />

                <p className="text-sm text-muted-foreground">
                  Client
                </p>

                <p className="mt-1 font-semibold">
                  {project.client}
                </p>

              </div>

              <div className="rounded-2xl border p-5">

                <Layers3 className="mb-3 h-5 w-5 text-muted-foreground" />

                <p className="text-sm text-muted-foreground">
                  Domain
                </p>

                <p className="mt-1 font-semibold">
                  {project.domain}
                </p>

              </div>

            </div>

            {/* Tech */}

            <div className="mt-10 flex flex-wrap gap-3">

              {visibleTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}

              {remaining > 0 && (
                <span className="rounded-full bg-muted px-4 py-2 text-sm">
                  +{remaining}
                </span>
              )}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .6, delay: .15 }}
          >
            <div className="overflow-hidden rounded-3xl border bg-card">

              <Image
                src={project.heroImage}
                alt={project.title}
                width={900}
                height={900}
                priority
                className="w-full"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}