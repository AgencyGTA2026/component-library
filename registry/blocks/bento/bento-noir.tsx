import { Gem, Award, Sparkles, ShieldCheck } from "lucide-react"

/**
 * Noir bento — an asymmetric grid of hairline cells over near-black.
 */
export function BentoNoir() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">The house</p>
        <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-tight">
          A century of patience, in every facet.
        </h2>

        <div className="mt-12 grid auto-rows-[minmax(150px,auto)] gap-px border border-border bg-border sm:grid-cols-3">
          <div className="flex flex-col justify-between bg-card p-8 sm:col-span-2 sm:row-span-2">
            <Gem className="size-8 text-primary" />
            <div>
              <p className="font-serif text-2xl tracking-tight">Conflict-free stones</p>
              <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                Every diamond is traced to its origin and graded in our own atelier. Provenance you
                can hold.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-card p-8">
            <Award className="size-6 text-primary" />
            <p className="font-serif text-lg">Master-set by hand</p>
          </div>

          <div className="flex flex-col justify-between bg-card p-8">
            <ShieldCheck className="size-6 text-primary" />
            <p className="font-serif text-lg">Lifetime guarantee</p>
          </div>

          <div className="flex items-center gap-5 bg-card p-8 sm:col-span-3">
            <Sparkles className="size-7 shrink-0 text-primary" />
            <div>
              <p className="font-serif text-lg">Complimentary engraving &amp; resizing</p>
              <p className="leading-relaxed text-muted-foreground">For the life of the piece, on the house.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
