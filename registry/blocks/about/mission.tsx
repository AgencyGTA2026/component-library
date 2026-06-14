const STATS = [
  { value: "11", label: "Years serving the area" },
  { value: "14k+", label: "Neighbors helped" },
  { value: "38", label: "People on our team" },
  { value: "4.9★", label: "Average rating" },
]

/**
 * Mission — a large statement of purpose with supporting stats. The
 * "why we exist" section for an about page. Set in display type.
 */
export function Mission() {
  return (
    <section className="bg-background px-5 py-24 text-foreground sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">Our mission</p>
        <p className="mt-8 font-serif text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.18] tracking-tight text-balance">
          We started this company on a simple belief: that good, honest work —
          done by people who care — still means something. Every day we try to
          earn back the trust the industry too often spends.{" "}
          <span className="text-primary">That&apos;s the whole job.</span>
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t pt-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl tracking-tight text-primary sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
