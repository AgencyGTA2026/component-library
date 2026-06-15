const BARS = [
  { label: "Graduates working in design", value: 94, color: "bg-primary" },
  { label: "Courses that end in a print", value: 100, color: "bg-secondary" },
  { label: "Students per master", value: 8, display: "8:1", color: "bg-accent" },
  { label: "Years since 1919", value: 70, display: "106", color: "bg-primary" },
]

/**
 * Bauhaus stats — flat color bars in a thick-keyline frame.
 */
export function ChartBauhaus() {
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black uppercase tracking-tighter">The record</h2>

        <div className="mt-10 space-y-6">
          {BARS.map((b) => (
            <div key={b.label}>
              <div className="flex items-end justify-between">
                <span className="text-sm font-black uppercase">{b.label}</span>
                <span className="font-mono text-lg font-black">{b.display ?? `${b.value}%`}</span>
              </div>
              <div className="mt-2 h-8 border-2 border-foreground bg-card p-0.5">
                <div className={`h-full ${b.color}`} style={{ width: `${b.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
