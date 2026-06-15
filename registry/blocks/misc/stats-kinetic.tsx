"use client"

import * as React from "react"
import { motion, useInView, useReducedMotion, useSpring, useTransform } from "framer-motion"

const STATS = [
  { to: 240, suffix: "+", label: "Projects shipped" },
  { to: 19, suffix: "", label: "Awards & features" },
  { to: 98, suffix: "%", label: "Client return rate" },
  { to: 12, suffix: "yrs", label: "In motion" },
]

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()
  const spring = useSpring(0, { stiffness: 55, damping: 18 })
  const text = useTransform(spring, (v) => `${Math.round(v)}${suffix}`)

  React.useEffect(() => {
    if (!inView) return
    if (reduce) spring.jump(to)
    else spring.set(to)
  }, [inView, reduce, spring, to])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {text}
    </motion.span>
  )
}

/**
 * Kinetic stats — four numbers that count up when scrolled into view.
 */
export function StatsKinetic() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border-t-2 border-primary pt-5"
          >
            <p className="text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-none tracking-tight">
              <CountUp to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
