"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Cyber parallax — a neon statement over a perspective grid that drifts on scroll.
 */
export function ParallaxCyber() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const grid = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.6, 0.25])

  return (
    <section
      ref={ref}
      className="relative grid min-h-[460px] place-items-center overflow-hidden border-b border-primary/20 bg-background px-5 py-24 text-foreground"
    >
      <motion.div
        aria-hidden
        style={{ backgroundPositionY: grid }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
      />
      <motion.div
        aria-hidden
        style={{ opacity: glow }}
        className="pointer-events-none absolute left-1/2 top-1/2 size-[55vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,0,229,0.22),transparent_65%)]"
      />

      <div className="relative max-w-3xl text-center">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// nexen.manifest</p>
        <h2 className="mt-5 text-[clamp(2rem,7vw,4.75rem)] font-black leading-[0.95] tracking-tight">
          The grid belongs to whoever moves fastest.
        </h2>
      </div>
    </section>
  )
}
