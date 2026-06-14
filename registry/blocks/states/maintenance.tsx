"use client"

import { Clock, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Maintenance — a scheduled-downtime / be-right-back screen with an ETA
 * and an optional notify-me field. Loud brutal treatment by default.
 */
export function Maintenance() {
  return (
    <section className="grid min-h-[80vh] place-items-center border-y-4 border-foreground bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto grid size-16 -rotate-3 place-items-center border-2 border-foreground bg-accent text-accent-foreground shadow-[5px_5px_0_0_var(--foreground)]">
          <Wrench className="size-8" />
        </span>
        <h1 className="mt-8 text-[clamp(2.5rem,8vw,5rem)] font-black leading-[0.9] tracking-tighter uppercase">
          Down for a tune-up.
        </h1>
        <p className="mx-auto mt-5 max-w-md font-mono text-sm">
          We&apos;re making things faster and better. The site will be back
          shortly — thanks for your patience.
        </p>

        <div className="mt-7 inline-flex items-center gap-2 border-2 border-foreground bg-card px-4 py-2 font-mono text-sm font-bold">
          <Clock className="size-4" />
          Estimated back by 3:00 PM EST
        </div>

        <form className="mx-auto mt-8 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Email me when it's back" className="rounded-none border-2 border-foreground" />
          <Button type="submit" className="shrink-0 rounded-none border-2 border-foreground">Notify me</Button>
        </form>

        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Urgent? Call us at (555) 123-4567.
        </p>
      </div>
    </section>
  )
}
