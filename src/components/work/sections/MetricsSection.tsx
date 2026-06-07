export default function MetricsSection({
  metrics,
}: {
  metrics: string[];
}) {
  return (
    <section className="mb-20">
      <h2 className="mb-8 text-3xl font-bold text-foreground">
        Highlights
      </h2>

      <div className="flex flex-wrap gap-3">
        {metrics.map((metric) => (
          <div
            key={metric}
            className="
          rounded-full
          border border-cyan-500/20
          bg-cyan-500/10
          px-4 py-2
          text-sm text-secondary
        "
          >
            {metric}
          </div>
        ))}
      </div>
    </section>
  );
}