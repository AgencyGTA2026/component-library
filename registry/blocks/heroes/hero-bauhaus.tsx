"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

/**
 * Bauhaus hero — a heavy slab headline beside a composition of primary shapes.
 */
export function HeroBauhaus() {
  return (
    <section className="overflow-hidden border-b-4 border-foreground bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
        <div className="border-foreground px-5 py-16 sm:px-8 sm:py-20 lg:border-r-4">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">Werkbund · Est. 1919</p>
          <h1 className="mt-8 text-[clamp(2.75rem,8vw,6rem)] font-black leading-[0.88] tracking-tighter uppercase">
            Form
            <br />
            follows
            <br />
            <span className="bg-primary px-2 text-primary-foreground">function.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            A school of design where the circle, the square, and the triangle do the talking. Learn
            to make things that work — and look like it.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="#"
              className="inline-flex items-center gap-2 border-2 border-foreground bg-secondary px-7 py-3.5 text-sm font-black uppercase text-secondary-foreground transition-colors hover:bg-foreground"
            >
              Apply now <ArrowRight className="size-4" />
            </Link>
            <Link href="#" className="text-sm font-bold uppercase underline decoration-2 underline-offset-4">
              See the work
            </Link>
          </div>
        </div>

        <div className="relative grid min-h-[320px] place-items-center bg-accent p-10 lg:min-h-full">
          <div className="relative size-56 sm:size-72">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
              className="absolute left-0 top-0 size-32 rounded-full bg-primary sm:size-40"
            />
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="absolute bottom-0 right-0 size-28 bg-secondary sm:size-36"
            />
            <motion.span
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              aria-hidden
              className="absolute bottom-6 left-10 h-0 w-0 border-x-[28px] border-b-[48px] border-x-transparent border-b-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
