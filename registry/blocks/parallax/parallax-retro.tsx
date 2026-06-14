"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Retro parallax — a statement band whose Memphis shapes drift on scroll.
 */
export function ParallaxRetro() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const y1 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <section
      ref={ref}
      className="relative grid min-h-[440px] place-items-center overflow-hidden border-y-2 border-foreground bg-primary px-5 py-20 text-primary-foreground"
    >
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute -left-6 top-10 size-32 rounded-full border-[10px] border-accent"
        aria-hidden
      />
      <motion.div
        style={{ y: y2, rotate }}
        className="pointer-events-none absolute right-[8%] bottom-8 size-24 rounded-2xl bg-secondary"
        aria-hidden
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute left-[14%] bottom-12 size-6 rounded-full bg-accent"
        aria-hidden
      />

      <div className="relative max-w-3xl text-center">
        <p className="text-sm font-black tracking-[0.25em] uppercase">Since 2019</p>
        <h2 className="mt-4 text-[clamp(2.25rem,7vw,5rem)] font-black leading-[0.95] tracking-tight">
          Loud cans, good vibes, zero compromise.
        </h2>
      </div>
    </section>
  )
}
