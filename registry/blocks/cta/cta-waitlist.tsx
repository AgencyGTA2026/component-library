"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Waitlist CTA — a coming-soon capture panel with a spot counter and
 * inline success state. Wire `join` to your waitlist provider.
 */
export function CtaWaitlist() {
  const [email, setEmail] = React.useState("")
  const [joined, setJoined] = React.useState(false)
  const [error, setError] = React.useState(false)

  function join(e: React.FormEvent) {
    e.preventDefault()
    if (!/.+@.+\..+/.test(email)) {
      setError(true)
      return
    }
    // Replace with your waitlist call.
    setJoined(true)
  }

  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="inline-block -rotate-1 border-2 border-foreground bg-accent px-3 py-1 font-mono text-xs font-bold uppercase text-accent-foreground">
          Launching this fall
        </p>
        <h2 className="mt-6 text-[clamp(2.25rem,7vw,4rem)] font-black leading-[0.95] tracking-tighter uppercase">
          Get in before the doors open.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-mono text-sm">
          Join 1,800 people on the list. Early members get founder pricing and
          first dibs on onboarding slots.
        </p>

        {joined ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 border-2 border-foreground bg-accent px-5 py-4 font-bold text-accent-foreground">
            <Check className="size-5" />
            You&apos;re on the list — watch your inbox.
          </div>
        ) : (
          <form onSubmit={join} noValidate className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError(false)
              }}
              placeholder="you@company.com"
              aria-invalid={error}
              className="h-12 rounded-none border-2 border-foreground bg-background text-base"
            />
            <Button
              type="submit"
              className="h-12 shrink-0 rounded-none border-2 border-foreground bg-foreground px-7 font-black uppercase shadow-[4px_4px_0_0_var(--accent)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--accent)]"
            >
              Join the list
            </Button>
          </form>
        )}
        {error && (
          <p className="mt-2 font-mono text-xs text-destructive">
            Enter a valid email to join.
          </p>
        )}
      </div>
    </section>
  )
}
