"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { TrendingUp } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

/**
 * ROI calculator — three sliders project the revenue impact of a higher
 * conversion rate, with spring-animated results. Tune `LIFT` to match
 * the offer you're making.
 */
const LIFT = 0.35 // projected relative conversion lift

export function CalcRoi() {
  const [visitors, setVisitors] = React.useState(20000)
  const [conversion, setConversion] = React.useState(2)
  const [orderValue, setOrderValue] = React.useState(150)

  const current = visitors * (conversion / 100) * orderValue
  const projected = visitors * ((conversion * (1 + LIFT)) / 100) * orderValue
  const gain = (projected - current) * 12

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            ROI calculator
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
            What is a better website actually worth?
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-lg border md:grid-cols-2">
          <div className="space-y-9 bg-card p-7 sm:p-10">
            <SliderField
              label="Monthly visitors"
              display={visitors.toLocaleString()}
              value={visitors}
              onChange={setVisitors}
              min={1000}
              max={200000}
              step={1000}
            />
            <SliderField
              label="Conversion rate"
              display={`${conversion.toFixed(1)}%`}
              value={conversion}
              onChange={setConversion}
              min={0.2}
              max={10}
              step={0.1}
            />
            <SliderField
              label="Average order / deal value"
              display={`$${orderValue.toLocaleString()}`}
              value={orderValue}
              onChange={setOrderValue}
              min={10}
              max={2000}
              step={10}
            />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Projection assumes a {Math.round(LIFT * 100)}% relative lift in
              conversion rate — our median result across redesigns shipped in
              the last two years.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-8 bg-primary p-7 text-primary-foreground sm:p-10">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-70">
                Revenue today / mo
              </p>
              <AnimatedCurrency value={current} className="text-3xl font-medium" />
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-70">
                Projected / mo
              </p>
              <AnimatedCurrency value={projected} className="text-3xl font-medium" />
            </div>
            <div className="border-t border-primary-foreground/25 pt-6">
              <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase opacity-70">
                <TrendingUp className="size-4" />
                Added revenue / year
              </p>
              <AnimatedCurrency
                value={gain}
                className="text-5xl font-semibold tracking-tight sm:text-6xl"
              />
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
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
      />
    </div>
  )
}

function AnimatedCurrency({ value, className }: { value: number; className?: string }) {
  const spring = useSpring(value, { stiffness: 80, damping: 20 })
  const text = useTransform(spring, (v) =>
    v.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    })
  )
  React.useEffect(() => {
    spring.set(value)
  }, [spring, value])
  return <motion.p className={className}>{text}</motion.p>
}
