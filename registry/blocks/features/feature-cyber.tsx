import { Check } from "lucide-react"

const ROWS = [
  {
    kicker: "// runtime",
    title: "Compile intent, not code",
    body: "Describe the outcome; Nexen routes the daemons, allocates the cycles, and ships the trace. You stay in the flow.",
    points: ["Sub-ms compile", "Auto-allocated cycles", "Zero boilerplate"],
  },
  {
    kicker: "// defense",
    title: "Walk past the ICE",
    body: "Adaptive ICE-breakers learn the grid as you move. When the wall shifts, your route shifts with it.",
    points: ["Adaptive routing", "Live threat map", "Silent fallback"],
  },
]

/**
 * Cyber features — alternating rows with a neon checklist and a glowing panel.
 */
export function FeatureCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-6">
        {ROWS.map((r, i) => (
          <div
            key={r.title}
            className={`grid items-center gap-8 border border-border bg-card p-6 sm:p-8 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent">{r.kicker}</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight">{r.title}</h3>
              <p className="mt-3 text-muted-foreground">{r.body}</p>
              <ul className="mt-5 space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 font-mono text-sm tracking-wide">
                    <span className="grid size-5 place-items-center border border-primary/50 text-primary shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                      <Check className="size-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative grid min-h-[200px] place-items-center overflow-hidden border border-primary/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(255,0,229,0.12))]">
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px)] bg-[size:100%_22px]" />
              <span className="relative font-mono text-5xl font-black text-primary/70">0{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
