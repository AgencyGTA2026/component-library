"use client"

import * as React from "react"
import { X } from "lucide-react"

const TILES = [
  { label: "The reformer room", tint: "rgba(201,142,134,0.3)", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Morning light", tint: "rgba(217,194,184,0.55)" },
  { label: "The mat floor", tint: "rgba(201,142,134,0.22)" },
  { label: "Tea corner", tint: "rgba(217,194,184,0.45)" },
  { label: "Changing rooms", tint: "rgba(201,142,134,0.28)" },
]

/**
 * Studio gallery — a soft rounded grid that opens a calm lightbox.
 */
export function MediaStudio() {
  const [open, setOpen] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">A look inside</p>
        <h2 className="mt-4 font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight">The space</h2>

        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-4 sm:grid-cols-4">
          {TILES.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-[1.25rem] border border-border transition-shadow hover:shadow-sm ${t.span ?? ""}`}
              style={{ background: `radial-gradient(circle at 50% 40%, ${t.tint}, var(--card) 75%)` }}
            >
              <span className="absolute bottom-3 left-3 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-5 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <button aria-label="Close" onClick={() => setOpen(null)} className="absolute top-6 right-6 text-background hover:opacity-80">
            <X className="size-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-[1.5rem]"
            style={{ aspectRatio: "16 / 10", background: `radial-gradient(circle at 50% 40%, ${TILES[open].tint}, #fcf9f6 78%)` }}
          >
            <span className="absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">{TILES[open].label}</span>
          </div>
        </div>
      )}
    </section>
  )
}
