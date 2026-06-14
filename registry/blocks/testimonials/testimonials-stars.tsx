import { Star } from "lucide-react"

const REVIEWS = [
  {
    quote:
      "They re-sodded the whole backyard in a day and it looks like a golf course. Crew was polite and cleaned up everything.",
    name: "Brenda M.",
    meta: "Maple Heights · Lawn renovation",
    source: "Google",
    initial: "B",
    hue: "bg-chart-1",
  },
  {
    quote:
      "Quoted fair, showed up on time, and the new beds have held up beautifully through two seasons. Hiring them again.",
    name: "Daniel O.",
    meta: "Riverside · Garden design",
    source: "Google",
    initial: "D",
    hue: "bg-chart-2",
  },
  {
    quote:
      "After a storm took down two limbs, they were out the next morning. Careful around the fence and the dog. Five stars.",
    name: "Priya S.",
    meta: "Oakdale · Tree removal",
    source: "Yelp",
    initial: "P",
    hue: "bg-chart-3",
  },
  {
    quote:
      "Honest pricing and no upsell. They told me what I actually needed, not what cost the most. Rare these days.",
    name: "Marcus T.",
    meta: "North Hills · Irrigation",
    source: "Google",
    initial: "M",
    hue: "bg-chart-4",
  },
]

/**
 * Star reviews — a grid of rating cards with source tags and an
 * aggregate header. Reads like a Google/Yelp profile; ideal for trades.
 */
export function TestimonialsStars() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Neighbors don&apos;t lie.
            </h2>
            <p className="mt-2 text-muted-foreground">
              The reviews your potential customers are already reading.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-xl border bg-card px-5 py-3">
            <p className="text-3xl font-bold">4.9</p>
            <div>
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">612 verified reviews</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-xl border bg-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  via {r.source}
                </span>
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-pretty">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t pt-4">
                <span
                  className={`grid size-9 place-items-center rounded-full text-sm font-bold text-white ${r.hue}`}
                >
                  {r.initial}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.meta}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
