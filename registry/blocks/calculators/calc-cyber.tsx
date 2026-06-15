"use client"

import * as React from "react"

const PRICE_PER_CORE = 18
const PRICE_PER_GB = 4

/**
 * Cyber compute estimator — scale cores and memory; a neon total updates.
 */
export function CalcCyber() {
  const [cores, setCores] = React.useState(8)
  const [memory, setMemory] = React.useState(32)
  const [firewall, setFirewall] = React.useState(true)

  const total = cores * PRICE_PER_CORE + memory * PRICE_PER_GB + (firewall ? 49 : 0)

  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="border border-primary/40 bg-card p-7 sm:p-9">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// provision_rig</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Spec your deck</h2>

          <div className="mt-7">
            <div className="flex items-end justify-between">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Cores</span>
              <span className="font-mono text-lg font-black text-primary">{cores}</span>
            </div>
            <input type="range" min={2} max={64} step={2} value={cores} onChange={(e) => setCores(Number(e.target.value))} className="mt-3 w-full accent-[var(--primary)]" />
          </div>

          <div className="mt-7">
            <div className="flex items-end justify-between">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Memory (GB)</span>
              <span className="font-mono text-lg font-black text-primary">{memory}</span>
            </div>
            <input type="range" min={8} max={256} step={8} value={memory} onChange={(e) => setMemory(Number(e.target.value))} className="mt-3 w-full accent-[var(--primary)]" />
          </div>

          <button
            onClick={() => setFirewall((f) => !f)}
            className={`mt-7 flex w-full items-center justify-between border px-4 py-3 font-mono text-sm tracking-[0.1em] uppercase transition-all ${
              firewall ? "border-accent bg-accent/10 text-accent shadow-[0_0_14px_rgba(255,0,229,0.35)]" : "border-border text-muted-foreground"
            }`}
          >
            ICE-breaker firewall
            <span>{firewall ? "ON · +$49" : "OFF"}</span>
          </button>
        </div>

        <div className="flex flex-col justify-center border border-primary/50 bg-card p-7 text-center shadow-[0_0_32px_rgba(34,211,238,0.18)] sm:p-9">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Per month</p>
          <p className="mt-2 font-mono text-[clamp(2.5rem,9vw,4rem)] font-black leading-none text-primary [text-shadow:0_0_24px_rgba(34,211,238,0.5)]">
            ${total}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Billed in eddies. Scale up or kill the rig anytime — no contracts on the grid.</p>
        </div>
      </div>
    </section>
  )
}
