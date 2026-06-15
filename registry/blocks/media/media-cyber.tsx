"use client"

import * as React from "react"
import { X } from "lucide-react"

const TILES = [
  { label: "NIGHT_CITY", glow: "primary", span: "sm:col-span-2 sm:row-span-2" },
  { label: "THE_GRID", glow: "accent" },
  { label: "ICE_WALL", glow: "primary" },
  { label: "MESH_NODE", glow: "accent" },
  { label: "DAEMON_RUN", glow: "primary" },
]

const grad = (g: string) =>
  g === "accent"
    ? "linear-gradient(135deg,rgba(255,0,229,0.22),rgba(34,211,238,0.1))"
    : "linear-gradient(135deg,rgba(34,211,238,0.22),rgba(255,0,229,0.1))"

/**
 * Cyber gallery — a neon grid that opens a glowing scanline lightbox.
 */
export function MediaCyber() {
  const [open, setOpen] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// visual_buffer</p>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">Scenes from the grid</h2>

        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:grid-cols-4">
          {TILES.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden border transition-all ${t.span ?? ""} ${
                t.glow === "accent" ? "border-accent/40 hover:shadow-[0_0_20px_rgba(255,0,229,0.3)]" : "border-primary/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              }`}
              style={{ background: grad(t.glow) }}
            >
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_16px]" />
              <span className="absolute bottom-2 left-2 font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/70">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/90 p-5" onClick={() => setOpen(null)}>
          <button aria-label="Close" onClick={() => setOpen(null)} className="absolute top-6 right-6 text-primary hover:text-accent">
            <X className="size-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden border border-primary/50 shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            style={{ aspectRatio: "16 / 10", background: grad(TILES[open].glow) }}
          >
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_18px]" />
            <span className="absolute bottom-4 left-4 font-mono text-xs tracking-[0.25em] uppercase text-primary">{TILES[open].label}</span>
          </div>
        </div>
      )}
    </section>
  )
}
