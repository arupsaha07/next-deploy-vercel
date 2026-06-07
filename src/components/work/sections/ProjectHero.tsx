import { Project } from "@/src/types/project.type";
import { Landmark } from "lucide-react";
import Image from "next/image";

export default function ProjectHero({
  title,
  subtitle,
  category,
  client,
  logo,
}: Project) {
  return (
    <section className="mb-20">
      <div className="mb-4 flex items-center gap-2 text-secondary">
        <Landmark className="h-4 w-4" />
        <span>{category}</span>
      </div>

      <h1 className="mb-4 text-5xl font-bold text-foreground md:text-7xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mb-4 text-xl text-muted-foreground">
          {subtitle}
        </p>
      )}

      {client && (
        <div className="inline-flex rounded-full border border-border bg-card px-4 py-2 ps-2 text-sm text-muted-foreground">
          <Image
              src={logo || ""}
              alt={title}
              width={20}
              height={20}
              className="h-5 w-5 object-contain me-2"
            />
          Client · {client}
        </div>
      )}
    </section>
  );
}