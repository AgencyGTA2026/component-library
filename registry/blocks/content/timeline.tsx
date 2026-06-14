const MILESTONES = [
  {
    year: "2014",
    title: "Two people, one rented desk",
    body: "We started in the back of a coffee roastery with a laptop and a stubborn belief that most websites were boring.",
  },
  {
    year: "2017",
    title: "First award, first real office",
    body: "A rebrand for a local distillery won our first national nod — and paid for a space with actual windows.",
  },
  {
    year: "2021",
    title: "Went fully remote, doubled the team",
    body: "We traded the office for the right people wherever they live. Output went up; commutes went to zero.",
  },
  {
    year: "2024",
    title: "100th launch",
    body: "A decade in, we shipped our hundredth site — and started writing down how we work so it scales past us.",
  },
  {
    year: "Today",
    title: "Still picky, still small",
    body: "We take a handful of projects a quarter and pour everything into each one. That part isn't changing.",
  },
]

/**
 * Timeline — a vertical company history (or product roadmap) with a
 * spine, year nodes, and alternating emphasis. Editorial by default.
 */
export function Timeline() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Our story
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
            Ten years, told in five moments.
          </h2>
        </div>

        <ol className="relative border-l-2 border-border">
          {MILESTONES.map((m) => (
            <li key={m.year} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute top-1 -left-[9px] size-4 rounded-full border-2 border-background bg-primary" />
              <p className="font-mono text-sm font-semibold tracking-wide text-primary">{m.year}</p>
              <h3 className="mt-1 font-serif text-xl tracking-tight">{m.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
