"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

/**
 * Brutal header — sticky bar with thick borders, boxed nav cells that
 * invert on hover, and a hard-shadow CTA.
 */
export function HeaderBrutal() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-foreground bg-background text-foreground">
      <div className="flex items-stretch justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 px-5 py-4 text-xl font-black tracking-tighter uppercase"
        >
          <span className="grid size-7 place-items-center bg-foreground font-mono text-sm text-background">
            T
          </span>
          Tonne®
        </Link>

        <nav className="hidden items-stretch md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center border-l-2 border-foreground px-6 text-sm font-bold tracking-wide uppercase transition-colors hover:bg-foreground hover:text-background"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#quote"
            className="flex items-center gap-2 border-l-2 border-foreground bg-accent px-6 text-sm font-black tracking-wide uppercase text-accent-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Get a quote
            <ArrowRight className="size-4" />
          </Link>
        </nav>

        <button
          className="flex items-center border-l-2 border-foreground px-5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t-2 border-foreground md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b-2 border-foreground px-5 py-4 text-2xl font-black uppercase hover:bg-foreground hover:text-background"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#quote"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between bg-accent px-5 py-4 text-2xl font-black uppercase text-accent-foreground"
          >
            Get a quote
            <ArrowRight className="size-6" />
          </Link>
        </nav>
      )}
    </header>
  )
}
