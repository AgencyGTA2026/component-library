const ROWS = [
  {
    kicker: "I",
    title: "Drawn before it is made",
    body: "Every commission begins as a pencil study, refined with you across as many sittings as it takes. Nothing is cast until the drawing is right.",
  },
  {
    kicker: "II",
    title: "Set under the loupe",
    body: "Stones are placed by a single master setter, by hand, by eye. The work is slow on purpose — that is where the light comes from.",
  },
  {
    kicker: "III",
    title: "Yours, and only yours",
    body: "Each piece is numbered, recorded in the house ledger, and accompanied by a signed certificate of origin. A quiet kind of permanence.",
  },
]

/**
 * Noir features — numbered serif rows divided by gold hairlines.
 */
export function FeatureNoir() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">The craft</p>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {ROWS.map((r) => (
            <div key={r.kicker} className="grid gap-6 py-10 sm:grid-cols-[auto_1fr] sm:gap-12">
              <span className="font-serif text-3xl text-primary">{r.kicker}</span>
              <div>
                <h3 className="font-serif text-2xl tracking-tight">{r.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
