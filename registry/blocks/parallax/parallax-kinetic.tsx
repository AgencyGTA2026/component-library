"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Kinetic parallax — a statement whose two lines slide past each other in opposite
 * directions as the section scrolls through the viewport.
 */
export function ParallaxKinetic() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const lineA = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"])
  const lineB = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"])
  const accent = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"])

  return (
    <section
      ref={ref}
      className="relative grid min-h-[420px] place-items-center overflow-hidden bg-foreground px-5 py-24 text-background"
    >
      <div className="w-full max-w-6xl text-center font-black uppercase leading-[0.85] tracking-tight">
        <motion.p style={{ x: lineA }} className="text-[clamp(2.5rem,12vw,9rem)] whitespace-nowrap">
          We don&apos;t do
        </motion.p>
        <motion.p
          style={{ x: lineB }}
          className="text-[clamp(2.5rem,12vw,9rem)] whitespace-nowrap text-primary"
        >
          static.
        </motion.p>
      </div>

      <motion.div
        aria-hidden
        style={{ x: accent }}
        className="pointer-events-none absolute -bottom-6 left-1/2 h-2 w-[60%] -translate-x-1/2 rounded-full bg-accent"
      />
    </section>
  )
}
