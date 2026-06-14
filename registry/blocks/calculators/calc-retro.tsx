"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"

const PRICE_PER_CASE = 24
const FREE_SHIP_AT = 3

/**
 * Retro calculator — a subscription builder with a chunky live total.
 */
export function CalcRetro() {
  const [cases, setCases] = React.useState(2)
  const [weeks, setWeeks] = React.useState(4)

  const subtotal = cases * PRICE_PER_CASE
  const shipping = cases >= FREE_SHIP_AT ? 0 : 6
  const perDelivery = subtotal + shipping
  const monthly = Math.round((perDelivery * 4) / weeks)

  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[2rem] border-2 border-foreground bg-card p-7 shadow-[6px_6px_0_0_var(--foreground)]">
          <h2 className="text-3xl font-black tracking-tight">Build your fizz plan</h2>

          <div className="mt-7">
            <p className="text-sm font-black uppercase tracking-wide">Cases per delivery</p>
            <div className="mt-3 flex items-center gap-4">
              <button
                aria-label="Fewer"
                onClick={() => setCases((c) => Math.max(1, c - 1))}
                className="grid size-11 place-items-center rounded-full border-2 border-foreground bg-accent shadow-[3px_3px_0_0_var(--foreground)]"
              >
                <Minus className="size-5" />
              </button>
              <span className="w-12 text-center text-3xl font-black">{cases}</span>
              <button
                aria-label="More"
                onClick={() => setCases((c) => Math.min(12, c + 1))}
                className="grid size-11 place-items-center rounded-full border-2 border-foreground bg-accent shadow-[3px_3px_0_0_var(--foreground)]"
              >
                <Plus className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-sm font-black uppercase tracking-wide">Every {weeks} weeks</p>
            <input
              type="range"
              min={1}
              max={8}
              value={weeks}
              onChange={(e) => setWeeks(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--primary)]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[2rem] border-2 border-foreground bg-primary p-7 text-primary-foreground shadow-[6px_6px_0_0_var(--foreground)]">
          <p className="text-sm font-black uppercase tracking-wide">Roughly per month</p>
          <p className="mt-2 text-[clamp(2.5rem,9vw,4rem)] font-black leading-none tracking-tighter">
            ${monthly}
          </p>
          <p className="mt-3 text-sm font-bold opacity-90">
            ${perDelivery} per delivery{shipping === 0 ? " · free shipping 🎉" : " · $6 shipping"}
          </p>
        </div>
      </div>
    </section>
  )
}
