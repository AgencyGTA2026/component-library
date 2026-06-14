import { ArrowUpRight } from "lucide-react"

const BARS = [
  { label: "Organic traffic", value: 92, delta: "+214%" },
  { label: "Conversion rate", value: 74, delta: "+61%" },
  { label: "Page speed score", value: 98, delta: "+40 pts" },
  { label: "Bounce rate", value: 28, delta: "−37%" },
]

/**
 * Brutal stats — heavy horizontal bars with hard-edged fills and deltas.
 */
export function ChartBrutal() {
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">After we shipped</p>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-tighter uppercase">
          The numbers moved.
        </h2>

        <div className="mt-12 space-y-7">
          {BARS.map((b) => (
            <div key={b.label}>
              <div className="flex items-end justify-between">
                <span className="text-sm font-black uppercase">{b.label}</span>
                <span className="flex items-center gap-1 border-2 border-foreground bg-accent px-2 py-0.5 font-mono text-xs font-bold">
                  <ArrowUpRight className="size-3" />
                  {b.delta}
                </span>
              </div>
              <div className="mt-2 h-7 border-2 border-foreground bg-background p-0.5">
                <div
                  className="h-full bg-foreground"
                  style={{ width: `${b.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
