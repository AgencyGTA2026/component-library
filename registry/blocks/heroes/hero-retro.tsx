"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

/**
 * Retro hero — Memphis squiggles, a sticker badge, and a chunky CTA.
 */
export function HeroRetro() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      {/* geometric confetti */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-12 right-[12%] size-16 rounded-full border-[6px] border-secondary" />
        <div className="absolute bottom-16 left-[8%] size-10 rotate-12 rounded-lg bg-accent" />
        <div className="absolute top-1/3 left-[18%] size-4 rounded-full bg-primary" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-accent px-4 py-1.5 text-sm font-black shadow-[3px_3px_0_0_var(--foreground)]"
        >
          <Star className="size-4 fill-foreground" />
          Now in 6 loud flavors
        </motion.span>

        <h1 className="mt-7 text-[clamp(2.75rem,9vw,6rem)] font-black leading-[0.92] tracking-tight">
          Soda that{" "}
          <span className="relative whitespace-nowrap text-primary">
            pops
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden>
              <path d="M0 6 Q 25 0 50 6 T 100 6" fill="none" stroke="var(--secondary)" strokeWidth="3" />
            </svg>
          </span>{" "}
          off the shelf.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg font-medium text-muted-foreground">
          Real fruit, wild color, zero apologies. The fridge staple your fridge has been missing.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-primary px-7 py-3.5 text-base font-black text-primary-foreground shadow-[5px_5px_0_0_var(--foreground)] transition-transform hover:-translate-y-1"
          >
            Grab a pack <ArrowRight className="size-5" />
          </Link>
          <Link href="#" className="rounded-full px-5 py-3.5 text-base font-bold underline decoration-2 underline-offset-4">
            See flavors
          </Link>
        </div>
      </div>
    </section>
  )
}
