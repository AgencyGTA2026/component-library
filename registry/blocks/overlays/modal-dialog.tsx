"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Sparkles, X } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * Modal dialog — an accessible centered modal: focus moves in on open,
 * Escape and backdrop click close it, and body scroll is intentionally
 * left to the page. A self-contained pattern, no dialog library needed.
 */
export function ModalDialog() {
  const [open, setOpen] = React.useState(false)
  const closeRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="grid min-h-72 place-items-center bg-background px-5 py-20 text-foreground">
      <Button size="lg" onClick={() => setOpen(true)}>Open dialog</Button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md rounded-2xl border bg-card p-7 text-card-foreground shadow-2xl"
            >
              <button
                ref={closeRef}
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-secondary"
              >
                <X className="size-4" />
              </button>

              <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                <Sparkles className="size-6" />
              </span>
              <h2 id="modal-title" className="mt-5 text-xl font-semibold tracking-tight">
                You&apos;ve unlocked Pro
              </h2>
              <p className="mt-2 text-muted-foreground">
                Your trial now includes unlimited projects, priority support,
                and the full template library. Nothing to install.
              </p>

              <div className="mt-7 flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setOpen(false)}>Maybe later</Button>
                <Button onClick={() => setOpen(false)}>Explore Pro</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
