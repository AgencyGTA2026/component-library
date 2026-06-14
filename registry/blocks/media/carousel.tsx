"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

import { cn } from "@/lib/utils"

const SLIDES = [
  { title: "Summer collection", sub: "Linen, lightweight, effortless", hue: "from-primary/40 to-primary/10" },
  { title: "The travel edit", sub: "Wrinkle-resistant essentials", hue: "from-accent/35 to-accent/10" },
  { title: "Workwear, reimagined", sub: "From desk to dinner", hue: "from-secondary to-background" },
  { title: "Weekend layers", sub: "Soft knits for cooler days", hue: "from-primary/25 to-accent/10" },
]

/**
 * Carousel — a one-at-a-time slideshow with arrows, dot indicators, and
 * autoplay you can pause. Loops; swap the gradient slides for images.
 */
export function Carousel() {
  const [active, setActive] = React.useState(0)
  const [playing, setPlaying] = React.useState(true)

  const go = (dir: number) => setActive((a) => (a + dir + SLIDES.length) % SLIDES.length)

  React.useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 3500)
    return () => clearInterval(id)
  }, [playing])

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            {SLIDES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={false}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className={cn("absolute inset-0 flex flex-col justify-end bg-gradient-to-br p-8 sm:p-12", s.hue)}
                aria-hidden={active !== i}
              >
                <motion.div
                  animate={{ y: active === i ? 0 : 16, opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/70">
                    {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-5xl">{s.title}</h3>
                  <p className="mt-1 text-foreground/80">{s.sub}</p>
                </motion.div>
              </motion.div>
            ))}

            <button onClick={() => go(-1)} aria-label="Previous slide" className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-background">
              <ChevronLeft className="size-5" />
            </button>
            <button onClick={() => go(1)} aria-label="Next slide" className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-background">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  active === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
          <button
            onClick={() => setPlaying((p) => !p)}
            className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  )
}
