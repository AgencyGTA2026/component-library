"use client"

import * as React from "react"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

/**
 * Project cost estimator — pick a base package and add-ons, watch the
 * range update live. Edit the PRICES table to match your rate card.
 */
const BASES = [
  { id: "landing", label: "Landing page", desc: "One page, one goal", low: 3500, high: 6000 },
  { id: "site", label: "Marketing site", desc: "Up to 10 pages + CMS", low: 9000, high: 18000 },
  { id: "store", label: "E-commerce", desc: "Catalog, cart, checkout", low: 15000, high: 30000 },
]

const ADDONS = [
  { id: "brand", label: "Brand refresh", desc: "Logo, palette, type system", low: 3000, high: 6000 },
  { id: "copy", label: "Copywriting", desc: "Every word on every page", low: 1500, high: 4000 },
  { id: "seo", label: "Technical SEO", desc: "Schema, speed, sitemaps", low: 1200, high: 2500 },
  { id: "care", label: "Care plan", desc: "Updates + support, /yr", low: 2400, high: 4800 },
]

const fmt = (n: number) => `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`

export function CalcEstimator() {
  const [base, setBase] = React.useState("site")
  const [addons, setAddons] = React.useState<string[]>(["seo"])

  const baseItem = BASES.find((b) => b.id === base)!
  const extras = ADDONS.filter((a) => addons.includes(a.id))
  const low = baseItem.low + extras.reduce((s, a) => s + a.low, 0)
  const high = baseItem.high + extras.reduce((s, a) => s + a.high, 0)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Instant estimate
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
            Build your project, see the number.
          </h2>
          <p className="mt-3 text-muted-foreground">
            No email gate. Real ranges from our actual rate card.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-semibold">1 · Start with a base</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {BASES.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBase(b.id)}
                    className={cn(
                      "rounded-lg border p-4 text-left transition-all",
                      base === b.id
                        ? "border-primary ring-2 ring-primary/30"
                        : "hover:border-foreground/40"
                    )}
                  >
                    <p className="font-semibold">{b.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{b.desc}</p>
                    <p className="mt-3 font-mono text-sm">
                      {fmt(b.low)}–{fmt(b.high)}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold">2 · Add what you need</p>
              <div className="divide-y rounded-lg border">
                {ADDONS.map((a) => {
                  const on = addons.includes(a.id)
                  return (
                    <label
                      key={a.id}
                      className="flex cursor-pointer items-center justify-between gap-4 p-4 transition-colors hover:bg-muted/50"
                    >
                      <div>
                        <p className="font-medium">{a.label}</p>
                        <p className="text-xs text-muted-foreground">{a.desc}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm text-muted-foreground">
                          +{fmt(a.low)}–{fmt(a.high)}
                        </span>
                        <Switch
                          checked={on}
                          onCheckedChange={(v) =>
                            setAddons((cur) =>
                              v ? [...cur, a.id] : cur.filter((x) => x !== a.id)
                            )
                          }
                        />
                      </div>
                    </label>
                  )
                })}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-lg border bg-card p-7 lg:sticky lg:top-6">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Your estimate
            </p>
            <p className="mt-3 text-4xl font-medium tracking-tight">
              {fmt(low)} <span className="text-muted-foreground">–</span> {fmt(high)}
            </p>
            <ul className="mt-6 space-y-2 border-t pt-5 text-sm">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                {baseItem.label}
              </li>
              {extras.map((a) => (
                <li key={a.id} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  {a.label}
                </li>
              ))}
            </ul>
            <Button className="mt-7 w-full" size="lg">
              Lock in a real quote
              <ArrowRight className="size-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Takes 60 seconds. No commitment.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
