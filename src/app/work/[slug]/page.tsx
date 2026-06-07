import { projects } from "@/src/data/projects";
import { notFound } from "next/navigation";

import ProjectHero from "@/src/components/work/sections/ProjectHero";
import OverviewSection from "@/src/components/work/sections/OverviewSection";
import TechStackSection from "@/src/components/work/sections/TechStackSection";
import ChallengesSection from "@/src/components/work/sections/ChallengesSection";
import SolutionsSection from "@/src/components/work/sections/SolutionsSection";
import LearningsSection from "@/src/components/work/sections/LearningsSection";
import MetricsSection from "@/src/components/work/sections/MetricsSection";
import ArchitectureDiagram from "@/src/components/work/jio-brahmos-web/ArchitectureDiagram";
import FeatureShowcase from "@/src/components/work/sections/FeatureShowcase";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 pt-16 pb-32">
      <ProjectHero {...project} />
      <OverviewSection overview={project.overview} />
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <MetricsSection metrics={project.metrics || []} />
        <TechStackSection techStack={project.techStack} />
      </div>

      {slug === "jio-brahmos-web" && <ArchitectureDiagram />}

      {project.showcase && project.showcase.length > 0 && (
        <FeatureShowcase items={project.showcase} />
      )}

      <ChallengesSection challenges={project.challenges || []} />
      <SolutionsSection solutions={project.solutions || []} />
      <LearningsSection learnings={project.learnings || []} />
    </main>
  );
}
