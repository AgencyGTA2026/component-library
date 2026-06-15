"use client"

import * as React from "react"
import { Plus } from "lucide-react"

const FAQS = [
  { q: "I've never done Pilates — is that okay?", a: "More than okay. Our intro classes are built for first-timers, and every class has hands-on guidance. You won't be left to figure it out alone." },
  { q: "What should I bring?", a: "Just comfortable clothes you can move in and grip socks (we sell them, or borrow a pair). We provide everything else, including mats and props." },
  { q: "How big are the classes?", a: "Six people, maximum. That's the whole point — enough space for your teacher to actually see and correct you." },
  { q: "Can I come back after injury or pregnancy?", a: "Yes. Many of our members do. Let us know in your intro form and we'll match you with the right class and teacher." },
  { q: "Do memberships lock me in?", a: "Never. Pause or cancel anytime with no fees. We'd rather you stay because you want to." },
]

/**
 * Studio FAQ — a calm hairline accordion with a soft blush toggle.
 */
export function FaqStudio() {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div className="h-fit lg:sticky lg:top-16">
          <p className="text-xs tracking-[0.25em] uppercase text-primary">Good to know</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight">Before your first class</h2>
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
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full transition-all ${
                      isOpen ? "rotate-45 bg-primary text-primary-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
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
