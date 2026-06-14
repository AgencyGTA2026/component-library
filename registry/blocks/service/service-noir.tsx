const STEPS = [
  { n: "I", title: "The conversation", body: "We begin with you — the occasion, the hand, the story you wish to tell. No catalogue, no pressure." },
  { n: "II", title: "The drawing", body: "Our designer renders the piece by hand and refines it with you until the line is exactly right." },
  { n: "III", title: "The making", body: "Stone is chosen, gold is poured, and a single master setter brings the drawing to life over weeks." },
  { n: "IV", title: "The unveiling", body: "Your finished piece is presented in the atelier, numbered, and entered into the house ledger." },
]

/**
 * Noir process — a four-step serif rail divided by gold hairlines.
 */
export function ServiceNoir() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">The commission</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-tight">
            Four quiet steps, taken slowly.
          </h2>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-card p-8">
              <span className="font-serif text-4xl text-primary">{s.n}</span>
              <p className="mt-6 font-serif text-xl tracking-tight">{s.title}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
