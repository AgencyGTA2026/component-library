import { Check } from "lucide-react"

const PLANS = [
  {
    name: "Evening",
    price: "1,200",
    blurb: "One module, after hours.",
    points: ["8 weekly workshops", "Studio access", "Final print"],
    color: "bg-card",
    featured: false,
  },
  {
    name: "Diploma",
    price: "4,800",
    blurb: "The full foundation year.",
    points: ["All four modules", "Dedicated bench", "Materials kit", "Degree show", "Mentor"],
    color: "bg-primary text-primary-foreground",
    featured: true,
  },
  {
    name: "Masters",
    price: "7,400",
    blurb: "Two years, your own brief.",
    points: ["Everything in Diploma", "Private studio", "Visiting critics", "Published monograph"],
    color: "bg-card",
    featured: false,
  },
]

/**
 * Bauhaus pricing — flat-color plan cards in a thick-keyline frame.
 */
export function PricingBauhaus() {
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[clamp(2rem,5vw,3.5rem)] font-black uppercase tracking-tighter">
          Pick a programme
        </h2>

        <div className="mt-12 grid gap-0 border-2 border-foreground md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col border-foreground p-6 md:[&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-b-2 md:[&:not(:last-child)]:border-b-0 ${p.color}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xl font-black uppercase">{p.name}</p>
                {p.featured && (
                  <span className="border-2 border-primary-foreground bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-foreground">
                    Popular
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm font-medium ${p.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                {p.blurb}
              </p>
              <p className="mt-6 text-5xl font-black tracking-tighter">${p.price}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm font-bold uppercase">
                    <Check className="size-4 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 border-2 py-3 text-sm font-black uppercase transition-colors ${
                  p.featured
                    ? "border-primary-foreground bg-accent text-foreground hover:bg-background"
                    : "border-foreground bg-secondary text-secondary-foreground hover:bg-foreground"
                }`}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
