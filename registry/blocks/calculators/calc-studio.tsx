"use client"

import * as React from "react"

const PER_CLASS = 28
const MEMBER_RATE = 22

/**
 * Studio cost calculator — set classes per week; see drop-in vs membership savings.
 */
export function CalcStudio() {
  const [perWeek, setPerWeek] = React.useState(2)

  const monthly = perWeek * 4
  const dropInCost = monthly * PER_CLASS
  const memberCost = monthly * MEMBER_RATE
  const saving = dropInCost - memberCost

  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[1.5rem] border border-border bg-card p-7 sm:p-9">
          <p className="text-xs tracking-[0.25em] uppercase text-primary">Plan your practice</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight">How often will you move?</h2>

          <div className="mt-8">
            <div className="flex items-end justify-between">
              <span className="text-sm text-muted-foreground">Classes per week</span>
              <span className="font-serif text-2xl text-primary">{perWeek}</span>
            </div>
            <input
              type="range"
              min={1}
              max={6}
              value={perWeek}
              onChange={(e) => setPerWeek(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--primary)]"
            />
            <p className="mt-3 text-sm text-muted-foreground">That&apos;s about {monthly} classes a month.</p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-sm">
            <span className="text-muted-foreground">Drop-in at ${PER_CLASS}/class</span>
            <span className="text-foreground">${dropInCost}/mo</span>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[1.5rem] bg-primary p-8 text-center text-primary-foreground">
          <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/80">Unlimited membership</p>
          <p className="mt-2 font-serif text-[clamp(2.5rem,8vw,3.75rem)] leading-none tracking-tight">${memberCost}</p>
          <p className="mt-1 text-sm text-primary-foreground/80">per month</p>
          <p className="mt-5 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm">
            You&apos;d save ${saving > 0 ? saving : 0}/mo
          </p>
        </div>
      </div>
    </section>
  )
}
