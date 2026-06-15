const STEPS = [
  { n: "01", title: "Jack in", body: "Create a handle and link your deck. The grid recognises you in seconds.", glow: "primary" },
  { n: "02", title: "Compile", body: "Describe the run. Nexen routes daemons and allocates cycles automatically.", glow: "accent" },
  { n: "03", title: "Deploy", body: "Push to the mesh and watch the trace monitor light up in real time.", glow: "primary" },
  { n: "04", title: "Extract", body: "Pull your payload clean, roll back any bad trace, and vanish off the grid.", glow: "accent" },
]

/**
 * Cyber process — a four-step rail of glowing neon-numbered cells.
 */
export function ServiceCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// run_sequence</p>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] tracking-tight">
          Four steps to own the grid.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className={`border bg-card p-6 ${s.glow === "accent" ? "border-accent/40" : "border-primary/40"}`}
            >
              <span
                className={`font-mono text-5xl font-black ${
                  s.glow === "accent"
                    ? "text-accent [text-shadow:0_0_20px_rgba(255,0,229,0.5)]"
                    : "text-primary [text-shadow:0_0_20px_rgba(34,211,238,0.5)]"
                }`}
              >
                {s.n}
              </span>
              <p className="mt-4 text-xl font-black">{s.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
