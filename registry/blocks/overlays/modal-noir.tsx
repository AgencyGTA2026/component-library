"use client"

import * as React from "react"
import { X } from "lucide-react"

/**
 * Noir modal — a hairline-framed private-viewing invitation with a gold action.
 */
export function ModalNoir() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="grid min-h-[360px] place-items-center bg-background px-5 py-16 text-foreground">
      <button
        onClick={() => setOpen(true)}
        className="bg-primary px-8 py-3.5 text-sm tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
      >
        Request a private viewing
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/85 p-5" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md border border-border bg-card p-9"
          >
            <button aria-label="Close" onClick={() => setOpen(false)} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground">
              <X className="size-5" />
            </button>

            <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-primary">By appointment</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight">A private viewing</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Spend an hour with our atelier and a glass of champagne. Tell us when suits, and we
              will prepare a selection.
            </p>
            <div className="mt-6 space-y-3">
              <input
                placeholder="Full name"
                className="w-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full bg-primary py-3 text-sm tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request appointment
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
