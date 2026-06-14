"use client"

import * as React from "react"
import { X } from "lucide-react"

const TILES = [
  { label: "The setting room", tint: "#2a2317", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Raw stones", tint: "#241f1a" },
  { label: "Gold pour", tint: "#2c2519" },
  { label: "Final polish", tint: "#221d15" },
  { label: "The ledger", tint: "#272019" },
]

/**
 * Noir gallery — a hairline grid that opens a quiet fullscreen lightbox.
 */
export function MediaNoir() {
  const [open, setOpen] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">Inside the atelier</p>
        <h2 className="mt-5 font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight">The making of light</h2>

        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {TILES.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setOpen(i)}
              className={`group relative bg-card ${t.span ?? ""}`}
              style={{ background: `radial-gradient(circle at 50% 40%, ${t.tint}, var(--card) 75%)` }}
            >
              <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground transition-colors group-hover:text-primary">
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/90 p-5" onClick={() => setOpen(null)}>
          <button aria-label="Close" onClick={() => setOpen(null)} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground">
            <X className="size-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl border border-primary/40"
            style={{ aspectRatio: "16 / 10", background: `radial-gradient(circle at 50% 40%, ${TILES[open].tint}, #0e0d0b 75%)` }}
          >
            <span className="absolute bottom-4 left-4 font-mono text-[11px] tracking-[0.3em] uppercase text-primary">
              {TILES[open].label}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
