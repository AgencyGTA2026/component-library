import { CalendarCheck, ClipboardList, Hammer, ThumbsUp } from "lucide-react"

const STEPS = [
  {
    icon: ClipboardList,
    title: "Free inspection",
    body: "We come out, climb up, and give you an honest assessment — no pressure, no fine print.",
  },
  {
    icon: CalendarCheck,
    title: "Clear quote",
    body: "A written, itemized estimate with a fixed price and a firm start date. What we say is what you pay.",
  },
  {
    icon: Hammer,
    title: "We get to work",
    body: "Licensed crews, clean job sites, daily updates. Most jobs wrap in one to three days.",
  },
  {
    icon: ThumbsUp,
    title: "Final walkthrough",
    body: "We walk the property with you, clean up every nail, and back it with our workmanship warranty.",
  },
]

/**
 * Process steps — a four-step "how it works" rail with connecting line
 * and numbered nodes. Reassures service customers who fear surprises.
 */
export function ProcessSteps() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Four steps from leak to peace of mind.
          </h2>
        </div>

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-7 right-0 left-0 hidden h-0.5 bg-border lg:block" />
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-4 lg:block">
                <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                  <step.icon className="size-6" />
                  <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold lg:mt-5">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
