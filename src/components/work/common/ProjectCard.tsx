import Link from "next/link";
import { Project } from "@/src/types/project.type";

type Props = Pick<
  Project,
  "title" | "category" | "shortDescription" | "techStack" | "slug"
>;

export default function ProjectCard({
  title,
  category,
  shortDescription,
  techStack,
  slug,
}: Props) {
  return (
    <Link href={`/work/${slug}`}>
      <div className="group rounded-3xl border border-border bg-card p-8 backdrop-blur-xl transition-all duration-300 hover:border-secondary/40 hover:bg-muted">
        <p className="mb-3 text-sm text-secondary">{category}</p>

        <h3 className="mb-4 text-2xl font-bold text-foreground">
          {title}
        </h3>

        <p className="mb-6 text-muted-foreground">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}