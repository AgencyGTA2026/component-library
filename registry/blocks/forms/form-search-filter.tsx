"use client"

import * as React from "react"
import { MapPin, Search, SlidersHorizontal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const SERVICES = ["Roofing", "Gutters", "Siding", "Windows", "Solar"]
const SORTS = ["Top rated", "Nearest", "Soonest available"]

/**
 * Search + filter bar — a faceted finder with a query field, location,
 * service chips, and a sort. Self-contained state; lift it up and wire
 * to your search/results query.
 */
export function FormSearchFilter() {
  const [query, setQuery] = React.useState("")
  const [zip, setZip] = React.useState("")
  const [active, setActive] = React.useState<string[]>(["Roofing"])
  const [sort, setSort] = React.useState(SORTS[0])

  const toggle = (s: string) =>
    setActive((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Find a pro near you.
          </h2>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="What do you need done?" className="pl-9" />
            </div>
            <div className="relative sm:w-44">
              <MapPin className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={zip} onChange={(e) => setZip(e.target.value)} inputMode="numeric" placeholder="ZIP" className="pl-9" />
            </div>
            <Button size="lg" className="sm:px-8">Search</Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <SlidersHorizontal className="size-3.5" />
              Service
            </span>
            {SERVICES.map((s) => (
              <button
                key={s}
                onClick={() => toggle(s)}
                className={cn(
                  "rounded-full border px-3 py-1 text-sm transition-colors",
                  active.includes(s)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:border-foreground/40"
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
            <div className="flex flex-wrap items-center gap-2">
              {active.length > 0 ? (
                active.map((s) => (
                  <span key={s} className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {s}
                    <button onClick={() => toggle(s)} aria-label={`Remove ${s}`}>
                      <X className="size-3" />
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-xs text-muted-foreground">No filters — showing everything</span>
              )}
            </div>

            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-md border bg-background px-2 py-1.5 text-sm"
              >
                {SORTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
