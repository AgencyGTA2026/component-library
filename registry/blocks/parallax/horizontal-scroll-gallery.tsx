"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

const CARDS = [
  { title: "Cedar Hill estate", tag: "Full landscape", hue: "from-primary/40 to-primary/10" },
  { title: "Courtyard garden", tag: "Planting design", hue: "from-accent/40 to-accent/10" },
  { title: "Poolside hardscape", tag: "Paver & stone", hue: "from-secondary to-background" },
  { title: "Native meadow", tag: "Restoration", hue: "from-primary/30 to-accent/15" },
  { title: "Rooftop terrace", tag: "Containers", hue: "from-accent/30 to-primary/10" },
]

/**
 * Horizontal scroll gallery — vertical page scroll drives a horizontal
 * pan across project cards (pinned while it scrubs). Element-targeted so
 * it animates inside the preview iframe.
 */
export function HorizontalScrollGallery() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"])

  return (
    <section ref={ref} className="relative h-[300vh] bg-background text-foreground">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mb-8 flex items-end justify-between px-5 sm:px-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Selected work
            </p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
              Scroll to wander the portfolio.
            </h2>
          </div>
          <ArrowRight className="hidden size-7 text-muted-foreground sm:block" />
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-5 sm:px-8">
          {CARDS.map((c) => (
            <article key={c.title} className="group w-[80vw] shrink-0 sm:w-[48vw] lg:w-[34vw]">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border bg-gradient-to-br ${c.hue}`}>
                <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl tracking-tight">{c.title}</h3>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
