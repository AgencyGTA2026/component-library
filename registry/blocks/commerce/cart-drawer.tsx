"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus, ShoppingBag, Trash2, Truck, X } from "lucide-react"

import { Button } from "@/components/ui/button"

type Line = { id: number; name: string; variant: string; price: number; qty: number; hue: string }

const INITIAL: Line[] = [
  { id: 1, name: "Everyday Overshirt", variant: "Clay · M", price: 148, qty: 1, hue: "from-primary/30 to-primary/5" },
  { id: 2, name: "Merino Crew Knit", variant: "Sage · L", price: 110, qty: 2, hue: "from-accent/30 to-accent/5" },
  { id: 3, name: "Canvas Tote", variant: "Natural", price: 64, qty: 1, hue: "from-secondary to-background" },
]

const FREE_SHIP = 150

/**
 * Cart drawer — a trigger button opens a right-hand slide-over with line
 * items, quantity steppers, a free-shipping progress bar, and checkout.
 * Overlay closes on click or Escape.
 */
export function CartDrawer() {
  const [open, setOpen] = React.useState(false)
  const [lines, setLines] = React.useState<Line[]>(INITIAL)

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const setQty = (id: number, d: number) =>
    setLines((prev) =>
      prev.flatMap((l) => (l.id === id ? (l.qty + d <= 0 ? [] : [{ ...l, qty: l.qty + d }]) : [l]))
    )
  const remove = (id: number) => setLines((prev) => prev.filter((l) => l.id !== id))

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0)
  const count = lines.reduce((s, l) => s + l.qty, 0)
  const remaining = Math.max(0, FREE_SHIP - subtotal)
  const pct = Math.min(100, (subtotal / FREE_SHIP) * 100)

  return (
    <section className="grid min-h-80 place-items-center bg-background px-5 py-20 text-foreground">
      <Button size="lg" onClick={() => setOpen(true)}>
        <ShoppingBag className="size-4" />
        Open cart · {count}
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              role="dialog"
              aria-label="Shopping cart"
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-card text-card-foreground shadow-2xl"
            >
              <header className="flex items-center justify-between border-b px-5 py-4">
                <p className="flex items-center gap-2 font-semibold">
                  <ShoppingBag className="size-5" />
                  Your cart ({count})
                </p>
                <button onClick={() => setOpen(false)} aria-label="Close" className="grid size-9 place-items-center rounded-md hover:bg-secondary">
                  <X className="size-5" />
                </button>
              </header>

              {/* free-shipping bar */}
              <div className="border-b px-5 py-3">
                <p className="mb-2 flex items-center gap-2 text-sm">
                  <Truck className="size-4 text-primary" />
                  {remaining > 0 ? (
                    <span>You&apos;re <strong>${remaining}</strong> from free shipping</span>
                  ) : (
                    <span className="font-medium text-primary">You&apos;ve unlocked free shipping!</span>
                  )}
                </p>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-5">
                {lines.length === 0 ? (
                  <p className="py-16 text-center text-muted-foreground">Your cart is empty.</p>
                ) : (
                  <ul className="divide-y">
                    {lines.map((l) => (
                      <li key={l.id} className="flex gap-4 py-4">
                        <div className={`aspect-square w-20 shrink-0 rounded-lg bg-gradient-to-br ${l.hue}`} />
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between gap-2">
                            <div>
                              <p className="font-medium">{l.name}</p>
                              <p className="text-sm text-muted-foreground">{l.variant}</p>
                            </div>
                            <p className="font-medium">${l.price * l.qty}</p>
                          </div>
                          <div className="mt-auto flex items-center justify-between pt-3">
                            <div className="flex items-center rounded-md border">
                              <button onClick={() => setQty(l.id, -1)} aria-label="Decrease" className="grid size-7 place-items-center hover:bg-muted">
                                <Minus className="size-3.5" />
                              </button>
                              <span className="w-7 text-center text-sm tabular-nums">{l.qty}</span>
                              <button onClick={() => setQty(l.id, +1)} aria-label="Increase" className="grid size-7 place-items-center hover:bg-muted">
                                <Plus className="size-3.5" />
                              </button>
                            </div>
                            <button onClick={() => remove(l.id)} aria-label="Remove" className="text-muted-foreground transition-colors hover:text-destructive">
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <footer className="border-t px-5 py-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-lg font-semibold">${subtotal}</span>
                </div>
                <Button size="lg" className="w-full" disabled={lines.length === 0}>
                  Checkout
                </Button>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Taxes &amp; shipping calculated at checkout
                </p>
              </footer>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
