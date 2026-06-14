"use client"

import * as React from "react"
import Link from "next/link"
import { Leaf, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stories", href: "#stories" },
  { label: "Help", href: "#help" },
]

/**
 * Soft header — a floating glass pill that detaches from the page edge,
 * blurring whatever scrolls beneath it.
 */
export function HeaderSoft() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="pointer-events-none sticky top-4 z-50 px-4">
      <header className="pointer-events-auto mx-auto max-w-3xl rounded-full border bg-card/70 shadow-lg shadow-primary/5 backdrop-blur-xl">
        <div className="flex items-center justify-between py-2 pl-5 pr-2">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="size-4" />
            </span>
            Driftwell
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden rounded-full md:inline-flex">
              <Link href="#start">Start free</Link>
            </Button>
            <button
              className="grid size-9 place-items-center rounded-full hover:bg-secondary md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <nav
          className={cn(
            "grid overflow-hidden px-3 transition-all duration-300 md:hidden",
            open ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0 overflow-hidden">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-1 w-full rounded-full">
              <Link href="#start" onClick={() => setOpen(false)}>
                Start free
              </Link>
            </Button>
          </div>
        </nav>
      </header>
    </div>
  )
}
