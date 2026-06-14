"use client"

import * as React from "react"
import { Check, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const AREAS = [
  "Downtown",
  "Maple Heights",
  "Riverside",
  "Oakdale",
  "North Hills",
  "Brookfield",
  "Westgate",
  "Sunnyside",
  "Cedar Park",
  "Lakeview",
  "Fairmont",
  "Greenwood",
]

/**
 * Service area — a "do you serve my area?" band with a zip check and a
 * columned list of neighborhoods over a stylized map panel.
 */
export function ServiceArea() {
  const [zip, setZip] = React.useState("")
  const [checked, setChecked] = React.useState(false)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <MapPin className="size-4" />
            Proudly local
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Serving the whole metro and then some.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Family-owned and based right here. If you&apos;re nearby, we can
            usually be out within 24 hours.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setChecked(true)
            }}
            className="mt-7 flex max-w-sm gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value)
                  setChecked(false)
                }}
                placeholder="Enter your ZIP code"
                inputMode="numeric"
                className="pl-9"
              />
            </div>
            <Button type="submit">Check</Button>
          </form>
          {checked && zip && (
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
              <Check className="size-4" />
              Great news — we service {zip}. Call for same-week scheduling.
            </p>
          )}

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {AREAS.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm">
                <Check className="size-3.5 shrink-0 text-accent" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-2xl border bg-secondary">
          {/* Map slot — drop in a real map embed or static image. */}
          <div className="absolute inset-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:38px_38px] opacity-70" />
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_50%_45%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_58%)]" />
          <div className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-primary/40" />
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <MapPin className="size-6" />
            </span>
            <span className="mt-2 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold">
              25-mile radius
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
