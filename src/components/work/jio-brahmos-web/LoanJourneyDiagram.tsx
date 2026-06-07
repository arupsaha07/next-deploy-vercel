import { LucideIcon } from "lucide-react";

interface FlowItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ArchitectureSectionProps {
  title: string;
  items: FlowItem[];
}

export default function ArchitectureSection({
  title,
  items,
}: ArchitectureSectionProps) {
  return (
    <section className="mb-20">
      <h2 className="mb-10 text-3xl font-bold text-foreground">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                rounded-3xl
                border border-border
                bg-card
                p-6
                backdrop-blur-xl
                transition-all duration-300
                hover:border-secondary/40
                hover:bg-muted
              "
            >
              <Icon className="mb-4 h-8 w-8 text-secondary" />

              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}