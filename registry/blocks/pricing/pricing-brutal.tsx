import { Check } from "lucide-react"

const PLANS = [
  {
    name: "Page",
    price: "3.5k",
    blurb: "One landing page, done right.",
    points: ["Single page", "Copywriting", "2 revisions", "Launch in 2 weeks"],
    featured: false,
  },
  {
    name: "Site",
    price: "9k",
    blurb: "Full marketing site, soup to nuts.",
    points: ["Up to 8 pages", "CMS + blog", "Unlimited revisions", "SEO setup", "30-day support"],
    featured: true,
  },
  {
    name: "Build",
    price: "18k+",
    blurb: "Custom app or store.",
    points: ["Custom features", "Integrations", "Dedicated PM", "Quarterly care"],
    featured: false,
  },
]

/**
 * Brutal pricing — three bordered plan cards; the middle one is inverted.
 */
export function PricingBrutal() {
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-tighter uppercase">
          Pick a weight class.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col border-2 border-foreground p-6 ${
                p.featured
                  ? "bg-foreground text-background shadow-[8px_8px_0_0_var(--accent)]"
                  : "bg-background"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xl font-black uppercase">{p.name}</p>
                {p.featured && (
                  <span className="border-2 border-background bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-foreground">
                    Popular
                  </span>
                )}
              </div>
              <p className={`mt-2 font-mono text-xs ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                {p.blurb}
              </p>
              <p className="mt-6 text-[clamp(2.5rem,7vw,4rem)] font-black leading-none tracking-tighter">
                ${p.price}
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm font-bold uppercase">
                    <Check className="size-4 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 border-2 px-4 py-3 text-sm font-black uppercase transition-all ${
                  p.featured
                    ? "border-background bg-accent text-foreground hover:bg-background"
                    : "border-foreground bg-foreground text-background shadow-[5px_5px_0_0_var(--accent)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                }`}
              >
                Start here
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
