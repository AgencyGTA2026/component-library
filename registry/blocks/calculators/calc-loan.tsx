"use client"

import * as React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

/**
 * Loan calculator — monthly payment, total interest, and a payoff
 * breakdown bar from principal, rate, and term. Standard amortization
 * math; great for mortgage brokers, lenders, and auto dealers.
 */
export function CalcLoan() {
  const [amount, setAmount] = React.useState(420000)
  const [rate, setRate] = React.useState(6.4)
  const [years, setYears] = React.useState(30)
  const [down, setDown] = React.useState(60000)

  const principal = Math.max(amount - down, 0)
  const r = rate / 100 / 12
  const n = years * 12
  const monthly =
    r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  const totalPaid = monthly * n
  const totalInterest = totalPaid - principal
  const interestShare = totalPaid > 0 ? totalInterest / totalPaid : 0

  const usd = (v: number) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Mortgage calculator
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
            Know your monthly before you fall in love with the house.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-7 rounded-lg border bg-card p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Home price" prefix="$" value={amount} onChange={setAmount} />
              <NumberField label="Down payment" prefix="$" value={down} onChange={setDown} />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <Label>Interest rate</Label>
                <span className="font-mono text-sm font-semibold">{rate.toFixed(2)}%</span>
              </div>
              <Slider
                value={[rate]}
                onValueChange={([v]) => setRate(v)}
                min={1}
                max={12}
                step={0.05}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <Label>Loan term</Label>
                <span className="font-mono text-sm font-semibold">{years} years</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[15, 20, 30].map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYears(y)}
                    className={`rounded-md border py-2 text-sm transition-colors ${
                      years === y
                        ? "border-primary bg-primary text-primary-foreground"
                        : "hover:border-foreground/40"
                    }`}
                  >
                    {y} yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border bg-card p-7 sm:p-9">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Estimated payment
            </p>
            <p className="mt-2 text-5xl font-medium tracking-tight">
              {usd(monthly)}
              <span className="text-lg text-muted-foreground"> /mo</span>
            </p>

            <div className="mt-8 space-y-4 border-t pt-6 text-sm">
              <Row label="Loan amount" value={usd(principal)} />
              <Row label="Total interest" value={usd(totalInterest)} />
              <Row label="Total paid over term" value={usd(totalPaid)} />
            </div>

            <div className="mt-auto pt-8">
              <div className="flex h-3 overflow-hidden rounded-full">
                <div
                  className="bg-primary transition-all duration-500"
                  style={{ width: `${(1 - interestShare) * 100}%` }}
                />
                <div
                  className="bg-muted-foreground/30 transition-all duration-500"
                  style={{ width: `${interestShare * 100}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                <span>
                  <span className="mr-1.5 inline-block size-2 rounded-full bg-primary" />
                  Principal {Math.round((1 - interestShare) * 100)}%
                </span>
                <span>
                  <span className="mr-1.5 inline-block size-2 rounded-full bg-muted-foreground/30" />
                  Interest {Math.round(interestShare * 100)}%
                </span>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Estimate excludes taxes, insurance, and HOA. Rates shown are
                illustrative — talk to a licensed advisor for a real quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NumberField({
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
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">
            {prefix}
          </span>
        )}
        <Input
          type="text"
          inputMode="numeric"
          className={prefix ? "pl-7" : undefined}
          value={value.toLocaleString()}
          onChange={(e) => {
            const raw = Number(e.target.value.replace(/[^0-9]/g, ""))
            if (!Number.isNaN(raw)) onChange(raw)
          }}
        />
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-mono">{value}</span>
    </div>
  )
}
