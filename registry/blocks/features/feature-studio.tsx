const ROWS = [
  {
    kicker: "Strength",
    title: "Build it slowly, keep it longer",
    body: "Spring resistance meets controlled tempo. You leave stronger without the strain — the kind of strength that lasts past the soreness.",
    points: ["Progressive loading", "Joint-friendly", "Posture-first"],
  },
  {
    kicker: "Calm",
    title: "A reset for your nervous system",
    body: "Soft light, quiet rooms, breath-led movement. Most members tell us the calm is the part they can't go without.",
    points: ["Breath cues throughout", "No mirrors, no rush", "Phone-free floor"],
  },
]

/**
 * Studio features — alternating airy rows with a soft media panel and checklist.
 */
export function FeatureStudio() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-20">
        {ROWS.map((r, i) => (
          <div
            key={r.title}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-primary">{r.kicker}</p>
              <h3 className="mt-3 font-serif text-3xl leading-tight tracking-tight">{r.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{r.body}</p>
              <ul className="mt-6 space-y-3">
                {r.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-secondary">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,142,134,0.3),transparent_60%)]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
