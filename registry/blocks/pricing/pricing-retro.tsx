import { Check } from "lucide-react"

const PLANS = [
  {
    name: "Taster",
    price: "24",
    blurb: "One case, no strings.",
    points: ["12 cans, one flavor", "Ships in 2–4 days", "Cancel anytime"],
    color: "bg-card",
    featured: false,
  },
  {
    name: "Regular",
    price: "20",
    blurb: "Subscribe & save 15%.",
    points: ["12 cans every month", "Mix any flavors", "Free shipping", "Skip or pause"],
    color: "bg-primary text-primary-foreground",
    featured: true,
  },
  {
    name: "Party",
    price: "40",
    blurb: "Stock up and chill.",
    points: ["24 cans every month", "Mix any flavors", "Free shipping", "Surprise extras"],
    color: "bg-card",
    featured: false,
  },
]

/**
 * Retro pricing — three rounded plan cards; the middle one pops in coral.
 */
export function PricingRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">
          Pick your pace
        </h2>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-[1.75rem] border-2 border-foreground p-6 shadow-[6px_6px_0_0_var(--foreground)] ${p.color} ${
                p.featured ? "md:-translate-y-3" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xl font-black">{p.name}</p>
                {p.featured && (
                  <span className="rounded-full border-2 border-foreground bg-accent px-3 py-0.5 text-xs font-black text-foreground">
                    Best value
                  </span>
                )}
              </div>
              <p className={`mt-1.5 font-medium ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.blurb}
              </p>
              <p className="mt-5 text-5xl font-black tracking-tighter">
                ${p.price}
                <span className="text-base font-bold opacity-70">/case</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 font-bold">
                    <span className="grid size-5 place-items-center rounded-full border-2 border-current">
                      <Check className="size-3" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 rounded-full border-2 border-foreground py-3 font-black shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 ${
                  p.featured ? "bg-accent text-foreground" : "bg-primary text-primary-foreground"
                }`}
              >
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
