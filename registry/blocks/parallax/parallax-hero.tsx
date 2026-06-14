"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

/**
 * Parallax hero — layered foreground/background drift driven by scroll
 * within the section (element-targeted, so it works inside an iframe).
 * Replace the gradient layers with real artwork.
 */
export function ParallaxHero() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div ref={ref} className="relative h-[120vh] bg-background text-foreground">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* back layer */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 scale-110 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_55%),radial-gradient(circle_at_75%_60%,color-mix(in_oklab,var(--accent)_45%,transparent),transparent_50%)]"
        />
        {/* mid layer — drifting rings */}
        <motion.div style={{ y: midY }} className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 size-72 rounded-full border border-foreground/10" />
          <div className="absolute top-1/2 right-1/4 size-96 rounded-full border border-foreground/10" />
        </motion.div>

        {/* title */}
        <motion.div
          style={{ y: titleY, opacity: fade }}
          className="relative flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Studio Vesper — Field Notes
          </p>
          <h1 className="mt-5 font-serif text-[clamp(3rem,11vw,9rem)] leading-[0.9] tracking-tight text-balance">
            Scroll into
            <br />
            <em className="text-primary">the deep.</em>
          </h1>
          <p className="mt-6 flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <ArrowDown className="size-4 animate-bounce" />
            Keep scrolling
          </p>
        </motion.div>
      </div>
    </div>
  )
}
