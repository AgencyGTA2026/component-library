"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const QUOTES = [
  {
    quote:
      "They asked harder questions than our board did. The site that came out the other side finally sounds like us.",
    name: "Imogen Hale",
    role: "Founder, Field Notes Coffee",
  },
  {
    quote:
      "Every agency promises taste. This one has opinions — and the work to back them up. Best money we spent all year.",
    name: "Marcus Webb",
    role: "CEO, Webb & Sons Joinery",
  },
  {
    quote:
      "Our old site explained what we do. The new one makes people want it. That difference doubled our inbound.",
    name: "Priya Anand",
    role: "CMO, Lantern Legal",
  },
]

/**
 * Editorial testimonials — one pull-quote at a time, typeset large with
 * a hanging quotation mark, paged by arrows with a crossfade.
 */
export function TestimonialsEditorial() {
  const [index, setIndex] = React.useState(0)
  const q = QUOTES[index]

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between border-b pb-4">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Kind words
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
          </p>
        </div>

        <div className="relative min-h-[16rem] py-12 sm:min-h-[14rem]">
          <span
            aria-hidden
            className="absolute -top-2 -left-2 font-serif text-8xl leading-none text-primary/25 select-none sm:-left-10"
          >
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="font-serif text-2xl leading-snug text-balance sm:text-4xl">
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {q.name} — {q.role}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 border-t pt-5">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length)}
            aria-label="Previous quote"
            className="grid size-11 place-items-center border transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % QUOTES.length)}
            aria-label="Next quote"
            className="grid size-11 place-items-center border transition-colors hover:bg-foreground hover:text-background"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
