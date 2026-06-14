const STATS = [
  { label: "Years of the house", value: "100", fill: 100 },
  { label: "Pieces in the ledger", value: "9,400", fill: 78 },
  { label: "Master setters", value: "6", fill: 30 },
  { label: "Returning patrons", value: "84%", fill: 84 },
]

/**
 * Noir stats — serif figures over thin gold measure lines.
 */
export function ChartNoir() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">By the numbers</p>

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{s.label}</span>
                <span className="font-serif text-4xl tracking-tight text-primary">{s.value}</span>
              </div>
              <div className="mt-5 h-px w-full bg-border">
                <div className="h-px bg-primary" style={{ width: `${s.fill}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
