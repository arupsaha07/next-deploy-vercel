export default function OverviewSection({
    overview,
  }: {
    overview: string;
  }) {
    return (
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-bold text-foreground">
          Overview
        </h2>
  
        <p className="max-w-4xl leading-8 text-muted-foreground">
          {overview}
        </p>
      </section>
    );
  }