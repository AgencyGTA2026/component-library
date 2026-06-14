"use client"

import * as React from "react"
import { Plus } from "lucide-react"

const FAQS = [
  { q: "Is it actually healthy?", a: "40 calories, real fruit, no artificial sweeteners. It's a treat that happens to be kind to you." },
  { q: "Can I mix flavors in a case?", a: "Absolutely. Every subscription case is build-your-own — all six flavors are fair game." },
  { q: "How fast is shipping?", a: "Cold-packed and out the door same or next day. Most orders land in 2 to 4 days." },
  { q: "Can I pause or cancel?", a: "Anytime, in two taps. Skip a delivery, change your pace, or stop — no phone calls, no guilt." },
  { q: "Where can I buy in stores?", a: "We're in 3,200+ shops and counting. Use the stockist finder to spot one near you." },
]

/**
 * Retro FAQ — rounded cards that pop open with a sticker toggle.
 */
export function FaqRetro() {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">Good questions</h2>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className="rounded-[1.25rem] border-2 border-foreground bg-card shadow-[4px_4px_0_0_var(--foreground)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-lg font-black">{f.q}</span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border-2 border-foreground transition-transform ${
                      isOpen ? "rotate-45 bg-primary text-primary-foreground" : "bg-accent"
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 font-medium text-muted-foreground">{f.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
