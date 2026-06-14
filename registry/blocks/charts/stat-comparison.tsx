const ROWS = [
  { label: "Avg. wait time", before: 42, after: 11, unit: "min", lowerBetter: true },
  { label: "First-visit resolution", before: 58, after: 89, unit: "%", lowerBetter: false },
  { label: "Patient satisfaction", before: 71, after: 96, unit: "%", lowerBetter: false },
  { label: "Follow-up no-shows", before: 19, after: 6, unit: "%", lowerBetter: true },
]

/**
 * Stat comparison — paired "before vs. after" (or vs-benchmark) bars
 * that make an improvement obvious at a glance. Pure CSS bars; set
 * `lowerBetter` per row so reductions read as wins.
 */
export function StatComparison() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">The difference</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
            Before us vs. after us.
          </h2>
        </div>

        <div className="mb-5 flex items-center justify-end gap-6 text-sm">
          <span className="flex items-center gap-2"><span className="size-3 rounded-full bg-muted-foreground/40" /> Before</span>
          <span className="flex items-center gap-2"><span className="size-3 rounded-full bg-primary" /> After</span>
        </div>

        <div className="space-y-7">
          {ROWS.map((r) => {
            const max = Math.max(r.before, r.after)
            const improved = r.lowerBetter ? r.after < r.before : r.after > r.before
            const change = Math.round(((r.after - r.before) / r.before) * 100)
            return (
              <div key={r.label}>
                <div className="mb-2 flex items-baseline justify-between">
                  <p className="font-medium">{r.label}</p>
                  <span className={`font-mono text-sm ${improved ? "text-primary" : "text-destructive"}`}>
                    {change > 0 ? "+" : ""}{change}%
                  </span>
                </div>
                <div className="space-y-1.5">
                  <Bar value={r.before} max={max} unit={r.unit} tone="bg-muted-foreground/40" />
                  <Bar value={r.after} max={max} unit={r.unit} tone="bg-primary" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Bar({ value, max, unit, tone }: { value: number; max: number; unit: string; tone: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-7 flex-1 overflow-hidden rounded-md bg-secondary">
        <div
          className={`flex h-full items-center justify-end rounded-md px-2 text-xs font-semibold text-background [transition:width_0.8s_ease] ${tone}`}
          style={{ width: `${Math.max(12, (value / max) * 100)}%` }}
        >
          {value}{unit}
        </div>
      </div>
    </div>
  )
}
