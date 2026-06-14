"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { PiggyBank } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

/**
 * Savings growth — compound interest over time with a live area chart.
 * Monthly compounding; contributions added at month start.
 */
export function CalcSavingsGrowth() {
  const [initial, setInitial] = React.useState(5000)
  const [monthly, setMonthly] = React.useState(400)
  const [rate, setRate] = React.useState(7)
  const [years, setYears] = React.useState(20)

  const { series, future, contributed } = React.useMemo(() => {
    const r = rate / 100 / 12
    const pts: number[] = []
    let balance = initial
    let paid = initial
    for (let m = 1; m <= years * 12; m++) {
      balance = balance * (1 + r) + monthly
      paid += monthly
      if (m % 12 === 0) pts.push(balance)
    }
    return { series: pts, future: balance, contributed: paid }
  }, [initial, monthly, rate, years])

  const interest = future - contributed
  const max = Math.max(...series, 1)
  const path = series
    .map((v, i) => `${(i / (series.length - 1)) * 100},${100 - (v / max) * 100}`)
    .join(" ")

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="flex items-center justify-center gap-2 font-medium text-primary">
            <PiggyBank className="size-5" />
            Compound growth
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Watch a little become a lot.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-7 rounded-2xl border bg-card p-7 sm:p-8">
            <SliderField label="Starting amount" display={`$${initial.toLocaleString()}`} value={initial} onChange={setInitial} min={0} max={100000} step={500} />
            <SliderField label="Monthly contribution" display={`$${monthly.toLocaleString()}`} value={monthly} onChange={setMonthly} min={0} max={3000} step={25} />
            <SliderField label="Annual return" display={`${rate}%`} value={rate} onChange={setRate} min={1} max={12} step={0.5} />
            <SliderField label="Years" display={`${years}`} value={years} onChange={setYears} min={1} max={40} step={1} />
          </div>

          <div className="flex flex-col rounded-2xl border bg-card p-7 sm:p-8">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Balance in {years} years
            </p>
            <AnimatedCurrency value={future} className="mt-1 text-4xl font-semibold tracking-tight sm:text-5xl" />

            <div className="relative mt-6 h-40 w-full">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="size-full overflow-visible">
                <defs>
                  <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points={`0,100 ${path} 100,100`} fill="url(#growth-fill)" />
                <polyline points={path} fill="none" stroke="var(--primary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-5 text-sm">
              <div>
                <p className="text-muted-foreground">You put in</p>
                <p className="mt-0.5 font-mono text-lg">${Math.round(contributed).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Interest earned</p>
                <p className="mt-0.5 font-mono text-lg text-primary">+${Math.round(interest).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SliderField({
  label,
  display,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string
  display: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step: number
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <Label>{label}</Label>
        <span className="font-mono text-sm font-semibold">{display}</span>
      </div>
      <Slider value={[value]} onValueChange={([v]) => onChange(v)} min={min} max={max} step={step} />
    </div>
  )
}

function AnimatedCurrency({ value, className }: { value: number; className?: string }) {
  const spring = useSpring(value, { stiffness: 80, damping: 20 })
  const text = useTransform(spring, (v) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
  )
  React.useEffect(() => spring.set(value), [spring, value])
  return <motion.p className={className}>{text}</motion.p>
}
