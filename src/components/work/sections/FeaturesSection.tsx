export default function FeaturesSection({
    features,
  }: {
    features: string[];
  }) {
    return (
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-bold text-foreground">
          Key Features
        </h2>
  
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-border bg-card p-6 text-muted-foreground"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>
    );
  }