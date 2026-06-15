import { Flower2, HeartPulse, Users, Wind } from "lucide-react"

/**
 * Studio bento — calm rounded cards in greige with a single blush accent cell.
 */
export function BentoStudio() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Why Méthode</p>
        <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
          A studio that moves at your pace.
        </h2>

        <div className="mt-12 grid auto-rows-[minmax(150px,auto)] gap-4 sm:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-7 text-primary-foreground sm:col-span-2 sm:row-span-2">
            <Flower2 className="size-8" />
            <div>
              <p className="font-serif text-2xl">Six to a class, never more</p>
              <p className="mt-2 max-w-sm leading-relaxed text-primary-foreground/85">
                Every session is small enough for hands-on cues and real corrections. You are seen,
                not herded.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7">
            <HeartPulse className="size-6 text-primary" />
            <p className="font-serif text-lg">Low-impact, all levels</p>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7">
            <Wind className="size-6 text-primary" />
            <p className="font-serif text-lg">Breath-led tempo</p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-secondary p-7 text-secondary-foreground sm:col-span-3">
            <Users className="size-7 shrink-0" />
            <div>
              <p className="font-serif text-lg">Teachers who remember your name</p>
              <p className="leading-relaxed text-muted-foreground">And your last session, and what your back was doing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
