"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Studio parallax — a calm serif statement with soft blush washes drifting on scroll.
 */
export function ParallaxStudio() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"])

  return (
    <section
      ref={ref}
      className="relative grid min-h-[440px] place-items-center overflow-hidden bg-secondary px-6 py-24 text-foreground"
    >
      <motion.div
        aria-hidden
        style={{ y: y1 }}
        className="pointer-events-none absolute -left-20 top-0 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(201,142,134,0.28),transparent_65%)]"
      />
      <motion.div
        aria-hidden
        style={{ y: y2 }}
        className="pointer-events-none absolute -right-16 bottom-0 size-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,194,184,0.5),transparent_65%)]"
      />

      <div className="relative max-w-3xl text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Our philosophy</p>
        <h2 className="mt-5 font-serif text-[clamp(2rem,6vw,4.25rem)] leading-[1.08] tracking-tight text-balance">
          Strength is quiet. So is the way we teach it.
        </h2>
      </div>
    </section>
  )
}
