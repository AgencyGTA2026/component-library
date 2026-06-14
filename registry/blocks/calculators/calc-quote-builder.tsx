"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { Check, FileText, Minus, Plus, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

/**
 * Quote builder — a line-item quote generator. Add quantities, toggle a
 * rush fee, and watch the itemized total update live. Edit CATALOG to
 * match your rate card; wire the button to email or PDF the quote.
 */
const CATALOG = [
  { id: "design", label: "Page design", unit: "page", price: 850, qty: 1 },
  { id: "dev", label: "Development & build", unit: "page", price: 650, qty: 1 },
  { id: "copy", label: "Copywriting", unit: "page", price: 300, qty: 0 },
  { id: "cms", label: "CMS setup", unit: "flat", price: 1200, qty: 0 },
  { id: "seo", label: "Technical SEO pass", unit: "flat", price: 1500, qty: 0 },
  { id: "shoot", label: "Photo / asset shoot", unit: "day", price: 1800, qty: 0 },
]
const RUSH_PCT = 0.2
const TAX_PCT = 0.08

export function CalcQuoteBuilder() {
  const [items, setItems] = React.useState(CATALOG)
  const [rush, setRush] = React.useState(false)

  const set = (id: string, delta: number) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it))
    )

  const lines = items.filter((it) => it.qty > 0)
  const subtotal = lines.reduce((s, it) => s + it.qty * it.price, 0)
  const rushFee = rush ? subtotal * RUSH_PCT : 0
  const tax = (subtotal + rushFee) * TAX_PCT
  const total = subtotal + rushFee + tax

  const usd = (v: number) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="flex items-center gap-2 font-semibold text-primary">
            <FileText className="size-5" />
            Quote builder
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Build your project, get a real number.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="divide-y rounded-2xl border bg-card">
            {items.map((it) => (
              <div key={it.id} className="flex items-center justify-between gap-4 p-4 sm:p-5">
                <div>
                  <p className="font-medium">{it.label}</p>
                  <p className="text-sm text-muted-foreground">{usd(it.price)} / {it.unit}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Stepper
                    qty={it.qty}
                    onDec={() => set(it.id, -1)}
                    onInc={() => set(it.id, +1)}
                  />
                  <span className="w-20 text-right font-mono text-sm tabular-nums">
                    {it.qty > 0 ? usd(it.qty * it.price) : "—"}
                  </span>
                </div>
              </div>
            ))}

            <label className="flex cursor-pointer items-center justify-between gap-4 p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-accent" />
                <div>
                  <p className="font-medium">Rush delivery</p>
                  <p className="text-sm text-muted-foreground">+{RUSH_PCT * 100}% — half the timeline</p>
                </div>
              </div>
              <Switch checked={rush} onCheckedChange={setRush} />
            </label>
          </div>

          <aside className="h-fit rounded-2xl border bg-card p-7 lg:sticky lg:top-6">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Your quote
            </p>
            <AnimatedCurrency value={total} className="mt-2 text-4xl font-semibold tracking-tight" />

            <dl className="mt-6 space-y-2 border-t pt-5 text-sm">
              <Row label="Subtotal" value={usd(subtotal)} />
              {rush && <Row label={`Rush (+${RUSH_PCT * 100}%)`} value={usd(rushFee)} />}
              <Row label={`Tax (${TAX_PCT * 100}%)`} value={usd(tax)} />
            </dl>

            {lines.length > 0 && (
              <ul className="mt-5 space-y-1.5 border-t pt-5 text-sm text-muted-foreground">
                {lines.map((it) => (
                  <li key={it.id} className="flex items-center gap-2">
                    <Check className="size-3.5 text-primary" />
                    {it.qty}× {it.label}
                  </li>
                ))}
              </ul>
            )}

            <Button className="mt-7 w-full" size="lg" disabled={lines.length === 0}>
              Email me this quote
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Estimate is valid for 30 days.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Stepper({ qty, onDec, onInc }: { qty: number; onDec: () => void; onInc: () => void }) {
  return (
    <div className="flex items-center rounded-md border">
      <button onClick={onDec} aria-label="Decrease" className={cn("grid size-8 place-items-center transition-colors hover:bg-muted", qty === 0 && "opacity-40")}>
        <Minus className="size-3.5" />
      </button>
      <span className="w-7 text-center font-mono text-sm tabular-nums">{qty}</span>
      <button onClick={onInc} aria-label="Increase" className="grid size-8 place-items-center transition-colors hover:bg-muted">
        <Plus className="size-3.5" />
      </button>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-mono">{value}</dd>
    </div>
  )
}

function AnimatedCurrency({ value, className }: { value: number; className?: string }) {
  const spring = useSpring(value, { stiffness: 120, damping: 18 })
  const text = useTransform(spring, (v) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
  )
  React.useEffect(() => spring.set(value), [spring, value])
  return <motion.p className={className}>{text}</motion.p>
}
