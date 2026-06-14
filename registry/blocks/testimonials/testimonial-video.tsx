"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Pause, Play, Quote, Star } from "lucide-react"

/**
 * Video testimonial — a play-button video stage beside a pulled quote
 * and attribution. The gradient panel is a placeholder; drop in a
 * <video>/embed and drive `playing` from its events.
 */
export function TestimonialVideo() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="group relative aspect-video overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/30 via-accent/15 to-secondary shadow-lg">
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--background)_25%,transparent),transparent_60%)]" />
          <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"} className="absolute inset-0 grid place-items-center">
            <motion.span whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} className="grid size-18 place-items-center rounded-full bg-background/90 text-foreground shadow-xl backdrop-blur">
              {playing ? <Pause className="size-7" /> : <Play className="size-7 translate-x-0.5 fill-current" />}
            </motion.span>
          </button>
          <div className="absolute bottom-4 left-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium backdrop-blur">
            2:14 · Customer story
          </div>
        </div>

        <div>
          <span className="flex gap-0.5 text-accent-foreground">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-5 fill-current" />)}
          </span>
          <Quote className="mt-5 size-7 text-primary" />
          <blockquote className="mt-3 font-serif text-2xl leading-snug text-balance sm:text-3xl">
            They came out the same day, explained everything in plain English,
            and the price didn&apos;t budge from the quote. We won&apos;t call
            anyone else.
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold">Marcus &amp; Dana Reyes</p>
            <p className="text-sm text-muted-foreground">Homeowners · Maple Heights</p>
          </figcaption>
        </div>
      </div>
    </section>
  )
}
