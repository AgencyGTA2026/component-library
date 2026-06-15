"use client"

import * as React from "react"
import { Check } from "lucide-react"

const ROLES = ["Netrunner", "Solo", "Fixer", "Techie"]

/**
 * Cyber access form — glowing terminal fields and neon chips with success swap.
 */
export function FormCyber() {
  const [sent, setSent] = React.useState(false)
  const [role, setRole] = React.useState(ROLES[0])

  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-xl">
        <div className="border border-primary/40 bg-card p-7 shadow-[0_0_32px_rgba(34,211,238,0.12)] sm:p-9">
          {sent ? (
            <div className="py-10 text-center">
              <span className="mx-auto grid size-14 place-items-center border border-primary text-primary shadow-[0_0_18px_rgba(34,211,238,0.5)]">
                <Check className="size-7" />
              </span>
              <h3 className="mt-5 font-mono text-2xl font-black tracking-tight">// access_queued</h3>
              <p className="mt-2 text-muted-foreground">Your handle is in the queue. Watch the feed for your invite.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// request_access</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Join the next cohort</h2>

              <p className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Class</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ROLES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`border px-4 py-1.5 font-mono text-xs tracking-[0.1em] uppercase transition-all ${
                      role === r
                        ? "border-primary bg-primary/10 text-primary shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                <input
                  required
                  placeholder="> handle"
                  className="w-full border border-primary/40 bg-background px-4 py-3 font-mono text-sm outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                />
                <input
                  required
                  type="email"
                  placeholder="> secure_email"
                  className="w-full border border-primary/40 bg-background px-4 py-3 font-mono text-sm outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                />
              </div>

              <button
                type="submit"
                className="mt-5 w-full border border-primary bg-primary py-3.5 font-mono text-sm tracking-[0.15em] uppercase text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
              >
                Transmit request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
