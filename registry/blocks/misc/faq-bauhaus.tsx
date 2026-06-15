"use client"

import * as React from "react"
import { Plus } from "lucide-react"

const FAQS = [
  { q: "Do I need a portfolio to apply?", a: "Some work, yes — but it needn't be design. Sketchbooks, photographs, a thing you built. We're looking for how you see, not a finished CV." },
  { q: "Is everything taught in workshops?", a: "Almost. Theory exists, but it's always tied to making. You'll spend more time at a bench than in a lecture hall." },
  { q: "Can I study part-time?", a: "Evening modules run year-round and stack toward the full diploma. Many students start there before committing to the foundation year." },
  { q: "Are there scholarships?", a: "Yes — needs-based awards cover up to half of tuition. Apply alongside your portfolio; decisions come with your offer." },
  { q: "What do graduates do?", a: "Design studios, type foundries, furniture workshops, their own practices. The common thread is people who make useful things well." },
]

/**
 * Bauhaus FAQ — a thick-keyline accordion with a flat-color toggle.
 */
export function FaqBauhaus() {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div className="h-fit lg:sticky lg:top-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">Questions</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-tighter">
            Asked, answered.
          </h2>
        </div>

        <div className="border-2 border-foreground">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-foreground [&:not(:last-child)]:border-b-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-4 p-5 text-left transition-colors ${isOpen ? "bg-accent" : "hover:bg-card"}`}
                >
                  <span className="text-lg font-black uppercase">{f.q}</span>
                  <span className="grid size-8 shrink-0 place-items-center border-2 border-foreground bg-background">
                    <Plus className={`size-4 transition-transform ${isOpen ? "rotate-45" : ""}`} />
                  </span>
                </button>
                {isOpen && <p className="px-5 pb-5 font-medium leading-relaxed text-muted-foreground">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
