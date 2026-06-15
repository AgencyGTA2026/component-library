"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const LINKS = ["Classes", "Schedule", "Studio", "Journal"]

/**
 * Studio header — an airy serif wordmark with quiet sans nav and a blush CTA.
 */
export function HeaderStudio() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="border-b border-border bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="#" className="font-serif text-2xl tracking-tight">
          Méthode
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:block"
          >
            Book a class
          </Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="text-foreground md:hidden">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-border px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="py-2 text-sm text-muted-foreground hover:text-foreground">
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
