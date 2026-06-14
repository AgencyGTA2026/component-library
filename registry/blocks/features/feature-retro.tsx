import { Check } from "lucide-react"

const ROWS = [
  {
    kicker: "Taste",
    title: "Bold flavor, no aftertaste",
    body: "We dial in every batch on real fruit and a whisper of fizz. It tastes like the label looks — fun.",
    points: ["Pressed fruit base", "Lightly carbonated", "No artificial sweeteners"],
    color: "bg-accent",
  },
  {
    kicker: "Body",
    title: "Light enough to keep up",
    body: "40 calories, no jitters, no crash. The can you reach for at 3pm and again at the beach.",
    points: ["40 calories", "Naturally caffeinated", "Vegan & gluten-free"],
    color: "bg-secondary text-secondary-foreground",
  },
]

/**
 * Retro features — alternating rounded rows with a bright color panel.
 */
export function FeatureRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-6">
        {ROWS.map((r, i) => (
          <div
            key={r.title}
            className={`grid items-center gap-6 rounded-[2rem] border-2 border-foreground bg-card p-4 shadow-[5px_5px_0_0_var(--foreground)] md:grid-cols-2 md:p-5 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="p-4 sm:p-6">
              <span className="inline-block rounded-full border-2 border-foreground bg-primary px-3 py-1 text-xs font-black text-primary-foreground">
                {r.kicker}
              </span>
              <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight">{r.title}</h3>
              <p className="mt-3 font-medium text-muted-foreground">{r.body}</p>
              <ul className="mt-5 space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 font-bold">
                    <span className="grid size-6 place-items-center rounded-full border-2 border-foreground bg-accent">
                      <Check className="size-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`grid min-h-[220px] place-items-center rounded-[1.5rem] border-2 border-foreground ${r.color}`}>
              <span className="text-6xl font-black opacity-80">{String(i + 1).padStart(2, "0")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
