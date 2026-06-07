export default function TechStackSection({
    techStack,
  }: {
    techStack: string[];
  }) {
    return (
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-bold text-foreground">
          Tech Stack
        </h2>
  
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
    );
  }