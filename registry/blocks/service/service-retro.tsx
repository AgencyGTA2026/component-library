const STEPS = [
  { n: "1", title: "Pick flavors", body: "Mix and match a case from six loud flavors — or grab the sampler.", color: "bg-accent" },
  { n: "2", title: "Set a pace", body: "One-time or subscribe. Every 2 to 8 weeks, you choose.", color: "bg-secondary text-secondary-foreground" },
  { n: "3", title: "We ship cold", body: "Cold-packed and on your doorstep in 2 to 4 days.", color: "bg-primary text-primary-foreground" },
  { n: "4", title: "Pop & repeat", body: "Skip, swap, or pause anytime. No lock-in, ever.", color: "bg-card" },
]

/**
 * Retro process — a four-step rail of bright rounded cards.
 */
export function ServiceRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-black tracking-[0.2em] uppercase text-primary">How it works</p>
        <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">
          From thirsty to fizzy in four steps
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className={`rounded-[1.5rem] border-2 border-foreground p-6 shadow-[5px_5px_0_0_var(--foreground)] ${s.color}`}
            >
              <span className="grid size-12 place-items-center rounded-full border-2 border-foreground bg-card text-2xl font-black text-foreground">
                {s.n}
              </span>
              <p className="mt-4 text-xl font-black">{s.title}</p>
              <p className="mt-1.5 text-sm font-medium opacity-80">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
