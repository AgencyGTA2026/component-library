"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AlertTriangle, CheckCircle2, Info, X } from "lucide-react"

import { Button } from "@/components/ui/button"

type Variant = "success" | "error" | "info"
type Toast = { id: number; variant: Variant; title: string; body: string }

const CONFIG: Record<Variant, { icon: React.ElementType; accent: string; title: string; body: string }> = {
  success: { icon: CheckCircle2, accent: "text-primary", title: "Saved", body: "Your changes are live." },
  error: { icon: AlertTriangle, accent: "text-destructive", title: "Something went wrong", body: "We couldn't reach the server." },
  info: { icon: Info, accent: "text-accent-foreground", title: "Heads up", body: "A new version is available." },
}

/**
 * Notification toasts — trigger buttons push toasts into a stacked
 * corner region; each auto-dismisses after 4s or on manual close. Lift
 * the `push` function into a context to call from anywhere.
 */
export function NotificationToast() {
  const [toasts, setToasts] = React.useState<Toast[]>([])
  const next = React.useRef(0)

  const dismiss = (id: number) => setToasts((t) => t.filter((x) => x.id !== id))
  const push = (variant: Variant) => {
    const id = next.current++
    const { title, body } = CONFIG[variant]
    setToasts((t) => [...t, { id, variant, title, body }])
    setTimeout(() => dismiss(id), 4000)
  }

  return (
    <section className="grid min-h-72 place-items-center bg-background px-5 py-20 text-foreground">
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={() => push("success")}>Show success</Button>
        <Button variant="outline" onClick={() => push("error")}>Show error</Button>
        <Button variant="ghost" onClick={() => push("info")}>Show info</Button>
      </div>

      <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex w-full max-w-sm flex-col gap-3">
        <AnimatePresence initial={false}>
          {toasts.map((t) => {
            const c = CONFIG[t.variant]
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="pointer-events-auto flex gap-3 rounded-xl border bg-card p-4 text-card-foreground shadow-lg"
              >
                <c.icon className={`mt-0.5 size-5 shrink-0 ${c.accent}`} />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{t.title}</p>
                  <p className="text-sm text-muted-foreground">{t.body}</p>
                </div>
                <button onClick={() => dismiss(t.id)} aria-label="Dismiss" className="text-muted-foreground transition-colors hover:text-foreground">
                  <X className="size-4" />
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}
