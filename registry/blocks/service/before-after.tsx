"use client"

import * as React from "react"
import { MoveHorizontal } from "lucide-react"

/**
 * Before / after slider — drag (or use arrow keys) to wipe between two
 * states. Built for roofing, landscaping, paint, and remodel reveals.
 * Replace the two gradient panels with real before/after photos.
 */
export function BeforeAfter() {
  const [pos, setPos] = React.useState(52)
  const ref = React.useRef<HTMLDivElement>(null)
  const dragging = React.useRef(false)

  const moveTo = React.useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }, [])

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => dragging.current && moveTo(e.clientX)
    const onUp = () => (dragging.current = false)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [moveTo])

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
            Real projects
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
            Drag to see the difference a day&apos;s work makes.
          </h2>
        </div>

        <div
          ref={ref}
          onPointerDown={(e) => {
            dragging.current = true
            moveTo(e.clientX)
          }}
          className="relative aspect-[16/10] w-full touch-none overflow-hidden rounded-xl border select-none"
        >
          {/* AFTER (full background) */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#3f7a33_0%,#2c5a24_60%,#1d2a1a_100%)]">
            <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_70%_30%,rgba(244,246,238,0.8),transparent_55%)]" />
            <span className="absolute right-4 bottom-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
              After
            </span>
          </div>

          {/* BEFORE (clipped overlay) */}
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,#8a8275_0%,#5f594e_60%,#33302a_100%)]"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,0.4)_0,rgba(0,0,0,0.4)_2px,transparent_2px,transparent_10px)]" />
            <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
              Before
            </span>
          </div>

          {/* Handle */}
          <div
            className="absolute inset-y-0 w-1 -translate-x-1/2 bg-background"
            style={{ left: `${pos}%` }}
          >
            <button
              type="button"
              role="slider"
              aria-label="Reveal slider"
              aria-valuenow={Math.round(pos)}
              aria-valuemin={0}
              aria-valuemax={100}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4))
                if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4))
              }}
              className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-background bg-accent text-accent-foreground shadow-lg"
            >
              <MoveHorizontal className="size-5" />
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Maple Heights — full tear-off &amp; architectural shingle install, completed in one day.
        </p>
      </div>
    </section>
  )
}
