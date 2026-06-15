const STEPS = [
  { n: "01", title: "Book an intro", body: "Pick a time that suits you. We'll send a short form so we know your goals before you arrive." },
  { n: "02", title: "Arrive early", body: "Come ten minutes before. We'll show you around, fit you to the reformer, and answer everything." },
  { n: "03", title: "Move with us", body: "A small, slow, guided class. Hands-on cues throughout — no keeping up, just moving well." },
  { n: "04", title: "Find your rhythm", body: "Chat with your teacher after, choose a membership that fits, and settle into a practice." },
]

/**
 * Studio process — a calm four-step rail with soft serif numerals.
 */
export function ServiceStudio() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.25em] uppercase text-primary">Your first visit</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            Four gentle steps in.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-border pt-6">
              <span className="font-serif text-3xl text-primary">{s.n}</span>
              <p className="mt-4 font-serif text-xl">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
