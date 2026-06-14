"use client"

import * as React from "react"
import { Gift, X } from "lucide-react"

/**
 * Retro modal — a playful rounded dialog with a sticker close button.
 */
export function ModalRetro() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="grid min-h-[340px] place-items-center bg-background px-5 py-16 text-foreground">
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border-2 border-foreground bg-primary px-7 py-3.5 text-base font-black text-primary-foreground shadow-[5px_5px_0_0_var(--foreground)] transition-transform hover:-translate-y-1"
      >
        Unlock 15% off
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-5"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-[2rem] border-4 border-foreground bg-card p-7 text-center shadow-[8px_8px_0_0_var(--foreground)]"
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 grid size-10 place-items-center rounded-full border-2 border-foreground bg-accent transition-transform hover:rotate-90"
            >
              <X className="size-5" />
            </button>

            <span className="mx-auto grid size-14 -rotate-6 place-items-center rounded-2xl border-2 border-foreground bg-accent shadow-[3px_3px_0_0_var(--foreground)]">
              <Gift className="size-7" />
            </span>
            <h3 className="mt-5 text-2xl font-black">Here&apos;s a treat</h3>
            <p className="mt-2 font-medium text-muted-foreground">
              Pop your email in and we&apos;ll fizz over a 15% code for your first case.
            </p>
            <div className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-full border-2 border-foreground bg-background px-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-full border-2 border-foreground bg-primary px-5 py-2.5 text-sm font-black text-primary-foreground"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
