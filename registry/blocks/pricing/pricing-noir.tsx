import { Check } from "lucide-react"

const TIERS = [
  {
    name: "Atelier",
    price: "Complimentary",
    blurb: "For every piece that leaves the house.",
    points: ["Lifetime cleaning", "Engraving & resizing", "Annual condition report"],
    featured: false,
  },
  {
    name: "Cercle",
    price: "$1,200 / yr",
    blurb: "For the collector who returns.",
    points: ["Everything in Atelier", "Private viewings", "First sight of new work", "Restoration priority"],
    featured: true,
  },
  {
    name: "Patron",
    price: "By invitation",
    blurb: "For the few we know by name.",
    points: ["Everything in Cercle", "Dedicated maître", "Bespoke commissions", "House events"],
    featured: false,
  },
]

/**
 * Noir membership tiers — hairline cards with a gold-framed featured plan.
 */
export function PricingNoir() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">Membership</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-tight">
            The circle around the house
          </h2>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col p-8 ${t.featured ? "bg-card ring-1 ring-inset ring-primary" : "bg-card"}`}
            >
              <div className="flex items-center justify-between">
                <p className="font-serif text-2xl tracking-tight">{t.name}</p>
                {t.featured && (
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-primary">Most chosen</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
              <p className="mt-6 font-serif text-2xl tracking-tight text-primary">{t.price}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 py-3 text-sm tracking-[0.15em] uppercase transition-opacity ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary"
                }`}
              >
                {t.name === "Patron" ? "Enquire" : "Join"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
