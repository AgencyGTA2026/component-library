"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"

const ROWS = [
  {
    kicker: "01 — Discovery",
    title: "We pin down the feeling first.",
    body: "Before a single keyframe, we agree on tone, pacing, and the one moment people should remember.",
    points: ["Moodboards & motion references", "Tone and tempo workshop", "Shot-by-shot direction"],
  },
  {
    kicker: "02 — Design",
    title: "Frames worth pausing on.",
    body: "Every still is composed as if it were the poster — type, color, and rhythm locked before animation.",
    points: ["Style frames & boards", "Type and color systems", "Sound-led timing"],
  },
  {
    kicker: "03 — Motion",
    title: "Then we make it move.",
    body: "Springs, eases, and hand-tuned curves — animation that feels intentional, never templated.",
    points: ["Hand-tuned easing", "2D & 3D animation", "Final grade & delivery"],
  },
]

/**
 * Kinetic feature — alternating rows that slide in from opposite sides on scroll.
 */
export function FeatureKinetic() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-secondary px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-5xl space-y-16">
        {ROWS.map((row, i) => {
          const fromLeft = i % 2 === 0
          return (
            <motion.div
              key={row.kicker}
              initial={reduce ? undefined : { opacity: 0, x: fromLeft ? -60 : 60 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              className={`grid items-center gap-8 sm:grid-cols-2 ${fromLeft ? "" : "sm:[&>*:first-child]:order-2"}`}
            >
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{row.kicker}</p>
                <h3 className="mt-3 text-[clamp(1.6rem,4vw,2.4rem)] font-black leading-tight tracking-tight">
                  {row.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{row.body}</p>
              </div>
              <ul className="grid gap-3 rounded-[calc(var(--radius)+4px)] border border-border bg-card p-6">
                {row.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 font-medium">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
