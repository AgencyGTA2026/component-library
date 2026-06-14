"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const STEPS = [
  { title: "Create your account", body: "Takes 30 seconds — just an email and a password.", done: true },
  { title: "Add your first habit", body: "Pick from our library or make your own.", done: true },
  { title: "Set your quiet hours", body: "Tell us when not to ping you.", done: false },
  { title: "Invite your circle", body: "Habits stick better with a friend or two.", done: false },
]

/**
 * Steps checklist — an interactive onboarding list with a progress ring.
 * Toggle items to watch completion update. Wire to your real user state.
 */
export function StepsChecklist() {
  const [done, setDone] = React.useState(() => STEPS.map((s) => s.done))
  const completed = done.filter(Boolean).length
  const pct = Math.round((completed / STEPS.length) * 100)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 flex items-center gap-5 rounded-2xl border bg-card p-6">
          <div className="relative grid size-16 shrink-0 place-items-center">
            <svg viewBox="0 0 36 36" className="size-16 -rotate-90">
              <circle cx="18" cy="18" r="16" fill="none" stroke="var(--muted)" strokeWidth="3" />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${pct} 100`}
                pathLength={100}
                className="transition-all duration-500"
              />
            </svg>
            <span className="absolute text-sm font-bold">{pct}%</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Let&apos;s get you set up</h2>
            <p className="text-sm text-muted-foreground">
              {completed} of {STEPS.length} steps done — you&apos;re almost there.
            </p>
          </div>
        </div>

        <ul className="space-y-2">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <button
                onClick={() => setDone((d) => d.map((v, idx) => (idx === i ? !v : v)))}
                className="flex w-full items-center gap-4 rounded-xl border bg-card p-4 text-left transition-colors hover:bg-secondary/50"
              >
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-full border-2 transition-colors",
                    done[i]
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-transparent"
                  )}
                >
                  <Check className="size-4" />
                </span>
                <span className="flex-1">
                  <span className={cn("block font-medium", done[i] && "text-muted-foreground line-through")}>
                    {step.title}
                  </span>
                  <span className="block text-sm text-muted-foreground">{step.body}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
