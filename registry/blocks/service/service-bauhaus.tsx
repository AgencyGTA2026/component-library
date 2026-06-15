const STEPS = [
  { n: "01", title: "Apply", body: "Send a portfolio and a paragraph. We read every one — no fee, no forms in triplicate.", color: "bg-primary text-primary-foreground" },
  { n: "02", title: "Interview", body: "A conversation, not an exam. We want to see how you think with your hands.", color: "bg-accent" },
  { n: "03", title: "Foundation", body: "Everyone starts on the same floor: colour, form, type, material. No shortcuts.", color: "bg-secondary text-secondary-foreground" },
  { n: "04", title: "Specialise", body: "Choose your workshop and go deep. Finish with a degree show on the wall.", color: "bg-card" },
]

/**
 * Bauhaus process — a four-step rail of flat-color cells over a keyline grid.
 */
export function ServiceBauhaus() {
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">How it works</p>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.92] tracking-tighter">
          Four steps onto the floor.
        </h2>

        <div className="mt-10 grid gap-0 border-2 border-foreground sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`border-foreground p-6 ${s.color} ${
                i < STEPS.length - 1 ? "border-b-2 lg:border-b-0" : ""
              } sm:[&:nth-child(odd)]:border-r-2 lg:[&:not(:last-child)]:border-r-2`}
            >
              <span className="text-5xl font-black tracking-tighter">{s.n}</span>
              <p className="mt-4 text-xl font-black uppercase">{s.title}</p>
              <p className="mt-2 font-medium leading-relaxed opacity-85">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
