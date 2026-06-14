"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

/**
 * Countdown — a launch / sale timer that ticks to a target date. Pass
 * your own `target`; defaults to 6 days out so the preview always runs.
 */
export function Countdown({ target }: { target?: Date }) {
  const deadline = React.useMemo(
    () => target ?? new Date(Date.now() + 6 * 24 * 3600 * 1000 + 3600 * 1000 * 7),
    [target]
  )
  const [now, setNow] = React.useState<number>(() => Date.now())

  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, deadline.getTime() - now)
  const units = [
    { label: "Days", value: Math.floor(diff / 86400000) },
    { label: "Hours", value: Math.floor((diff / 3600000) % 24) },
    { label: "Minutes", value: Math.floor((diff / 60000) % 60) },
    { label: "Seconds", value: Math.floor((diff / 1000) % 60) },
  ]

  return (
    <section className="bg-foreground px-5 py-16 text-background sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-accent">
          Founders&apos; pricing ends soon
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-balance uppercase sm:text-4xl">
          Lock in 40% off for life.
        </h2>

        <div className="mt-8 flex justify-center gap-3 sm:gap-4">
          {units.map((u) => (
            <div
              key={u.label}
              className="w-20 rounded-lg bg-background/10 py-4 backdrop-blur sm:w-24"
            >
              <p className="font-mono text-3xl font-bold tabular-nums sm:text-5xl">
                {String(u.value).padStart(2, "0")}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase opacity-70">
                {u.label}
              </p>
            </div>
          ))}
        </div>

        <Button variant="secondary" size="lg" className="mt-8">
          Claim the deal
        </Button>
      </div>
    </section>
  )
}
