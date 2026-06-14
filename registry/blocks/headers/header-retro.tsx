"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const LINKS = ["Shop", "Flavors", "Story", "Stockists"]

/**
 * Retro header — chunky rounded pill nav with a wobbly sticker logo.
 */
export function HeaderRetro() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="bg-background px-4 py-4 text-foreground sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border-2 border-foreground bg-card px-4 py-2.5 shadow-[4px_4px_0_0_var(--foreground)] sm:px-6">
        <Link href="#" className="flex items-center gap-2">
          <span className="grid size-8 -rotate-6 place-items-center rounded-xl border-2 border-foreground bg-primary text-sm font-black text-primary-foreground">
            P
          </span>
          <span className="text-lg font-black tracking-tight">Poptone</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l}
              href="#"
              className="rounded-full px-4 py-1.5 text-sm font-bold transition-colors hover:bg-accent"
            >
              {l}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden rounded-full border-2 border-foreground bg-accent px-5 py-1.5 text-sm font-black shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 sm:block"
          >
            Order
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid size-9 place-items-center rounded-full border-2 border-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-3 grid max-w-6xl gap-1 rounded-3xl border-2 border-foreground bg-card p-3 md:hidden">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="rounded-2xl px-4 py-2.5 font-bold hover:bg-accent">
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
