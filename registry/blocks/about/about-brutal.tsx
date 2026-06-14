import { Asterisk, Hammer, Ruler, Zap } from "lucide-react"

const VALUES = [
  { icon: Ruler, title: "Measured twice", body: "We scope hard before we build. No surprises, no scope-creep invoices." },
  { icon: Hammer, title: "Built to last", body: "Heavy foundations. Your site won't wobble when traffic shows up." },
  { icon: Zap, title: "Ships fast", body: "Weeks, not quarters. We move while the idea is still hot." },
  { icon: Asterisk, title: "No fluff", body: "Plain talk, real deadlines, work that does the job. That's the whole pitch." },
]

/**
 * Brutal about — company values as bordered cells that invert on hover.
 */
export function AboutBrutal() {
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">What we stand on</p>
        <h2 className="mt-4 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-black leading-[0.9] tracking-tighter uppercase">
          Values you can <span className="bg-foreground px-2 text-accent">measure.</span>
        </h2>

        <div className="mt-12 grid border-2 border-foreground sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="group border-foreground p-6 transition-colors not-last:border-b-2 hover:bg-foreground hover:text-background sm:not-last:border-b-0 sm:[&:not(:nth-child(2n))]:border-r-2 lg:[&:not(:nth-child(4n))]:border-r-2"
            >
              <div className="flex size-12 items-center justify-center border-2 border-foreground bg-accent text-foreground shadow-[4px_4px_0_0_var(--foreground)] group-hover:bg-background">
                <Icon className="size-6" />
              </div>
              <p className="mt-5 text-xl font-black uppercase">{title}</p>
              <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">
                {body}
              </p>
              <span className="mt-4 block font-mono text-xs font-bold">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
