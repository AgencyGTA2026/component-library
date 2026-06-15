"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"

const LINKS = ["Console", "Modules", "Pricing", "Docs"]

/**
 * Cyber header — a glowing mono nav bar with a cyan status dot.
 */
export function HeaderCyber() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="border-b border-primary/30 bg-background text-foreground shadow-[0_1px_0_0_rgba(34,211,238,0.4)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center border border-primary/50 bg-primary/10 text-primary shadow-[0_0_12px_rgba(34,211,238,0.5)]">
            <Terminal className="size-4" />
          </span>
          <span className="font-mono text-lg font-bold tracking-[0.15em] uppercase">Nexen</span>
          <span className="ml-1 size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-primary">
              {l}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden border border-primary bg-primary/10 px-5 py-2 font-mono text-xs tracking-[0.2em] uppercase text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_16px_rgba(34,211,238,0.6)] sm:block"
          >
            Jack in
          </Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="text-primary md:hidden">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid border-t border-primary/20 md:hidden">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="border-b border-primary/10 px-5 py-3 font-mono text-xs tracking-[0.2em] uppercase last:border-b-0 hover:text-primary">
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
