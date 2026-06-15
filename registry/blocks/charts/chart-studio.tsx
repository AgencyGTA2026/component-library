const STATS = [
  { label: "Members who stay past a year", value: "88%", fill: 88 },
  { label: "Average class size", value: "6", fill: 40 },
  { label: "Report better sleep", value: "9 in 10", fill: 90 },
  { label: "Teachers, fully certified", value: "100%", fill: 100 },
]

/**
 * Studio stats — calm KPI cards with soft blush measure bars.
 */
export function ChartStudio() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.25em] uppercase text-primary">The quiet results</p>
        <h2 className="mt-4 font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight">What members tell us</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <span className="font-serif text-3xl tracking-tight text-primary">{s.value}</span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-primary" style={{ width: `${s.fill}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
