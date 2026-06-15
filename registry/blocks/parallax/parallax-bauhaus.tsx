"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Bauhaus parallax — a statement band where primary shapes drift on scroll.
 */
export function ParallaxBauhaus() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const y1 = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <section
      ref={ref}
      className="relative grid min-h-[440px] place-items-center overflow-hidden border-b-4 border-foreground bg-accent px-5 py-20 text-foreground"
    >
      <motion.span style={{ y: y1 }} aria-hidden className="pointer-events-none absolute left-[8%] top-10 size-28 rounded-full bg-primary" />
      <motion.span style={{ y: y2, rotate }} aria-hidden className="pointer-events-none absolute right-[10%] bottom-10 size-24 bg-secondary" />
      <motion.span
        style={{ y: y2 }}
        aria-hidden
        className="pointer-events-none absolute left-[18%] bottom-12 h-0 w-0 border-x-[26px] border-b-[46px] border-x-transparent border-b-foreground"
      />

      <div className="relative max-w-3xl text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase">Werkbund Manifesto</p>
        <h2 className="mt-4 text-[clamp(2rem,7vw,5rem)] font-black leading-[0.92] tracking-tighter uppercase">
          Less, but better.
        </h2>
      </div>
    </section>
  )
}
