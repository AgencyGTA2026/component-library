"use client"

import * as React from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { Ruler } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

/**
 * Material estimator — area in, units + cost out. Tune the MATERIALS
 * table to your trade (mulch, paint, sod, roofing squares, gravel).
 */
const MATERIALS = [
  { id: "mulch", label: "Mulch", unit: "yd³", coverage: 108, price: 42 }, // sqft per unit @ 3"
  { id: "paint", label: "Paint", unit: "gal", coverage: 350, price: 48 },
  { id: "sod", label: "Sod", unit: "pallet", coverage: 450, price: 185 },
  { id: "roofing", label: "Roofing", unit: "square", coverage: 100, price: 360 },
  { id: "gravel", label: "Gravel", unit: "ton", coverage: 100, price: 58 },
]

export function CalcMaterialEstimator() {
  const [length, setLength] = React.useState(40)
  const [width, setWidth] = React.useState(25)
  const [waste, setWaste] = React.useState(10)
  const [mat, setMat] = React.useState(MATERIALS[0])

  const area = length * width
  const adjusted = area * (1 + waste / 100)
  const units = Math.ceil(adjusted / mat.coverage)
  const cost = units * mat.price

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            <Ruler className="size-4" />
            Material estimator
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Measure once. Order the right amount.
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-lg border md:grid-cols-2">
          <div className="space-y-8 bg-card p-7 sm:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold">Material</p>
              <div className="flex flex-wrap gap-2">
                {MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMat(m)}
                    className={cn(
                      "rounded-md border px-3.5 py-2 text-sm transition-colors",
                      mat.id === m.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "hover:border-foreground/40"
                    )}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <Dim label="Length (ft)" value={length} onChange={setLength} />
              <Dim label="Width (ft)" value={width} onChange={setWidth} />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <Label>Waste / overage</Label>
                <span className="font-mono text-sm font-semibold">{waste}%</span>
              </div>
              <Slider value={[waste]} onValueChange={([v]) => setWaste(v)} min={0} max={25} step={1} />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-7 bg-primary p-7 text-primary-foreground sm:p-10">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-70">Coverage area</p>
              <p className="mt-1 text-3xl font-medium">{area.toLocaleString()} ft²</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-70">You&apos;ll need</p>
              <AnimatedNumber
                value={units}
                suffix={` ${mat.unit}${units === 1 ? "" : "s"}`}
                className="mt-1 text-3xl font-medium"
              />
            </div>
            <div className="border-t border-primary-foreground/25 pt-6">
              <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-70">Estimated material cost</p>
              <AnimatedNumber value={cost} prefix="$" className="mt-1 text-5xl font-semibold tracking-tight" />
              <p className="mt-2 text-xs opacity-70">
                {units} × ${mat.price}/{mat.unit} · excludes delivery &amp; labor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Dim({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const n = Number(e.target.value.replace(/[^0-9]/g, ""))
          if (!Number.isNaN(n)) onChange(n)
        }}
      />
    </div>
  )
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const spring = useSpring(value, { stiffness: 90, damping: 18 })
  const text = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`)
  React.useEffect(() => spring.set(value), [spring, value])
  return <motion.p className={className}>{text}</motion.p>
}
