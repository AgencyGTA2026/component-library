"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Pause, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * Video hero — centered copy over a media stage with a play/pause
 * control. The gradient "video" is a placeholder; drop in a <video> or
 * embed and drive `playing` from its events.
 */
export function HeroVideo() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm">
          <span className="flex gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </span>
          <span className="text-muted-foreground">Loved by 2,000+ studios</span>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          See it work in ninety seconds.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          No demo call, no sales script. Just press play and watch a real
          project go from brief to launch.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="rounded-full px-8">Start free</Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">Book a demo</Button>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="group relative aspect-video overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/25 via-accent/15 to-secondary shadow-xl">
          {/* Media slot — replace with a real <video>. */}
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_50%_45%,color-mix(in_oklab,var(--background)_30%,transparent),transparent_60%)]" />
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute inset-0 grid place-items-center"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="grid size-20 place-items-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur"
            >
              {playing ? (
                <Pause className="size-8" />
              ) : (
                <Play className="size-8 translate-x-0.5 fill-current" />
              )}
            </motion.span>
          </button>
          {playing && (
            <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="size-2 animate-pulse rounded-full bg-destructive" />
              Playing preview
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
