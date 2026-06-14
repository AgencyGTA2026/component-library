"use client"

import * as React from "react"
import { Check } from "lucide-react"

const TOPICS = ["Wholesale", "Press", "Flavor idea", "Just saying hi"]

/**
 * Retro contact form — rounded fields, sticker topic chips, success swap.
 */
export function FormRetro() {
  const [sent, setSent] = React.useState(false)
  const [topic, setTopic] = React.useState(TOPICS[0])

  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-xl">
        <div className="rounded-[2rem] border-2 border-foreground bg-card p-7 shadow-[6px_6px_0_0_var(--foreground)] sm:p-9">
          {sent ? (
            <div className="py-10 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full border-2 border-foreground bg-accent shadow-[4px_4px_0_0_var(--foreground)]">
                <Check className="size-8" />
              </span>
              <h3 className="mt-5 text-2xl font-black">Got it!</h3>
              <p className="mt-2 font-medium text-muted-foreground">
                We&apos;ll fizz back within a day. Promise.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <h2 className="text-3xl font-black tracking-tight">Say hello</h2>
              <p className="mt-1.5 font-medium text-muted-foreground">We read every message — really.</p>

              <p className="mt-6 text-sm font-black uppercase tracking-wide">What&apos;s it about?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    className={`rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-bold transition-colors ${
                      topic === t ? "bg-primary text-primary-foreground" : "bg-background hover:bg-accent"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                <input
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border-2 border-foreground bg-background px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border-2 border-foreground bg-background px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us everything…"
                  className="w-full rounded-2xl border-2 border-foreground bg-background px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-full border-2 border-foreground bg-primary py-3.5 text-base font-black text-primary-foreground shadow-[5px_5px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
              >
                Send it
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
