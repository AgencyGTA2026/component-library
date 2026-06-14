"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const POINTS = ["Free, no-obligation quote", "Licensed & insured", "Same-week scheduling"]

/**
 * Form-capture hero — headline + benefits beside a lead form, so the
 * primary action is above the fold. Converts better than a hero that
 * only links to a contact page. Wire onSubmit to your CRM/email.
 */
export function HeroFormCapture() {
  const [sent, setSent] = React.useState(false)

  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <span className="flex gap-0.5 text-accent-foreground">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </span>
            <span className="text-muted-foreground">Rated 4.9 by 600+ neighbors</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Your project, done right the first time.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Tell us what you need and we&apos;ll send a clear, fixed quote — no
            pressure, no surprise fees.
          </p>
          <ul className="mt-7 grid gap-2 sm:grid-cols-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border bg-card p-6 shadow-xl sm:p-8"
        >
          {sent ? (
            <div className="py-10 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="size-7" />
              </span>
              <h2 className="mt-4 text-xl font-semibold">Request received</h2>
              <p className="mt-2 text-sm text-muted-foreground">We&apos;ll text you a quote within one business day.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <p className="text-lg font-semibold">Get your free quote</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Name" required />
                <Input type="tel" placeholder="Phone" required />
              </div>
              <Input type="email" placeholder="Email" required />
              <Input placeholder="What do you need done?" />
              <Button type="submit" size="lg" className="w-full">Get my free quote</Button>
              <p className="text-center text-xs text-muted-foreground">No spam. We never share your info.</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
