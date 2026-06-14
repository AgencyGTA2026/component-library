"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

/**
 * Margin / markup calculator — a small business tool. Enter unit cost
 * and a target, toggle between margin and markup, get the sell price.
 */
export function CalcMarginMarkup() {
  const [cost, setCost] = React.useState(60)
  const [pct, setPct] = React.useState(45)
  const [mode, setMode] = React.useState<"margin" | "markup">("margin")

  const price =
    mode === "margin" ? (pct >= 100 ? cost : cost / (1 - pct / 100)) : cost * (1 + pct / 100)
  const profit = price - cost
  const margin = price > 0 ? (profit / price) * 100 : 0
  const markup = cost > 0 ? (profit / cost) * 100 : 0

  const usd = (v: number) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 })

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Pricing math
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
            Price it for profit, not by feel.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-7 border-t-2 border-foreground pt-7">
            <div className="space-y-2">
              <Label>Unit cost</Label>
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                <Input
                  type="text"
                  inputMode="decimal"
                  className="pl-7 text-lg"
                  value={cost}
                  onChange={(e) => {
                    const n = Number(e.target.value.replace(/[^0-9.]/g, ""))
                    if (!Number.isNaN(n)) setCost(n)
                  }}
                />
              </div>
            </div>

            <div className="inline-flex rounded-none border-2 border-foreground p-0.5">
              {(["margin", "markup"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={cn(
                    "px-5 py-1.5 text-sm font-semibold capitalize transition-colors",
                    mode === m ? "bg-foreground text-background" : "hover:bg-muted"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <Label>Target {mode}</Label>
                <span className="font-mono text-sm font-semibold">{pct}%</span>
              </div>
              <Slider value={[pct]} onValueChange={([v]) => setPct(v)} min={0} max={mode === "margin" ? 95 : 300} step={1} />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 bg-foreground p-8 text-background">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-60">Sell price</p>
              <AnimatedCurrency value={price} className="mt-1 text-5xl font-medium tracking-tight" />
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-background/20 pt-5 text-sm">
              <div>
                <p className="opacity-60">Profit / unit</p>
                <p className="mt-0.5 font-mono text-lg">{usd(profit)}</p>
              </div>
              <div>
                <p className="opacity-60">Margin / markup</p>
                <p className="mt-0.5 font-mono text-lg">
                  {margin.toFixed(0)}% / {markup.toFixed(0)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedCurrency({ value, className }: { value: number; className?: string }) {
  const spring = useSpring(value, { stiffness: 110, damping: 18 })
  const text = useTransform(spring, (v) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 })
  )
  React.useEffect(() => spring.set(value), [spring, value])
  return <motion.p className={className}>{text}</motion.p>
}
