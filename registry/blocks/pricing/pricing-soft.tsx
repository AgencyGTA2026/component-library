"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    name: "Seedling",
    monthly: 0,
    blurb: "For trying things gently.",
    features: ["3 habits", "Gentle streaks", "Weekly letter"],
    featured: false,
    cta: "Start free",
  },
  {
    name: "Grove",
    monthly: 8,
    blurb: "The full Driftwell experience.",
    features: [
      "Unlimited habits",
      "Quiet hours & sleep stories",
      "Shared circles (5 people)",
      "Yearly almanac",
    ],
    featured: true,
    cta: "Start 30-day trial",
  },
  {
    name: "Canopy",
    monthly: 16,
    blurb: "For families and small teams.",
    features: ["Everything in Grove", "Up to 12 members", "Shared rituals", "Priority support"],
    featured: false,
    cta: "Start 30-day trial",
  },
]

/**
 * Soft pricing — rounded cards with a monthly/annual toggle (annual
 * saves 20%) and a lifted, glowing featured plan.
 */
export function PricingSoft() {
  const [annual, setAnnual] = React.useState(true)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="font-medium text-primary">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Less than a fancy latte habit.
          </h2>
        </div>

        <div className="mb-12 flex items-center justify-center gap-3 text-sm">
          <span className={cn(!annual && "font-semibold")}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 rounded-full bg-secondary transition-colors"
          >
            <span
              className={cn(
                "absolute top-1 left-1 size-5 rounded-full bg-primary transition-transform",
                annual && "translate-x-5"
              )}
            />
          </button>
          <span className={cn(annual && "font-semibold")}>
            Annual <span className="text-primary">−20%</span>
          </span>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-3">
          {PLANS.map((plan) => {
            const price = annual ? plan.monthly * 0.8 : plan.monthly
            return (
              <article
                key={plan.name}
                className={cn(
                  "relative rounded-[2rem] border bg-card p-8",
                  plan.featured
                    ? "border-primary/40 shadow-2xl shadow-primary/15 md:-translate-y-4"
                    : "shadow-sm"
                )}
              >
                {plan.featured && (
                  <Badge className="absolute -top-3 left-8 rounded-full">
                    <Sparkles className="size-3" />
                    Most loved
                  </Badge>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
                <p className="mt-5">
                  <span className="text-4xl font-semibold tracking-tight">
                    ${price % 1 === 0 ? price : price.toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground"> /mo</span>
                </p>
                {annual && plan.monthly > 0 && (
                  <p className="mt-1 text-xs text-primary">
                    Billed ${Math.round(price * 12)} yearly
                  </p>
                )}
                <ul className="mt-6 space-y-2.5 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  variant={plan.featured ? "default" : "outline"}
                  className="mt-8 w-full rounded-full"
                >
                  <Link href="#start">{plan.cta}</Link>
                </Button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
