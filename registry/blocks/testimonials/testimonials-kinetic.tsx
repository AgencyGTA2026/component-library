"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Quote } from "lucide-react"

const QUOTES = [
  { body: "They turned a dry product update into the thing everyone shared internally.", who: "Priya N.", role: "VP Brand, Lattice" },
  { body: "The title sequence got applause at the premiere. Actual applause.", who: "Marcus B.", role: "Director, Field Films" },
  { body: "Fastest turnaround we've had — and the most on-brand.", who: "Dana R.", role: "Head of Design, Plume" },
  { body: "Every frame felt deliberate. You can tell they sweat the easing.", who: "Theo K.", role: "Founder, Cadence" },
  { body: "Our launch video doubled completion rate over the old one.", who: "Sofia L.", role: "Growth, Northwind" },
]

function Row({ reverse }: { reverse?: boolean }) {
  const reduce = useReducedMotion()
  const [paused, setPaused] = React.useState(false)
  return (
    <div
      className="flex overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        animate={reduce || paused ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-5 pr-5"
      >
        {[...QUOTES, ...QUOTES].map((q, i) => (
          <figure
            key={i}
            className="w-[320px] shrink-0 rounded-[calc(var(--radius)+4px)] border border-border bg-card p-6"
          >
            <Quote className="size-6 text-primary" />
            <blockquote className="mt-3 font-medium leading-relaxed">{q.body}</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-bold">{q.who}</span>{" "}
              <span className="text-muted-foreground">· {q.role}</span>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  )
}

/**
 * Kinetic testimonials — two marquee rows of quote cards drifting in opposite
 * directions. Hover pauses the row under the cursor.
 */
export function TestimonialsKinetic() {
  return (
    <section className="overflow-hidden bg-secondary py-20 text-foreground">
      <div className="mx-auto mb-10 max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-2xl text-[clamp(1.9rem,5vw,3rem)] font-black leading-tight tracking-tight">
          Teams keep coming back for the motion.
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
