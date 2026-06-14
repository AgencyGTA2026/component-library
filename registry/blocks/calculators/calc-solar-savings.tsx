"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { Sun } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

/**
 * Solar savings — monthly bill + sun exposure project payback and
 * lifetime savings. Simplified model; replace constants with local data.
 */
const EXPOSURE = [
  { id: "low", label: "Mostly shaded", factor: 0.75 },
  { id: "mid", label: "Average", factor: 0.88 },
  { id: "high", label: "Full sun", factor: 0.96 },
]
const COST_PER_OFFSET_DOLLAR = 14 // system $ per $1 of annual bill offset
const ANNUAL_RATE_INFLATION = 0.03

export function CalcSolarSavings() {
  const [bill, setBill] = React.useState(220)
  const [exp, setExp] = React.useState(EXPOSURE[2])

  const annualBill = bill * 12
  const offset = exp.factor
  const annualSavings = annualBill * offset
  const systemCost = annualSavings * COST_PER_OFFSET_DOLLAR * 0.6
  const payback = systemCost / annualSavings
  // 25-yr savings with modest utility inflation, minus system cost
  let lifetime = 0
  for (let y = 0; y < 25; y++) lifetime += annualSavings * Math.pow(1 + ANNUAL_RATE_INFLATION, y)
  lifetime -= systemCost

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="flex items-center gap-2 font-semibold text-primary">
            <Sun className="size-5" />
            Solar savings estimator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            See what the sun could save you.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8 rounded-2xl border bg-card p-7 sm:p-9">
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <Label>Average monthly electric bill</Label>
                <span className="font-mono text-sm font-semibold">${bill}</span>
              </div>
              <Slider value={[bill]} onValueChange={([v]) => setBill(v)} min={40} max={600} step={5} />
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold">Roof sun exposure</p>
              <div className="grid grid-cols-3 gap-2">
                {EXPOSURE.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => setExp(e)}
                    className={cn(
                      "rounded-xl border px-2 py-3 text-sm transition-colors",
                      exp.id === e.id ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/40"
                    )}
                  >
                    {e.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Estimate only. Actual savings depend on roof orientation, local
              rates, incentives, and equipment. We confirm everything in a free
              on-site assessment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat label="Est. system cost" value={systemCost} prefix="$" className="bg-card" />
            <Stat label="Payback period" value={payback} suffix=" yrs" decimals={1} className="bg-card" />
            <div className="col-span-2 rounded-2xl bg-primary p-7 text-primary-foreground">
              <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-70">
                Net savings over 25 years
              </p>
              <AnimatedNumber value={lifetime} prefix="$" className="mt-2 text-5xl font-semibold tracking-tight sm:text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  label,
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}) {
  return (
    <div className={cn("rounded-2xl border p-6", className)}>
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</p>
      <AnimatedNumber value={value} prefix={prefix} suffix={suffix} decimals={decimals} className="mt-2 text-3xl font-semibold tracking-tight" />
    </div>
  )
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}) {
  const spring = useSpring(value, { stiffness: 80, damping: 20 })
  const text = useTransform(spring, (v) =>
    `${prefix}${v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`
  )
  React.useEffect(() => spring.set(value), [spring, value])
  return <motion.p className={className}>{text}</motion.p>
}
