"use client"

import * as React from "react"
import { ArrowRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * Sticky CTA bar — a dismissible bar pinned to the bottom of the
 * viewport. Drop it once near the root; it floats above page content.
 */
export function CtaStickyBar() {
  const [open, setOpen] = React.useState(true)

  return (
    <div className="relative min-h-64 bg-background">
      {/* Demo backdrop so the bar has something to float over. */}
      <div className="px-5 py-16 text-center text-muted-foreground sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] uppercase">Page content scrolls under the bar ↓</p>
      </div>

      {open && (
        <div className="sticky bottom-0 z-50 border-t bg-card/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-3.5 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="hidden rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground sm:inline">
                Limited
              </span>
              <p className="text-sm font-medium">
                Free system tune-up with any install booked this month.
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" className="gap-1.5">
                Claim offer
                <ArrowRight className="size-4" />
              </Button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Dismiss"
                className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
