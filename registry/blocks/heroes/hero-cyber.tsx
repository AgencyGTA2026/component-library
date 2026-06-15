"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"

/**
 * Cyber hero — a neon headline over a scanline grid with glowing CTAs.
 */
export function HeroCyber() {
  return (
    <section className="relative overflow-hidden border-b border-primary/20 bg-background text-foreground">
      {/* grid + glow backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 size-[60vw] max-w-[760px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,0,229,0.18),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.25em] uppercase text-accent shadow-[0_0_16px_rgba(255,0,229,0.4)]"
        >
          <Zap className="size-3.5" /> v3.0 — neural link live
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-[clamp(2.75rem,9vw,6rem)] font-black leading-[0.9] tracking-tight"
        >
          Run the net at the
          <br />
          <span className="bg-[linear-gradient(90deg,#22d3ee,#ff00e5)] bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(34,211,238,0.4)]">
            speed of thought.
          </span>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
          Nexen is the neural OS for netrunners. Compile intent, deploy daemons, own the grid.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-primary bg-primary px-7 py-3.5 font-mono text-sm tracking-[0.15em] uppercase text-primary-foreground transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.7)]"
          >
            Jack in <ArrowRight className="size-4" />
          </Link>
          <Link href="#" className="border border-primary/40 px-7 py-3.5 font-mono text-sm tracking-[0.15em] uppercase text-primary transition-colors hover:bg-primary/10">
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  )
}
