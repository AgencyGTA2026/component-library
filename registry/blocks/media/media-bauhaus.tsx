"use client"

import * as React from "react"
import { X } from "lucide-react"

const TILES = [
  { label: "Wall studies", color: "#e63422", shape: "circle", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Type rack", color: "#2b4cc4", shape: "square" },
  { label: "Loom room", color: "#f5c518", shape: "triangle" },
  { label: "Metal shop", color: "#2b4cc4", shape: "circle" },
  { label: "Print floor", color: "#e63422", shape: "square" },
]

function Mark({ kind }: { kind: string }) {
  if (kind === "circle") return <span className="size-16 rounded-full bg-background/85" />
  if (kind === "square") return <span className="size-16 bg-background/85" />
  return <span aria-hidden className="h-0 w-0 border-x-[32px] border-b-[56px] border-x-transparent border-b-background/85" />
}

/**
 * Bauhaus gallery — a hard-edged grid that opens a flat-color lightbox.
 */
export function MediaBauhaus() {
  const [open, setOpen] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black uppercase tracking-tighter">Inside the school</h2>

        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-0 border-2 border-foreground sm:grid-cols-4">
          {TILES.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setOpen(i)}
              className={`group relative grid place-items-center border-2 border-foreground ${t.span ?? ""}`}
              style={{ backgroundColor: t.color }}
            >
              <Mark kind={t.shape} />
              <span className="absolute bottom-2 left-2 border-2 border-foreground bg-background px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/50 p-5" onClick={() => setOpen(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-2xl place-items-center border-4 border-background"
            style={{ backgroundColor: TILES[open].color, aspectRatio: "16 / 10" }}
          >
            <Mark kind={TILES[open].shape} />
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute -top-3 -right-3 grid size-10 place-items-center border-2 border-foreground bg-background hover:bg-accent">
              <X className="size-5" />
            </button>
            <span className="absolute bottom-3 left-3 border-2 border-foreground bg-background px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
              {TILES[open].label}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
