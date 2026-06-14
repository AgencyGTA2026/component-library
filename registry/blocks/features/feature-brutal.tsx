import { Check } from "lucide-react"

const ROWS = [
  {
    kicker: "01 / Strategy",
    title: "We map it before we build it",
    body: "Every project starts with a hard scope: pages, priorities, deadlines. You sign off before a single pixel moves.",
    points: ["Sitemap & priorities", "Fixed deadline", "One point of contact"],
    swatch: "#d9f526",
  },
  {
    kicker: "02 / Build",
    title: "Heavy code, fast pages",
    body: "Hand-built, no bloated page-builders. Sites that score 95+ on speed and don't fall over under load.",
    points: ["95+ Lighthouse", "Zero template lock-in", "Owned by you"],
    swatch: "#0c0c0c",
  },
]

/**
 * Brutal features — alternating bordered rows with a checklist and color block.
 */
export function FeatureBrutal() {
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-8">
        {ROWS.map((r, i) => (
          <div
            key={r.title}
            className={`grid items-stretch gap-0 border-2 border-foreground md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="border-foreground p-7 not-last:border-b-2 md:not-last:border-b-0 md:[&:first-child]:border-r-2 md:[&:last-child]:border-l-2 sm:p-9">
              <p className="font-mono text-xs font-bold uppercase text-muted-foreground">{r.kicker}</p>
              <h3 className="mt-3 text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-[0.95] tracking-tight uppercase">
                {r.title}
              </h3>
              <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              <ul className="mt-6 space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-bold uppercase">
                    <span className="grid size-6 place-items-center border-2 border-foreground bg-accent">
                      <Check className="size-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="min-h-[220px]"
              style={{ backgroundColor: r.swatch }}
              aria-hidden
            />
          </div>
        ))}
      </div>
    </section>
  )
}
