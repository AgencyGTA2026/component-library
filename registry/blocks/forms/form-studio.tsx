"use client"

import * as React from "react"
import { Check } from "lucide-react"

const GOALS = ["Build strength", "Recover gently", "Reduce stress", "Improve posture"]

/**
 * Studio enquiry form — soft rounded fields and quiet blush chips with success swap.
 */
export function FormStudio() {
  const [sent, setSent] = React.useState(false)
  const [goal, setGoal] = React.useState(GOALS[0])

  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-primary">Say hello</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-tight">
            Book your first class
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Tell us a little about you and we&apos;ll pair you with the right intro session. No
            pressure, no contracts.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-border bg-card p-7 sm:p-9">
          {sent ? (
            <div className="grid min-h-[280px] place-items-center text-center">
              <div>
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-secondary text-primary">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-5 font-serif text-2xl tracking-tight">See you soon</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">We&apos;ll be in touch within a day to confirm your spot.</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground">What brings you in?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {GOALS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      goal === g ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                <input
                  required
                  placeholder="First name"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  rows={3}
                  placeholder="Anything we should know? (optional)"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request my class
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
