import { Check } from "lucide-react"

const PLANS = [
  {
    name: "Intro",
    price: "39",
    unit: "/ 2 weeks",
    blurb: "New here? Start gently.",
    points: ["3 classes", "Any time, any class", "Mat loan included"],
    featured: false,
  },
  {
    name: "Unlimited",
    price: "180",
    unit: "/ month",
    blurb: "For a steady practice.",
    points: ["Unlimited classes", "Priority booking", "10% off the shop", "Guest pass monthly"],
    featured: true,
  },
  {
    name: "Eight pack",
    price: "200",
    unit: "/ 8 classes",
    blurb: "Move at your own rhythm.",
    points: ["8 classes, 3-month validity", "Shareable with a friend", "No commitment"],
    featured: false,
  },
]

/**
 * Studio memberships — soft rounded plan cards; the featured one in blush.
 */
export function PricingStudio() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-primary">Memberships</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            Find your rhythm
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-[1.5rem] p-7 ${
                p.featured ? "bg-primary text-primary-foreground" : "border border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-serif text-xl">{p.name}</p>
                {p.featured && (
                  <span className="rounded-full bg-primary-foreground/15 px-3 py-0.5 text-[11px] tracking-[0.15em] uppercase">
                    Popular
                  </span>
                )}
              </div>
              <p className={`mt-1.5 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.blurb}
              </p>
              <p className="mt-6 font-serif text-4xl tracking-tight">
                ${p.price}
                <span className={`text-base ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {" "}{p.unit}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-primary-foreground" : "text-primary"}`} />
                    {pt}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-7 rounded-full py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                  p.featured ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
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
