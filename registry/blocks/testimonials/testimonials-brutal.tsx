const QUOTES = [
  {
    quote: "They shipped in three weeks what our last agency couldn't in three quarters.",
    name: "Dana Reyes",
    role: "Founder, Stak",
    big: true,
  },
  {
    quote: "Fixed price, fixed deadline, and they hit both. Unheard of.",
    name: "Marcus Field",
    role: "CMO, Gridlock",
  },
  {
    quote: "The site is fast, loud, and unmistakably ours. Exactly the brief.",
    name: "Priya Nair",
    role: "Head of Brand, Monolith",
  },
  {
    quote: "No decks, no discovery theatre. Just good work, fast.",
    name: "Theo Brandt",
    role: "Owner, Hardset",
  },
]

/**
 * Brutal testimonials — one screaming pull-quote over a bordered review grid.
 */
export function TestimonialsBrutal() {
  const [lead, ...rest] = QUOTES
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="border-2 border-foreground bg-accent p-7 shadow-[8px_8px_0_0_var(--foreground)] sm:p-10">
          <p className="text-[clamp(1.5rem,4vw,3rem)] font-black leading-[1] tracking-tight uppercase">
            &ldquo;{lead.quote}&rdquo;
          </p>
          <p className="mt-6 font-mono text-sm font-bold uppercase">
            {lead.name} — {lead.role}
          </p>
        </div>

        <div className="mt-6 grid border-2 border-foreground md:grid-cols-3">
          {rest.map((q) => (
            <figure
              key={q.name}
              className="border-foreground p-6 not-last:border-b-2 md:not-last:border-b-0 md:[&:not(:last-child)]:border-r-2"
            >
              <blockquote className="text-base font-bold leading-snug">&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 font-mono text-xs font-bold uppercase text-muted-foreground">
                {q.name} · {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
