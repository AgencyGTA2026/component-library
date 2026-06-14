"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { Home } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

/**
 * Affordability calculator — income, debts, and rate estimate the home
 * price a buyer qualifies for (28% front-end DTI). Educational only.
 */
export function CalcAffordability() {
  const [income, setIncome] = React.useState(120000)
  const [debts, setDebts] = React.useState(650)
  const [down, setDown] = React.useState(60000)
  const [rate, setRate] = React.useState(6.4)
  const years = 30

  const monthlyIncome = income / 12
  // 36% back-end DTI cap, minus existing debts → available for housing
  const maxHousing = Math.max(monthlyIncome * 0.36 - debts, 0)
  // assume ~20% of payment goes to taxes/insurance → P&I budget
  const piBudget = maxHousing * 0.8
  const r = rate / 100 / 12
  const n = years * 12
  const loan = r === 0 ? piBudget * n : (piBudget * (1 - Math.pow(1 + r, -n))) / r
  const homePrice = loan + down

  const usd = (v: number) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="flex items-center justify-center gap-2 font-medium text-primary">
            <Home className="size-5" />
            Affordability calculator
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            How much house can you actually afford?
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-7 rounded-2xl border bg-card p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Annual household income" prefix="$" value={income} onChange={setIncome} />
              <Field label="Down payment" prefix="$" value={down} onChange={setDown} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Monthly debt payments" prefix="$" value={debts} onChange={setDebts} />
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <Label>Interest rate</Label>
                  <span className="font-mono text-sm font-semibold">{rate.toFixed(2)}%</span>
                </div>
                <Slider value={[rate]} onValueChange={([v]) => setRate(v)} min={2} max={10} step={0.05} className="pt-2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-primary p-8 text-center text-primary-foreground">
            <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-70">
              You could afford a home around
            </p>
            <AnimatedCurrency value={homePrice} className="mt-2 text-5xl font-semibold tracking-tight sm:text-6xl" />
            <div className="mt-6 space-y-1 border-t border-primary-foreground/25 pt-5 text-sm opacity-90">
              <p>Est. payment: {usd(maxHousing)}/mo</p>
              <p>Loan amount: {usd(loan)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  prefix,
  value,
  onChange,
}: {
  label: string
  prefix?: string
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="relative">
        {prefix && (
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">{prefix}</span>
        )}
        <Input
          type="text"
          inputMode="numeric"
          className={prefix ? "pl-7" : undefined}
          value={value.toLocaleString()}
          onChange={(e) => {
            const n = Number(e.target.value.replace(/[^0-9]/g, ""))
            if (!Number.isNaN(n)) onChange(n)
          }}
        />
      </div>
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
