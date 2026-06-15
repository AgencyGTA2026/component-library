"use client"

import * as React from "react"
import { motion, useInView, useReducedMotion, useSpring, useTransform } from "framer-motion"
import { Film, Layers, Gauge, Wand2 } from "lucide-react"

/** Counts a number up from 0 once it scrolls into view. */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()
  const spring = useSpring(0, { stiffness: 60, damping: 18 })
  const text = useTransform(spring, (v) => `${Math.round(v)}${suffix}`)

  React.useEffect(() => {
    if (!inView) return
    if (reduce) spring.jump(to)
    else spring.set(to)
  }, [inView, reduce, spring, to])

  return <motion.span ref={ref}>{text}</motion.span>
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 28, delay: i * 0.08 },
  }),
}

/**
 * Kinetic bento — a capability grid that springs in on scroll, lifts on hover, and
 * features one live count-up metric.
 */
export function BentoKinetic() {
  const reduce = useReducedMotion()

  const cells = [
    {
      span: "sm:col-span-2 sm:row-span-2",
      body: (
        <>
          <Film className="size-7 text-primary" />
          <h3 className="mt-auto text-3xl font-black tracking-tight">Brand films</h3>
          <p className="mt-2 text-muted-foreground">
            From script to final grade — story-led films built to move.
          </p>
        </>
      ),
    },
    {
      span: "",
      body: (
        <>
          <Layers className="size-6 text-accent" />
          <p className="mt-auto text-5xl font-black tracking-tight tabular-nums">
            <CountUp to={240} suffix="+" />
          </p>
          <p className="text-sm text-muted-foreground">projects shipped</p>
        </>
      ),
    },
    {
      span: "",
      body: (
        <>
          <Gauge className="size-6 text-primary" />
          <p className="mt-auto text-5xl font-black tracking-tight tabular-nums">
            <CountUp to={18} suffix="d" />
          </p>
          <p className="text-sm text-muted-foreground">avg. turnaround</p>
        </>
      ),
    },
    {
      span: "sm:col-span-2",
      body: (
        <>
          <Wand2 className="size-6 text-accent" />
          <h3 className="mt-auto text-2xl font-black tracking-tight">Title & product motion</h3>
          <p className="mt-2 text-muted-foreground">
            Sequences, UI motion, and loops tuned frame by frame.
          </p>
        </>
      ),
    },
  ]

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-[clamp(1.9rem,5vw,3rem)] font-black leading-tight tracking-tight">
          A studio built for everything that moves.
        </h2>

        <div className="mt-10 grid auto-rows-[180px] gap-4 sm:grid-cols-3">
          {cells.map((c, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={reduce ? undefined : reveal}
              initial={reduce ? undefined : "hidden"}
              whileInView={reduce ? undefined : "show"}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={reduce ? undefined : { y: -6 }}
              className={`flex flex-col rounded-[calc(var(--radius)+4px)] border border-border bg-card p-6 ${c.span}`}
            >
              {c.body}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
