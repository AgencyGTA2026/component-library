"use client"

import * as React from "react"
import { X } from "lucide-react"

const TILES = [
  { label: "Beach day", color: "#ffd23f", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Studio mix", color: "#ff5a5f", span: "" },
  { label: "Can wall", color: "#1fb5a8", span: "" },
  { label: "Festival", color: "#ff9f1c", span: "" },
  { label: "Fridge goals", color: "#ffd23f", span: "" },
]

/**
 * Retro gallery — a rounded color grid that opens a playful lightbox.
 */
export function MediaRetro() {
  const [open, setOpen] = React.useState<number | null>(null)

  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">In the wild</h2>

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-4 sm:grid-cols-4">
          {TILES.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setOpen(i)}
              className={`group relative rounded-[1.5rem] border-2 border-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-1 ${t.span}`}
              style={{ backgroundColor: t.color }}
            >
              <span className="absolute bottom-3 left-3 rounded-full border-2 border-foreground bg-card px-2.5 py-0.5 text-xs font-black">
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/50 p-5"
          onClick={() => setOpen(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-[2rem] border-4 border-foreground shadow-[8px_8px_0_0_var(--foreground)]"
            style={{ backgroundColor: TILES[open].color, aspectRatio: "16 / 10" }}
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="absolute -top-4 -right-4 grid size-10 place-items-center rounded-full border-2 border-foreground bg-card transition-transform hover:rotate-90"
            >
              <X className="size-5" />
            </button>
            <span className="absolute bottom-4 left-4 rounded-full border-2 border-foreground bg-card px-3 py-1 text-sm font-black">
              {TILES[open].label}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
