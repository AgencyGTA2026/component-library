"use client"

import * as React from "react"
import { Check, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Newsletter CTA card — a rounded, gradient-edged card for seasonal tips
 * and offers. Lighter-weight than a full footer CTA. Wire to your ESP.
 */
export function CtaNewsletterCard() {
  const [email, setEmail] = React.useState("")
  const [done, setDone] = React.useState(false)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border bg-card">
        <div className="grid items-center gap-6 p-8 sm:grid-cols-[auto_1fr] sm:p-10">
          <span className="grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <Mail className="size-7" />
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-balance">
              Seasonal tips, the occasional deal.
            </h2>
            <p className="mt-2 text-muted-foreground">
              One short email a month to help you stay ahead of repairs. No spam, unsubscribe anytime.
            </p>

            {done ? (
              <p className="mt-5 flex items-center gap-2 font-medium text-primary">
                <Check className="size-5" /> You&apos;re subscribed — talk soon.
              </p>
            ) : (
              <form
                className="mt-5 flex max-w-md flex-col gap-2 sm:flex-row"
                onSubmit={(e) => { e.preventDefault(); if (/.+@.+\..+/.test(email)) setDone(true) }}
              >
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="h-11" />
                <Button type="submit" size="lg" className="shrink-0">Subscribe</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
