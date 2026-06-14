"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Cookie } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const CATEGORIES = [
  { id: "necessary", label: "Strictly necessary", desc: "Required for the site to function.", locked: true },
  { id: "analytics", label: "Analytics", desc: "Helps us understand what's used." },
  { id: "marketing", label: "Marketing", desc: "Personalizes ads and offers." },
]

/**
 * Cookie consent — a bottom banner with Accept all / Reject and an
 * expandable preferences panel of category toggles. Persist the choice
 * to a cookie or localStorage in onSave.
 */
export function CookieConsent() {
  const [open, setOpen] = React.useState(true)
  const [prefs, setPrefs] = React.useState(false)
  const [prefState, setPrefState] = React.useState<Record<string, boolean>>({
    necessary: true,
    analytics: true,
    marketing: false,
  })

  const close = () => setOpen(false)

  return (
    <section className="relative min-h-72 bg-background px-5 py-16 text-foreground">
      <div className="text-center text-muted-foreground">
        <p className="font-mono text-xs tracking-[0.2em] uppercase">Banner is pinned to the bottom ↓</p>
        {!open && (
          <Button variant="outline" className="mt-4" onClick={() => { setOpen(true); setPrefs(false) }}>
            Reset banner
          </Button>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4"
          >
            <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-5 text-card-foreground shadow-2xl sm:p-6">
              <div className="flex items-start gap-4">
                <span className="hidden size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary sm:grid">
                  <Cookie className="size-5" />
                </span>
                <div className="flex-1">
                  <p className="font-semibold">We use cookies</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We use cookies to run the site and, with your OK, to improve
                    it. Read our{" "}
                    <a href="#" className="text-primary underline underline-offset-2">cookie policy</a>.
                  </p>

                  <AnimatePresence initial={false}>
                    {prefs && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3 border-t pt-4">
                          {CATEGORIES.map((c) => (
                            <div key={c.id} className="flex items-center justify-between gap-4">
                              <div>
                                <p className="text-sm font-medium">{c.label}</p>
                                <p className="text-xs text-muted-foreground">{c.desc}</p>
                              </div>
                              <Switch
                                checked={c.locked ? true : prefState[c.id]}
                                disabled={c.locked}
                                onCheckedChange={(v) => setPrefState((s) => ({ ...s, [c.id]: v }))}
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-end gap-2">
                {prefs ? (
                  <Button onClick={close} className="order-1 sm:order-none">Save preferences</Button>
                ) : (
                  <Button variant="ghost" onClick={() => setPrefs(true)}>Preferences</Button>
                )}
                <Button variant="outline" onClick={close}>Reject all</Button>
                <Button onClick={close}>Accept all</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
