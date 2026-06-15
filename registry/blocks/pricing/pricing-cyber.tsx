import { Check } from "lucide-react"

const PLANS = [
  {
    name: "Street",
    price: "0",
    blurb: "For runners getting wired.",
    points: ["2 cores", "Public mesh", "Community ICE", "Rate-limited"],
    featured: false,
  },
  {
    name: "Runner",
    price: "49",
    blurb: "For solos on the clock.",
    points: ["16 cores", "Private mesh", "ICE-breaker v3", "Live trace monitor", "Priority routing"],
    featured: true,
  },
  {
    name: "Corp",
    price: "199",
    blurb: "For crews running the grid.",
    points: ["Unlimited cores", "Dedicated nodes", "Custom daemons", "SLA + on-call fixer"],
    featured: false,
  },
]

/**
 * Cyber pricing — slate plan cards; the featured one glows cyan.
 */
export function PricingCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight">// select_tier</h2>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col border bg-card p-6 ${
                p.featured
                  ? "border-primary shadow-[0_0_32px_rgba(34,211,238,0.25)] md:-translate-y-3"
                  : "border-border"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-lg font-black tracking-[0.1em] uppercase">{p.name}</p>
                {p.featured && (
                  <span className="border border-accent/50 px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
                    popular
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.blurb}</p>
              <p className="mt-5 font-mono text-5xl font-black tracking-tight">
                <span className="text-primary">${p.price}</span>
                <span className="text-base text-muted-foreground">/mo</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-sm">
                    <Check className="size-4 shrink-0 text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 border py-3 font-mono text-sm tracking-[0.15em] uppercase transition-all ${
                  p.featured
                    ? "border-primary bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                    : "border-primary/40 text-primary hover:bg-primary/10"
                }`}
              >
                Jack in
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
