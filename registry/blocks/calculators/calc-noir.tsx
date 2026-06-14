"use client"

import * as React from "react"

const METALS = [
  { label: "18k Yellow Gold", mult: 1 },
  { label: "Platinum", mult: 1.35 },
  { label: "Rose Gold", mult: 1.05 },
]

const SETTINGS = [
  { label: "Solitaire", base: 2200 },
  { label: "Pavé halo", base: 3800 },
  { label: "Three-stone", base: 4600 },
]

const PRICE_PER_CARAT = 7200

/**
 * Noir bespoke estimator — choose stone, setting, metal; a serif total updates.
 */
export function CalcNoir() {
  const [carat, setCarat] = React.useState(1.0)
  const [setting, setSetting] = React.useState(0)
  const [metal, setMetal] = React.useState(0)

  const total = Math.round(
    (SETTINGS[setting].base + carat * PRICE_PER_CARAT) * METALS[metal].mult,
  )

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-px border border-border bg-border lg:grid-cols-[1.3fr_1fr]">
        <div className="bg-card p-8 sm:p-10">
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">Bespoke estimate</p>
          <h2 className="mt-5 font-serif text-3xl tracking-tight">Design your ring</h2>

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Centre stone</p>
              <p className="font-serif text-lg text-primary">{carat.toFixed(2)} ct</p>
            </div>
            <input
              type="range"
              min={0.5}
              max={3}
              step={0.1}
              value={carat}
              onChange={(e) => setCarat(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--primary)]"
            />
          </div>

          <div className="mt-8">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Setting</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {SETTINGS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setSetting(i)}
                  className={`border px-3 py-2.5 text-sm transition-colors ${
                    setting === i ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Metal</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {METALS.map((m, i) => (
                <button
                  key={m.label}
                  onClick={() => setMetal(i)}
                  className={`border px-3 py-2.5 text-xs transition-colors ${
                    metal === i ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-card p-8 text-center sm:p-10">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">From</p>
          <p className="mt-3 font-serif text-[clamp(2.5rem,8vw,4rem)] leading-none tracking-tight text-primary">
            ${total.toLocaleString()}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            An indicative figure. Final price is confirmed once the stone is selected and the
            drawing is approved.
          </p>
        </div>
      </div>
    </section>
  )
}
