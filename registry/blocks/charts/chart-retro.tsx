const STATS = [
  { label: "Cans popped", value: "12M+", fill: 88, color: "bg-primary" },
  { label: "5-star reviews", value: "48k", fill: 72, color: "bg-secondary" },
  { label: "Stores stocked", value: "3,200", fill: 64, color: "bg-accent" },
  { label: "Repeat buyers", value: "61%", fill: 61, color: "bg-primary" },
]

/**
 * Retro stats — rounded KPI tiles with chunky progress bars.
 */
export function ChartRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">By the numbers</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-[1.5rem] border-2 border-foreground bg-card p-6 shadow-[5px_5px_0_0_var(--foreground)]"
            >
              <div className="flex items-end justify-between">
                <span className="font-bold text-muted-foreground">{s.label}</span>
                <span className="text-3xl font-black tracking-tight">{s.value}</span>
              </div>
              <div className="mt-3 h-4 overflow-hidden rounded-full border-2 border-foreground bg-background">
                <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.fill}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
