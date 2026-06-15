"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Play } from "lucide-react"

const LINKS = ["Work", "Studio", "Motion", "Contact"]

/**
 * Kinetic header — a bar that compresses on scroll, with underline-sweep nav links.
 */
export function HeaderKinetic() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12))

  return (
    <header className="sticky top-0 z-40 bg-background/85 text-foreground backdrop-blur-md">
      <motion.div
        animate={{ paddingTop: scrolled ? 10 : 20, paddingBottom: scrolled ? 10 : 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="mx-auto flex max-w-6xl items-center justify-between border-b border-border px-5 sm:px-8"
      >
        <Link href="#" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-[var(--radius)] bg-primary text-primary-foreground">
            <Play className="size-4" />
          </span>
          <span className="text-xl font-black tracking-tight uppercase">Tempo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l}
              href="#"
              className="group relative text-sm font-semibold text-foreground"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 sm:block"
          >
            Start a project
          </Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="md:hidden">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </motion.div>

      {open && (
        <nav className="grid border-b border-border md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l}
              href="#"
              className="border-b border-border px-5 py-3 text-sm font-semibold last:border-b-0"
            >
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
