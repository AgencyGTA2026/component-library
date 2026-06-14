"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Noir parallax — a serif statement band whose gold glow drifts on scroll.
 */
export function ParallaxNoir() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"])
  const glow = useTransform(scrollYProgress, [0, 1], ["20%", "80%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3])

  return (
    <section
      ref={ref}
      className="relative grid min-h-[460px] place-items-center overflow-hidden border-y border-border bg-background px-5 py-24 text-foreground"
    >
      <motion.div
        aria-hidden
        style={{ top: glow, opacity }}
        className="pointer-events-none absolute left-1/2 size-[60vw] max-w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,164,90,0.18),transparent_65%)]"
      />
      <motion.div style={{ y }} className="relative max-w-3xl text-center">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">Maison Aurum</p>
        <p className="mt-6 font-serif text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-balance">
          We do not follow the season. We outlast it.
        </p>
      </motion.div>
    </section>
  )
}
