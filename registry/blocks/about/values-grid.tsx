import { HandHeart, Leaf, ShieldCheck, Sparkles, Users, Wrench } from "lucide-react"

const VALUES = [
  { icon: HandHeart, title: "People first", body: "Every decision starts with the person in front of us — not the schedule, not the paperwork." },
  { icon: ShieldCheck, title: "Do it right", body: "We'd rather take the extra hour than cut a corner you'll pay for later." },
  { icon: Sparkles, title: "Plain honesty", body: "Clear pricing, clear options, and the truth even when it's not what you hoped." },
  { icon: Wrench, title: "Craft", body: "We sweat the details others skip, because the details are the work." },
  { icon: Users, title: "Show up", body: "On time, prepared, and reachable. Reliability is a feature." },
  { icon: Leaf, title: "Leave it better", body: "Clean sites, responsible materials, and a lighter footprint where we can." },
]

/**
 * Values grid — the principles behind a service business, as icon cards.
 * Reads warm and human; swap copy to your team's actual values.
 */
export function ValuesGrid() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">What we stand for</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Values you can feel in the work.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <article key={v.title} className="bg-background p-7">
              <span className="grid size-11 place-items-center rounded-lg bg-secondary text-primary">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
