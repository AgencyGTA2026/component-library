import { ArrowUpRight, Check } from "lucide-react"
import Link from "next/link"

const ROWS = [
  {
    eyebrow: "Discovery",
    title: "We start with the hard questions.",
    body: "Before a single pixel, we dig into your market, your margins, and the one thing you want to be known for. Strategy first, decoration second.",
    points: ["Positioning workshop", "Competitive teardown", "Messaging hierarchy"],
    tone: "from-primary/15 to-primary/5",
  },
  {
    eyebrow: "Design",
    title: "Then we make it unmistakably yours.",
    body: "Type, color, and layout chosen on purpose — a system you can grow into, not a template a thousand others already use.",
    points: ["Custom type system", "Component library", "Motion guidelines"],
    tone: "from-accent/25 to-accent/5",
  },
  {
    eyebrow: "Build",
    title: "And we ship it fast, and fast-loading.",
    body: "Hand-built, accessible, and quick. Performance budgets are set on day one and held to on launch day.",
    points: ["Sub-second loads", "AA accessibility", "Edit-it-yourself CMS"],
    tone: "from-secondary to-background",
  },
]

/**
 * Feature split — alternating media / copy rows with checklists. The
 * workhorse "how we work" section. Swap the gradient panels for images.
 */
export function FeatureSplit() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-20 sm:space-y-28">
        {ROWS.map((row, i) => (
          <div
            key={row.title}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {String(i + 1).padStart(2, "0")} — {row.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
                {row.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                {row.body}
              </p>
              <ul className="mt-6 space-y-2.5">
                {row.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm">
                    <Check className="size-4 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="#work"
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium"
              >
                See it in practice
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border bg-gradient-to-br ${row.tone} ${
                i % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Fig. {i + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
