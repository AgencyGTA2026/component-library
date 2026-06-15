"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const LINKS = ["Work", "School", "Press", "Shop"]

/**
 * Bauhaus header — a geometric logo mark beside heavy nav over a thick keyline.
 */
export function HeaderBauhaus() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="border-b-4 border-foreground bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex" aria-hidden>
            <span className="size-6 rounded-full bg-primary" />
            <span className="size-6 bg-accent" />
            <span className="size-6 rounded-bl-full bg-secondary" />
          </span>
          <span className="text-xl font-black tracking-tight uppercase">Werkbund</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="text-sm font-bold tracking-wide uppercase transition-colors hover:text-primary">
              {l}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden border-2 border-foreground bg-primary px-5 py-2 text-sm font-black uppercase text-primary-foreground transition-colors hover:bg-secondary sm:block"
          >
            Enrol
          </Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="md:hidden">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid border-t-2 border-foreground md:hidden">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="border-b-2 border-foreground px-5 py-3 text-sm font-black uppercase last:border-b-0 hover:bg-accent">
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
