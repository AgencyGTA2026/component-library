"use client"

import * as React from "react"
import { Plus } from "lucide-react"

const FAQS = [
  { q: "How long does a commission take?", a: "Most pieces take eight to twelve weeks from approved drawing to unveiling. Restorations and intricate settings may take longer — we will never rush the setting room." },
  { q: "Can you work from an heirloom?", a: "Often, yes. We can reset stones from an existing piece or redraw it entirely while preserving its character. Bring it to a viewing and we will advise honestly." },
  { q: "Do you ship internationally?", a: "We deliver worldwide, fully insured and by private courier. Engraving and resizing remain complimentary wherever you are." },
  { q: "What is your guarantee?", a: "Every piece carries a lifetime guarantee against defects in craftsmanship, alongside complimentary cleaning and condition reports for as long as you own it." },
  { q: "May I visit without an appointment?", a: "You are always welcome, though a booked viewing lets us prepare a selection and set aside the time you deserve." },
]

/**
 * Noir FAQ — a serif accordion divided by gold hairlines.
 */
export function FaqNoir() {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div className="h-fit lg:sticky lg:top-16">
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">Enquiries</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight">Questions, answered plainly.</h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-serif text-lg tracking-tight">{f.q}</span>
                  <Plus className={`size-4 shrink-0 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`} />
                </button>
                {isOpen && <p className="pb-5 leading-relaxed text-muted-foreground">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
