import { Feather, Gem, Globe, Clock } from "lucide-react"

const VALUES = [
  { icon: Feather, title: "Drawn by hand", body: "No two commissions begin the same way. Every piece starts as a study on paper." },
  { icon: Gem, title: "Stones with a story", body: "Traced, graded, and chosen in our own atelier — never sourced blind." },
  { icon: Clock, title: "Slow by intent", body: "We measure work in weeks. Light, it turns out, cannot be rushed." },
  { icon: Globe, title: "A house, not a chain", body: "One atelier, one ledger, one family name behind every signature." },
]

/**
 * Noir about — values as serif cards over a hairline grid.
 */
export function AboutNoir() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">Our word</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-tight">
            Four things we will never compromise.
          </h2>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card p-8">
              <Icon className="size-6 text-primary" />
              <p className="mt-6 font-serif text-xl tracking-tight">{title}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
