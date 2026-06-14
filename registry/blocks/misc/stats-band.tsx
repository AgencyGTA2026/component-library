"use client"

import * as React from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

const STATS = [
  { value: 140, suffix: "+", label: "Sites launched" },
  { value: 98, suffix: "", label: "Avg. Lighthouse score" },
  { value: 27, suffix: "M", prefix: "$", label: "Client revenue influenced" },
  { value: 9, suffix: "", label: "Industry awards" },
]

/**
 * Stats band — numbers count up with a spring when scrolled into view.
 * Works in any vibe; pairs well under a hero or above a footer.
 */
export function StatsBand() {
  return (
    <section className="border-y bg-background px-5 py-14 text-foreground sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="text-center md:border-l md:first:border-l-0">
            <CountUp
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              delay={i * 0.1}
            />
            <p className="mt-2 font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CountUp({
  value,
  prefix = "",
  suffix = "",
  delay = 0,
}: {
  value: number
  prefix?: string
  suffix?: string
  delay?: number
}) {
  const ref = React.useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const spring = useSpring(0, { stiffness: 60, damping: 18 })
  const text = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`)

  React.useEffect(() => {
    if (inView) {
      const t = setTimeout(() => spring.set(value), delay * 1000)
      return () => clearTimeout(t)
    }
  }, [inView, spring, value, delay])

  return (
    <motion.p ref={ref} className="font-serif text-5xl tracking-tight text-primary sm:text-6xl">
      {text}
    </motion.p>
  )
}
