"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Parallax banner — a statement band whose background drifts opposite to
 * the foreground as it passes through the viewport. Element-targeted
 * scroll; swap the gradient for a fixed photo.
 */
export function ParallaxBanner() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const textX = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"])

  return (
    <section
      ref={ref}
      className="relative flex h-[70vh] items-center overflow-hidden border-y-4 border-foreground bg-foreground text-background"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-125 bg-[linear-gradient(115deg,color-mix(in_oklab,var(--primary)_70%,#000)_0%,var(--foreground)_55%,color-mix(in_oklab,var(--accent)_50%,#000)_100%)] opacity-90"
      />
      <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.25)_0,rgba(255,255,255,0.25)_1px,transparent_1px,transparent_14px)]" />

      <motion.div style={{ x: textX }} className="relative w-full px-5 sm:px-8">
        <p className="mx-auto max-w-5xl text-[clamp(2rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tighter uppercase">
          Built to be remembered, not just visited.
        </p>
      </motion.div>
    </section>
  )
}
