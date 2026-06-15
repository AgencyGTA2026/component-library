"use client"

import * as React from "react"
import { X, Terminal } from "lucide-react"

/**
 * Cyber modal — a glowing terminal-style access dialog with Escape close.
 */
export function ModalCyber() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="grid min-h-[360px] place-items-center border-b border-primary/20 bg-background px-5 py-16 text-foreground">
      <button
        onClick={() => setOpen(true)}
        className="border border-primary bg-primary/10 px-7 py-3.5 font-mono text-sm tracking-[0.15em] uppercase text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_rgba(34,211,238,0.6)]"
      >
        Request access
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/85 p-5" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md border border-primary/50 bg-card shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-primary/30 px-5 py-3">
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
                <Terminal className="size-4" /> nexen://auth
              </span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-accent">
                <X className="size-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-black tracking-tight">Request grid access</h3>
              <p className="mt-2 text-muted-foreground">
                Drop your handle. We&apos;ll route an invite to the next cohort of runners.
              </p>
              <div className="mt-5 space-y-3">
                <input
                  placeholder="> handle"
                  className="w-full border border-primary/40 bg-background px-4 py-2.5 font-mono text-sm text-foreground outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="w-full border border-primary bg-primary py-3 font-mono text-sm tracking-[0.15em] uppercase text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                >
                  Transmit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
