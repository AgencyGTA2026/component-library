"use client"

import * as React from "react"
import { X } from "lucide-react"

/**
 * Studio modal — a soft rounded intro-offer dialog with Escape + backdrop close.
 */
export function ModalStudio() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="grid min-h-[360px] place-items-center bg-background px-6 py-16 text-foreground">
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Claim intro offer
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/35 p-5 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-border bg-card text-center shadow-sm"
          >
            <div className="h-28 bg-[radial-gradient(circle_at_50%_120%,rgba(201,142,134,0.4),transparent_70%)]" />
            <button aria-label="Close" onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="size-5" />
            </button>
            <div className="px-7 pb-7">
              <h3 className="-mt-6 font-serif text-2xl tracking-tight">Three classes, $39</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                New to Méthode? Try us for two weeks. Leave your email and we&apos;ll send your intro pass.
              </p>
              <div className="mt-5 space-y-3">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send my pass
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
