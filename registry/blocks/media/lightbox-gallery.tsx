"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const PHOTOS = [
  { caption: "Coastal residence", hue: "from-primary/40 to-primary/10", span: "row-span-2" },
  { caption: "Atrium detail", hue: "from-accent/35 to-accent/10", span: "" },
  { caption: "Reading nook", hue: "from-secondary to-background", span: "" },
  { caption: "Kitchen island", hue: "from-primary/25 to-accent/10", span: "" },
  { caption: "Garden terrace", hue: "from-accent/30 to-primary/10", span: "row-span-2" },
  { caption: "Stair study", hue: "from-primary/20 to-secondary", span: "" },
]

/**
 * Lightbox gallery — a masonry-ish grid that opens a fullscreen lightbox
 * with prev/next, a counter, and Escape/backdrop close. Swap gradient
 * tiles for <img> and the lightbox panel for the full-resolution source.
 */
export function LightboxGallery() {
  const [index, setIndex] = React.useState<number | null>(null)

  const go = React.useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length)),
    []
  )

  React.useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null)
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, go])

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">Portfolio</p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
            Selected interiors
          </h2>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <button
              key={p.caption}
              onClick={() => setIndex(i)}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${p.hue} ${p.span}`}
            >
              <span className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
              <span className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {p.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-foreground/80 p-4 backdrop-blur"
            onClick={() => setIndex(null)}
          >
            <button onClick={() => setIndex(null)} aria-label="Close" className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-background/10 text-background hover:bg-background/20">
              <X className="size-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous" className="absolute left-4 grid size-11 place-items-center rounded-full bg-background/10 text-background hover:bg-background/20">
              <ChevronLeft className="size-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next" className="absolute right-4 grid size-11 place-items-center rounded-full bg-background/10 text-background hover:bg-background/20">
              <ChevronRight className="size-6" />
            </button>

            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <div className={`aspect-[3/2] w-full rounded-xl bg-gradient-to-br ${PHOTOS[index].hue}`} />
              <figcaption className="mt-3 flex items-center justify-between text-background">
                <span className="font-medium">{PHOTOS[index].caption}</span>
                <span className="font-mono text-sm text-background/70">
                  {index + 1} / {PHOTOS.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
