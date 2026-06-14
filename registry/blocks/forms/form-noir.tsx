"use client"

import * as React from "react"

const INTERESTS = ["Engagement", "Bespoke", "Restoration", "Gift"]

/**
 * Noir enquiry form — hairline fields and gold chips with a quiet success state.
 */
export function FormNoir() {
  const [sent, setSent] = React.useState(false)
  const [interest, setInterest] = React.useState(INTERESTS[0])

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">Enquiries</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] tracking-tight">
            Begin a commission
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Tell us a little about what you have in mind. A member of the atelier will write back
            within two days.
          </p>
        </div>

        <div className="border border-border bg-card p-7 sm:p-9">
          {sent ? (
            <div className="grid min-h-[280px] place-items-center text-center">
              <div>
                <div className="mx-auto h-px w-12 bg-primary" />
                <h3 className="mt-6 font-serif text-2xl tracking-tight">Thank you</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Your enquiry is with us. Expect a note from the atelier shortly.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Nature of enquiry</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {INTERESTS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setInterest(t)}
                    className={`border px-4 py-1.5 text-xs tracking-[0.1em] uppercase transition-colors ${
                      interest === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <input
                  required
                  placeholder="Full name"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="A few words on what you have in mind…"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-primary py-3.5 text-sm tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
