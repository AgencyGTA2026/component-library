"use client"

import * as React from "react"
import { X } from "lucide-react"

/**
 * Bauhaus modal — a thick-keyline dialog with a primary-shape header.
 */
export function ModalBauhaus() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="grid min-h-[360px] place-items-center border-b-4 border-foreground bg-background px-5 py-16 text-foreground">
      <button
        onClick={() => setOpen(true)}
        className="border-2 border-foreground bg-primary px-8 py-3.5 text-sm font-black uppercase text-primary-foreground transition-colors hover:bg-secondary"
      >
        Request a prospectus
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/45 p-5" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md border-4 border-foreground bg-background"
          >
            <div className="flex items-center justify-between border-b-4 border-foreground bg-accent px-5 py-4">
              <span className="flex items-center gap-2" aria-hidden>
                <span className="size-5 rounded-full bg-primary" />
                <span className="size-5 bg-secondary" />
                <span className="h-0 w-0 border-x-[10px] border-b-[18px] border-x-transparent border-b-foreground" />
              </span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="grid size-8 place-items-center border-2 border-foreground bg-background hover:bg-primary hover:text-primary-foreground">
                <X className="size-4" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-black uppercase leading-none">Join the school</h3>
              <p className="mt-3 font-medium leading-relaxed text-muted-foreground">
                Drop your email and we&apos;ll send the prospectus, term dates, and a sample brief.
              </p>
              <div className="mt-5 space-y-3">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full border-2 border-foreground bg-card px-4 py-2.5 text-sm outline-none focus:bg-accent"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="w-full border-2 border-foreground bg-primary py-3 text-sm font-black uppercase text-primary-foreground transition-colors hover:bg-secondary"
                >
                  Send it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
