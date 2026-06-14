import { ArrowDownRight, ArrowUpRight } from "lucide-react"

const CARDS = [
  { label: "Appointments booked", value: "1,284", delta: 12.4, up: true, data: [12, 18, 14, 22, 20, 28, 26, 34] },
  { label: "Avg. response time", value: "2.1 hrs", delta: -18.2, up: true, data: [40, 36, 34, 30, 28, 24, 22, 18] },
  { label: "Repeat customers", value: "68%", delta: 4.1, up: true, data: [50, 52, 51, 55, 58, 60, 63, 68] },
  { label: "No-show rate", value: "3.2%", delta: 1.5, up: false, data: [2, 2.4, 2.1, 2.6, 2.8, 2.7, 3.0, 3.2] },
]

function sparkPath(data: number[]) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  return data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${28 - ((v - min) / range) * 26}`)
    .join(" ")
}

/**
 * Sparkline cards — KPI tiles each with a mini trend line and a period
 * delta. Pure SVG, no chart library. "Good" direction is set per metric
 * via `up`, so a falling response time can still read green.
 */
export function SparklineCards() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">This month at a glance</h2>
          <p className="mt-1 text-muted-foreground">Compared to the previous 30 days.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => {
            const positive = c.up
            return (
              <div key={c.label} className="rounded-2xl border bg-card p-5">
                <p className="text-sm text-muted-foreground">{c.label}</p>
                <p className="mt-1 text-3xl font-semibold tracking-tight">{c.value}</p>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <span
                    className={`flex items-center gap-1 text-sm font-medium ${positive ? "text-primary" : "text-destructive"}`}
                  >
                    {c.delta > 0 ? <ArrowUpRight className="size-4" /> : <ArrowDownRight className="size-4" />}
                    {Math.abs(c.delta)}%
                  </span>
                  <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="h-8 w-24 overflow-visible">
                    <polyline
                      points={sparkPath(c.data)}
                      fill="none"
                      stroke={positive ? "var(--primary)" : "var(--destructive)"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
