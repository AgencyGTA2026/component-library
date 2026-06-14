import Link from "next/link"
import { ArrowRight, ShieldCheck, Sparkles, Timer } from "lucide-react"

import { Button } from "@/components/ui/button"

const REASSURANCES = [
  { icon: Timer, label: "Set up in 4 minutes" },
  { icon: ShieldCheck, label: "No card required" },
  { icon: Sparkles, label: "Cancel anytime" },
]

/**
 * Soft CTA — a glowing gradient panel with centered copy and a
 * reassurance row that melts away objections.
 */
export function CtaSoft() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border bg-card px-7 py-16 text-center shadow-xl shadow-primary/10 sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-28 -left-16 size-64 rounded-full bg-accent/70 blur-3xl" />
          <div className="absolute -right-20 -bottom-24 size-64 rounded-full bg-secondary blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Tonight, wind down a little earlier.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Start your 30-day trial and let Driftwell take it from here —
            gently, as always.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-10">
            <Link href="#start">
              Start free
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {REASSURANCES.map((r) => (
              <span key={r.label} className="flex items-center gap-2">
                <r.icon className="size-4 text-primary" />
                {r.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
