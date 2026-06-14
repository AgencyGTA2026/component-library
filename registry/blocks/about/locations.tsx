"use client"

import * as React from "react"
import { Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LOCATIONS = [
  { city: "Maple Heights", address: "1420 Birchwood Ave, Suite 5", phone: "(555) 123-4567", hours: "Mon–Fri 7–7 · Sat 8–4", x: 32, y: 38 },
  { city: "Riverside", address: "88 Canal Street", phone: "(555) 224-8890", hours: "Mon–Fri 8–6", x: 58, y: 54 },
  { city: "North Hills", address: "3001 Summit Blvd", phone: "(555) 661-2200", hours: "Mon–Sat 8–5", x: 46, y: 24 },
]

/**
 * Locations — multi-branch cards (address, phone, hours) beside a
 * stylized map with pins that highlight the selected office. For
 * multi-location service businesses and clinics.
 */
export function Locations() {
  const [active, setActive] = React.useState(0)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <p className="flex items-center gap-2 font-medium text-primary">
            <MapPin className="size-4" />
            Visit us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Three offices, one standard of care.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-3">
            {LOCATIONS.map((l, i) => (
              <button
                key={l.city}
                onClick={() => setActive(i)}
                className={cn(
                  "w-full rounded-2xl border bg-card p-5 text-left transition-all",
                  active === i ? "border-primary ring-2 ring-primary/20" : "hover:border-foreground/30"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{l.city}</h3>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><MapPin className="size-4 shrink-0 text-primary" /> {l.address}</p>
                  <p className="flex items-center gap-2"><Phone className="size-4 shrink-0 text-primary" /> {l.phone}</p>
                  <p className="flex items-center gap-2"><Clock className="size-4 shrink-0 text-primary" /> {l.hours}</p>
                </div>
                {active === i && (
                  <Button size="sm" className="mt-4">Get directions</Button>
                )}
              </button>
            ))}
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-2xl border bg-secondary lg:min-h-full">
            <div className="absolute inset-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:36px_36px] opacity-70" />
            {LOCATIONS.map((l, i) => (
              <button
                key={l.city}
                onClick={() => setActive(i)}
                aria-label={l.city}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${l.x}%`, top: `${l.y}%` }}
              >
                <span className={cn(
                  "grid size-9 place-items-center rounded-full border-2 border-background shadow-lg transition-all",
                  active === i ? "scale-125 bg-primary text-primary-foreground" : "bg-card text-primary"
                )}>
                  <MapPin className="size-4" />
                </span>
                {active === i && (
                  <span className="absolute left-1/2 mt-1 -translate-x-1/2 rounded-full bg-background/90 px-2 py-0.5 text-xs font-medium whitespace-nowrap shadow">
                    {l.city}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
