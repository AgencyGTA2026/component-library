const REVIEWS = [
  { quote: "Compiled a daemon mid-run and walked straight through the ICE. Nothing else comes close.", handle: "@v_nightcity", role: "Netrunner", glow: "primary" },
  { quote: "The trace monitor saved my deck twice this week. I don't run without it now.", handle: "@rogue_amend", role: "Solo", glow: "accent" },
  { quote: "Latency dropped to nothing. It feels like the grid reads my mind.", handle: "@t_bug", role: "Techie", glow: "primary" },
  { quote: "Set up a private mesh in four minutes. My whole crew is on it.", handle: "@panam_p", role: "Fixer", glow: "accent" },
]

/**
 * Cyber testimonials — glowing slate review cards with mono handles.
 */
export function TestimonialsCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// runner_logs</p>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">Word from the grid</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure
              key={r.handle}
              className={`flex flex-col justify-between border bg-card p-6 ${r.glow === "accent" ? "border-accent/40" : "border-primary/40"}`}
            >
              <blockquote className="text-base leading-snug">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-5">
                <span className={`block font-mono text-sm font-bold ${r.glow === "accent" ? "text-accent" : "text-primary"}`}>
                  {r.handle}
                </span>
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
