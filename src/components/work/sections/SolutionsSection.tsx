export default function SolutionsSection({
    solutions,
}: {
    solutions: string[];
}) {
    return (
        <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold text-foreground">
                Solutions
            </h2>

            <div className="space-y-4">
                {solutions.map((item) => (
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