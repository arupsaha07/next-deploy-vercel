export default function ChallengesSection({
    challenges,
  }: {
    challenges: string[];
  }) {
    return (
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-bold text-foreground">
          Challenges
        </h2>
  
        <div className="space-y-4">
          {challenges.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-border bg-card p-6 text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    );
  }