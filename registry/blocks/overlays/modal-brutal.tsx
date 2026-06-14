"use client"

import * as React from "react"
import { X } from "lucide-react"

/**
 * Brutal modal — hard-shadow dialog with Escape + backdrop close.
 */
export function ModalBrutal() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="grid min-h-[340px] place-items-center border-y-4 border-foreground bg-background px-5 py-16 text-foreground">
      <button
        onClick={() => setOpen(true)}
        className="border-2 border-foreground bg-accent px-8 py-4 text-lg font-black uppercase shadow-[6px_6px_0_0_var(--foreground)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--foreground)]"
      >
        Open dialog
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
            className="w-full max-w-md border-4 border-foreground bg-background p-7 shadow-[10px_10px_0_0_var(--foreground)]"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-black uppercase leading-none">Are you sure?</h3>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center border-2 border-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <X className="size-5" />
              </button>
            </div>
            <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
              This action is loud and permanent. There&apos;s no quiet undo — only borders.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 border-2 border-foreground bg-foreground px-4 py-3 text-sm font-black uppercase text-background"
              >
                Do it
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex-1 border-2 border-foreground px-4 py-3 text-sm font-black uppercase hover:bg-accent"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
