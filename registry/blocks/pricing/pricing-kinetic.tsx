"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"

const PLANS = [
  {
    name: "Single",
    monthly: 4,
    blurb: "One film, start to finish.",
    features: ["1 motion piece", "2 rounds of revisions", "Source files", "4-week delivery"],
    featured: false,
  },
  {
    name: "Retainer",
    monthly: 12,
    blurb: "An on-call motion team.",
    features: ["Unlimited briefs, one at a time", "Weekly delivery cadence", "Dedicated director", "Priority turnaround"],
    featured: true,
  },
  {
    name: "Studio",
    monthly: 28,
    blurb: "Embedded for the big launch.",
    features: ["Full campaign coverage", "2 concurrent projects", "Live edit sessions", "Brand motion system"],
    featured: false,
  },
]

/**
 * Kinetic pricing — a mostly-static rate card. The only motion is a spring-sliding
 * billing toggle and a gentle hover lift; the numbers themselves stay calm.
 */
export function PricingKinetic() {
  const [annual, setAnnual] = React.useState(true)
  const reduce = useReducedMotion()

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-xl text-[clamp(1.9rem,5vw,3rem)] font-black leading-tight tracking-tight">
            Pricing that keeps pace.
          </h2>

          <button
            type="button"
            onClick={() => setAnnual((a) => !a)}
            aria-pressed={annual}
            className="relative flex items-center gap-1 rounded-full border border-border bg-card p-1 text-sm font-semibold"
          >
            {(["Monthly", "Annual"] as const).map((label, i) => {
              const active = annual === (i === 1)
              return (
                <span key={label} className="relative z-10 px-4 py-1.5">
                  {active && (
                    <motion.span
                      layoutId="bill-toggle"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                    />
                  )}
                  <span className={active ? "text-primary-foreground" : "text-muted-foreground"}>
                    {label}
                  </span>
                </span>
              )
            })}
          </button>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = annual ? plan.monthly * 10 : plan.monthly
            return (
              <motion.div
                key={plan.name}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`flex flex-col rounded-[calc(var(--radius)+6px)] border p-7 ${
                  plan.featured
                    ? "border-primary bg-foreground text-background"
                    : "border-border bg-card"
                }`}
              >
                {plan.featured && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">
                    Most booked
                  </span>
                )}
                <h3 className="text-xl font-black tracking-tight">{plan.name}</h3>
                <p className={`mt-1 text-sm ${plan.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.blurb}
                </p>
                <p className="mt-6 text-5xl font-black tracking-tight tabular-nums">
                  ${price}k
                  <span className={`ml-1 text-base font-medium ${plan.featured ? "text-background/60" : "text-muted-foreground"}`}>
                    /{annual ? "yr" : "mo"}
                  </span>
                </p>

                <ul className="mt-6 grid gap-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className={`size-4 shrink-0 ${plan.featured ? "text-primary" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={`mt-7 rounded-full px-5 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  Start with {plan.name}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
