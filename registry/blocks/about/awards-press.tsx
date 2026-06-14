import { Award, Quote } from "lucide-react"

const AWARDS = [
  { year: "2025", title: "Best of the Region", org: "Community Choice Awards" },
  { year: "2024", title: "Top-Rated Provider", org: "CareCompare" },
  { year: "2024", title: "Excellence in Service", org: "State Trade Council" },
  { year: "2023", title: "A+ Accredited", org: "Better Business Bureau" },
]

const PRESS = [
  { quote: "The team you actually want to call.", source: "The Tribune" },
  { quote: "Five-star care, every visit.", source: "Local Living" },
  { quote: "Reliable, honest, and fast.", source: "Home & Hearth" },
]

/**
 * Awards & press — accreditations and "as seen in" quotes that build
 * trust. Pair credentials on the left with press mentions on the right.
 */
export function AwardsPress() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-medium text-primary">Recognized for it</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Trusted by our community — and the people who cover it.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {AWARDS.map((a) => (
              <div key={a.title} className="rounded-2xl border bg-card p-5">
                <div className="flex items-center justify-between">
                  <Award className="size-6 text-accent-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">{a.year}</span>
                </div>
                <p className="mt-4 font-semibold leading-tight">{a.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{a.org}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border bg-secondary p-7">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">As seen in</p>
            {PRESS.map((p) => (
              <figure key={p.source} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
                <Quote className="size-4 text-primary" />
                <blockquote className="mt-1.5 font-serif text-xl leading-snug text-balance">{p.quote}</blockquote>
                <figcaption className="mt-1 text-sm text-muted-foreground">— {p.source}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
