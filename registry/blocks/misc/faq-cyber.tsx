"use client"

import * as React from "react"
import { Plus } from "lucide-react"

const FAQS = [
  { q: "Do I need my own deck to start?", a: "No. The free tier runs entirely in the cloud rig — spin up a virtual deck and you're on the grid in under a minute." },
  { q: "Is my traffic actually private?", a: "Yes. Every run is zero-knowledge and encrypted end to end. We can't read your traces, and there are no backdoors for anyone else either." },
  { q: "What happens when ICE adapts?", a: "So does the breaker. ICE-breaker v3 re-routes live when a wall shifts, with a silent fallback if a route burns." },
  { q: "Can I run a crew on one account?", a: "Runner and Corp tiers include private mesh networking — invite your crew, share daemons, and monitor runs together." },
  { q: "How does billing work?", a: "Pay-as-you-run in eddies, billed monthly. Scale up, scale down, or kill the rig anytime. No contracts on the grid." },
]

/**
 * Cyber FAQ — glowing slate accordion with a neon toggle.
 */
export function FaqCyber() {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div className="h-fit lg:sticky lg:top-16">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// faq.log</p>
          <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight">Queries, resolved.</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`border bg-card transition-all ${isOpen ? "border-primary/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]" : "border-border"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-lg font-black">{f.q}</span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center border transition-all ${
                      isOpen ? "rotate-45 border-primary text-primary shadow-[0_0_12px_rgba(34,211,238,0.5)]" : "border-border text-muted-foreground"
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                {isOpen && <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
