const STEPS = [
  { n: "01", title: "Call", body: "Tell us the job. We give a straight answer on fit, timeline, and ballpark — same day." },
  { n: "02", title: "Quote", body: "Fixed price, no padding. You see every line item before anything starts." },
  { n: "03", title: "Build", body: "We do the work on a dated schedule and show progress, not promises." },
  { n: "04", title: "Ship", body: "Launch day, plus 30 days of free fixes. The work is yours, fully owned." },
]

/**
 * Brutal process — a four-step numbered rail in bordered cells.
 */
export function ServiceBrutal() {
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">How it works</p>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-tighter uppercase">
          Four steps. No mystery.
        </h2>

        <div className="mt-12 grid border-2 border-foreground sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="group relative border-foreground p-6 transition-colors not-last:border-b-2 hover:bg-accent sm:[&:not(:nth-child(2n))]:border-r-2 lg:[&:not(:nth-child(4n))]:border-r-2 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
            >
              <span className="block text-5xl font-black leading-none tracking-tighter">{s.n}</span>
              <p className="mt-4 text-xl font-black uppercase">{s.title}</p>
              <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground group-hover:text-foreground">
                {s.body}
              </p>
              {i < STEPS.length - 1 && (
                <span className="absolute top-6 right-4 hidden font-black lg:block" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
