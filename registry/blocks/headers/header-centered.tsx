"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"

const LEFT = [
  { label: "Collections", href: "#collections" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Journal", href: "#journal" },
]
const RIGHT = [
  { label: "About", href: "#about" },
  { label: "Stockists", href: "#stockists" },
  { label: "Contact", href: "#contact" },
]

/**
 * Centered header — a serif wordmark flanked by split navigation, with a
 * thin utility row above. Reads like a fashion or editorial masthead.
 */
export function HeaderCentered() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="border-b bg-background text-foreground">
      <div className="hidden justify-center border-b py-1.5 text-center font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground sm:block">
        Complimentary shipping on orders over $150
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 py-5 sm:px-8">
        <nav className="hidden items-center gap-7 md:flex">
          {LEFT.map((i) => (
            <Link key={i.label} href={i.href} className="text-sm tracking-wide transition-colors hover:text-primary">
              {i.label}
            </Link>
          ))}
        </nav>

        <button className="justify-self-start md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        <Link href="#" className="justify-self-center font-serif text-2xl tracking-[0.15em] uppercase sm:text-3xl">
          Maison&nbsp;Vela
        </Link>

        <nav className="hidden items-center justify-end gap-7 md:flex">
          {RIGHT.map((i) => (
            <Link key={i.label} href={i.href} className="text-sm tracking-wide transition-colors hover:text-primary">
              {i.label}
            </Link>
          ))}
          <button aria-label="Search" className="transition-colors hover:text-primary">
            <Search className="size-4" />
          </button>
        </nav>

        <button aria-label="Search" className="justify-self-end transition-colors hover:text-primary md:hidden">
          <Search className="size-5" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t md:hidden">
          {[...LEFT, ...RIGHT].map((i) => (
            <Link key={i.label} href={i.href} onClick={() => setOpen(false)} className="border-b px-5 py-3.5 font-serif text-xl">
              {i.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
