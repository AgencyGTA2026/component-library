"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const LINKS = ["Collections", "Bespoke", "Maison", "Journal"]

/**
 * Noir header — a hairline utility bar over a serif wordmark and quiet nav.
 */
export function HeaderNoir() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="border-b border-border bg-background text-foreground">
      <div className="flex items-center justify-center border-b border-border px-5 py-2 text-center font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        Complimentary engraving · Worldwide delivery
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <nav className="hidden items-center gap-8 md:flex md:flex-1">
          {LINKS.slice(0, 2).map((l) => (
            <Link key={l} href="#" className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </Link>
          ))}
        </nav>

        <Link href="#" className="font-serif text-2xl tracking-[0.2em] uppercase md:flex-1 md:text-center">
          Aurum
        </Link>

        <div className="flex items-center justify-end gap-8 md:flex-1">
          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.slice(2).map((l) => (
              <Link key={l} href="#" className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                {l}
              </Link>
            ))}
          </nav>
          <Link href="#" className="hidden border-b border-primary pb-0.5 text-sm tracking-wide text-primary sm:block">
            Enquire
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-border px-5 py-4 md:hidden">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="py-2 text-sm tracking-wide text-muted-foreground hover:text-foreground">
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
