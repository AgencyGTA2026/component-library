import { Clock, Home, Star, Users } from "lucide-react"

const STATS = [
  { icon: Home, value: "3,400+", label: "Roofs replaced", sub: "since 1999" },
  { icon: Star, value: "4.9 / 5", label: "Average rating", sub: "612 reviews" },
  { icon: Clock, value: "24 hrs", label: "Emergency response", sub: "most callouts" },
  { icon: Users, value: "38", label: "Full-time crew", sub: "no subcontractors" },
]

/**
 * Stat cards — a four-up metric grid with icons and sub-labels. Heavier
 * and more "proof-forward" than the inline stats band.
 */
export function StatCards() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border bg-card p-6">
            <span className="grid size-11 place-items-center rounded-lg bg-secondary text-primary">
              <s.icon className="size-5" />
            </span>
            <p className="mt-5 text-4xl font-bold tracking-tight">{s.value}</p>
            <p className="mt-1 font-medium">{s.label}</p>
            <p className="text-sm text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
