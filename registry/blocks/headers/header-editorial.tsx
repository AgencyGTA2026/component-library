"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Journal", href: "#journal" },
]

/**
 * Editorial header — hairline utility bar with mono micro-details, an
 * oversized serif wordmark row, and underline-reveal navigation.
 */
export function HeaderEditorial() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="border-b bg-background text-foreground">
      <div className="flex items-center justify-between border-b px-5 py-1.5 font-mono text-[11px] tracking-widest uppercase text-muted-foreground sm:px-8">
        <span>Est. 2014 — Portland, OR</span>
        <span className="hidden items-center gap-2 sm:flex">
          <span className="size-1.5 rounded-full bg-primary" />
          Booking for Q3
        </span>
      </div>

      <div className="flex items-end justify-between px-5 pt-5 pb-4 sm:px-8">
        <Link href="#" className="font-serif text-3xl leading-none tracking-tight sm:text-4xl">
          Harbor<span className="italic text-primary">&amp;</span>Pine
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative pb-1 text-sm tracking-wide"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Button asChild variant="outline" className="rounded-none border-foreground">
            <Link href="#contact">
              Start a project
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t md:hidden">
          {NAV.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b px-5 py-4 font-serif text-2xl"
            >
              {item.label}
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between bg-primary px-5 py-4 font-serif text-2xl text-primary-foreground"
          >
            Start a project
            <ArrowUpRight className="size-5" />
          </Link>
        </nav>
      )}
    </header>
  )
}
