"use client"

import * as React from "react"
import { ArrowRight, X } from "lucide-react"

/**
 * Announcement bar — a dismissible top strip for promos, launches, or
 * seasonal offers. Brutal by default; recolors with any theme.
 */
export function AnnouncementBar() {
  const [open, setOpen] = React.useState(true)
  if (!open) return null

  return (
    <div className="relative bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-10 py-2.5 text-center text-sm font-semibold">
        <span className="hidden rounded-full bg-accent-foreground/15 px-2 py-0.5 font-mono text-[11px] tracking-wide uppercase sm:inline">
          New
        </span>
        <span>Spring booking is open — lock in 2025 pricing through April.</span>
        <a href="#book" className="group inline-flex items-center gap-1 underline underline-offset-4">
          Book now
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute top-1/2 right-3 -translate-y-1/2 rounded p-1 transition-colors hover:bg-accent-foreground/15"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
