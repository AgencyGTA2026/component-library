const QUOTES = [
  {
    quote: "I arrived able to draw and left able to think. The workshop floor changed how I see everything.",
    name: "Anni T.",
    role: "Textile, class of '21",
    big: true,
  },
  { quote: "Three colours and a grid. I have never felt so free.", name: "Josef A.", role: "Print" },
  { quote: "They mark what you make, not what you say. It keeps you honest.", name: "Marcel B.", role: "Furniture" },
  { quote: "The best brief I ever got was: remove something.", name: "Lyonel F.", role: "Type" },
]

/**
 * Bauhaus testimonials — one flat-color pull-quote over a keyline review grid.
 */
export function TestimonialsBauhaus() {
  const [lead, ...rest] = QUOTES
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="border-2 border-foreground bg-secondary p-7 text-secondary-foreground sm:p-10">
          <p className="text-[clamp(1.5rem,4vw,3rem)] font-black leading-[1.02] tracking-tight uppercase">
            &ldquo;{lead.quote}&rdquo;
          </p>
          <p className="mt-6 font-mono text-sm font-bold uppercase">
            {lead.name} — {lead.role}
          </p>
        </div>

        <div className="mt-0 grid gap-0 border-x-2 border-b-2 border-foreground md:grid-cols-3">
          {rest.map((q) => (
            <figure
              key={q.name}
              className="border-foreground p-6 [&:not(:last-child)]:border-b-2 md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r-2"
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
