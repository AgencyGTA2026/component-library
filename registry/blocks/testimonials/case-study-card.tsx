import Link from "next/link"
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react"

const CASES = [
  {
    client: "Lakeside Dental",
    tag: "Healthcare",
    problem: "No-shows were eating 14% of the schedule.",
    result: "Automated reminders + easy rescheduling.",
    metrics: [
      { label: "No-show rate", value: "−63%", up: false },
      { label: "Monthly revenue", value: "+$18k", up: true },
    ],
    hue: "from-primary/25 to-primary/5",
  },
  {
    client: "Summit Roofing",
    tag: "Trades",
    problem: "Leads came in but went cold before a callback.",
    result: "Instant-quote form + same-hour text routing.",
    metrics: [
      { label: "Lead response", value: "4 hrs → 8 min", up: true },
      { label: "Booked jobs", value: "+41%", up: true },
    ],
    hue: "from-accent/25 to-accent/5",
  },
]

/**
 * Case study cards — problem → result with hard metrics. Stronger proof
 * than a quote alone; great for a results or work page.
 */
export function CaseStudyCard() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="font-medium text-primary">Proof, not promises</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Results we can point to.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((c) => (
            <article key={c.client} className="group flex flex-col overflow-hidden rounded-2xl border bg-card">
              <div className={`relative h-32 bg-gradient-to-br ${c.hue}`}>
                <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">{c.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{c.client}</h3>
                <p className="mt-2 text-sm text-muted-foreground"><span className="font-medium text-foreground">Problem:</span> {c.problem}</p>
                <p className="mt-1 text-sm text-muted-foreground"><span className="font-medium text-foreground">What we did:</span> {c.result}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t pt-5">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className={`flex items-center gap-1 text-xl font-semibold ${m.up ? "text-primary" : "text-primary"}`}>
                        {m.up ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />}
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>

                <Link href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read the full story <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
