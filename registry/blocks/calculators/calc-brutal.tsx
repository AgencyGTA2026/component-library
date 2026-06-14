"use client"

import * as React from "react"

const TIERS = [
  { label: "Landing page", base: 3500 },
  { label: "Marketing site", base: 9000 },
  { label: "Web app", base: 18000 },
] as const

const ADDONS = [
  { label: "Copywriting", cost: 2000 },
  { label: "Custom CMS", cost: 3500 },
  { label: "Motion / animation", cost: 2500 },
  { label: "SEO setup", cost: 1500 },
] as const

/**
 * Brutal estimator — pick a base + add-ons, watch the hard-shadow total tick.
 */
export function CalcBrutal() {
  const [tier, setTier] = React.useState(0)
  const [picked, setPicked] = React.useState<number[]>([])

  const total =
    TIERS[tier].base + picked.reduce((sum, i) => sum + ADDONS[i].cost, 0)

  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-tighter uppercase">
            Ballpark it.
          </h2>
          <p className="mt-3 font-mono text-sm text-muted-foreground">No email gate. No sales call. Just numbers.</p>

          <p className="mt-8 font-mono text-xs font-bold uppercase">Project type</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {TIERS.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setTier(i)}
                className={`border-2 border-foreground px-4 py-3 text-left text-sm font-black uppercase transition-all ${
                  tier === i
                    ? "bg-foreground text-background shadow-[5px_5px_0_0_var(--accent)]"
                    : "bg-background hover:bg-accent"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs font-bold uppercase">Add-ons</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {ADDONS.map((a, i) => {
              const on = picked.includes(i)
              return (
                <button
                  key={a.label}
                  onClick={() =>
                    setPicked((p) => (on ? p.filter((x) => x !== i) : [...p, i]))
                  }
                  className={`flex items-center justify-between border-2 border-foreground px-4 py-3 text-sm font-bold uppercase transition-all ${
                    on ? "bg-accent" : "bg-background hover:translate-x-[2px] hover:translate-y-[2px]"
                  }`}
                >
                  {a.label}
                  <span className="font-mono">+${a.cost.toLocaleString()}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="h-fit border-2 border-foreground bg-accent p-6 text-foreground shadow-[8px_8px_0_0_var(--foreground)] lg:sticky lg:top-8">
          <p className="font-mono text-xs font-bold uppercase">Estimated total</p>
          <p className="mt-2 text-[clamp(2.5rem,8vw,4rem)] font-black leading-none tracking-tighter">
            ${total.toLocaleString()}
          </p>
          <p className="mt-4 font-mono text-xs leading-relaxed">
            Fixed-price quote. If we estimate wrong, that&apos;s our problem — not your invoice.
          </p>
        </div>
      </div>
    </section>
  )
}
