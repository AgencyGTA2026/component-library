const STATS = [
  { label: "Uptime", value: "99.99%", fill: 99, glow: "primary" },
  { label: "Avg compile", value: "0.8ms", fill: 88, glow: "accent" },
  { label: "Active runners", value: "240k", fill: 76, glow: "primary" },
  { label: "ICE bypass rate", value: "97%", fill: 97, glow: "accent" },
]

/**
 * Cyber stats — glowing neon KPI tiles with charged progress bars.
 */
export function ChartCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// telemetry</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {STATS.map((s) => (
            <div
              key={s.label}
              className={`border bg-card p-6 ${s.glow === "accent" ? "border-accent/40" : "border-primary/40"}`}
            >
              <div className="flex items-end justify-between">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.label}</span>
                <span className={`font-mono text-3xl font-black ${s.glow === "accent" ? "text-accent" : "text-primary"}`}>
                  {s.value}
                </span>
              </div>
              <div className="mt-4 h-2.5 overflow-hidden border border-border bg-background">
                <div
                  className={`h-full ${s.glow === "accent" ? "bg-accent shadow-[0_0_12px_rgba(255,0,229,0.7)]" : "bg-primary shadow-[0_0_12px_rgba(34,211,238,0.7)]"}`}
                  style={{ width: `${s.fill}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
