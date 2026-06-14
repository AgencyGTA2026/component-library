const RINGS = [
  { label: "Patient satisfaction", value: 96, caption: "1,200 surveys" },
  { label: "On-time arrivals", value: 88, caption: "last 90 days" },
  { label: "Capacity used", value: 72, caption: "this week" },
  { label: "Recovery on track", value: 94, caption: "post-op cases" },
]

/**
 * Progress rings — circular percentage stats for outcomes and capacity.
 * Pure SVG stroke-dasharray; the ring fills via a CSS transition. Great
 * for healthcare/service KPIs.
 */
export function ProgressRings() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <p className="font-medium text-primary">Outcomes that matter</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            The numbers we hold ourselves to.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {RINGS.map((r) => {
            const C = 2 * Math.PI * 42
            return (
              <div key={r.label} className="flex flex-col items-center rounded-2xl border bg-card p-6 text-center">
                <div className="relative size-32">
                  <svg viewBox="0 0 100 100" className="size-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--muted)" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={C}
                      strokeDashoffset={C - (r.value / 100) * C}
                      className="[transition:stroke-dashoffset_1s_ease]"
                    />
                  </svg>
                  <div className="absolute inset-0 grid place-content-center">
                    <span className="text-2xl font-semibold tabular-nums">{r.value}%</span>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold">{r.label}</p>
                <p className="text-xs text-muted-foreground">{r.caption}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
