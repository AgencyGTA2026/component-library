"use client"

import * as React from "react"
import { Check } from "lucide-react"

const COURSES = ["Foundation", "Typography", "Print & poster", "Furniture"]

/**
 * Bauhaus enrolment form — thick-keyline fields and flat chips with success swap.
 */
export function FormBauhaus() {
  const [sent, setSent] = React.useState(false)
  const [course, setCourse] = React.useState(COURSES[0])

  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-0 border-2 border-foreground lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col justify-center border-foreground bg-primary p-8 text-primary-foreground sm:p-10 lg:border-r-2">
          <p className="font-mono text-xs tracking-[0.3em] uppercase">Enrolment</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-[0.92] tracking-tighter">
            Join the workshop
          </h2>
          <p className="mt-5 max-w-sm font-medium text-primary-foreground/85">
            Terms begin in autumn and spring. Tell us where you want to start and we&apos;ll send the
            brief.
          </p>
        </div>

        <div className="bg-background p-8 sm:p-10">
          {sent ? (
            <div className="grid min-h-[260px] place-items-center text-center">
              <div>
                <span className="mx-auto grid size-14 place-items-center border-2 border-foreground bg-accent">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-5 text-2xl font-black uppercase">Application in</h3>
                <p className="mt-2 font-medium text-muted-foreground">We&apos;ll be in touch within a week.</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <p className="text-xs font-black uppercase tracking-wide">Choose a course</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {COURSES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCourse(c)}
                    className={`border-2 border-foreground px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
                      course === c ? "bg-primary text-primary-foreground" : "bg-background hover:bg-accent"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                <input
                  required
                  placeholder="Full name"
                  className="w-full border-2 border-foreground bg-card px-4 py-3 text-sm outline-none focus:bg-accent"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full border-2 border-foreground bg-card px-4 py-3 text-sm outline-none focus:bg-accent"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="Why do you want to study here?"
                  className="w-full border-2 border-foreground bg-card px-4 py-3 text-sm outline-none focus:bg-accent"
                />
              </div>

              <button
                type="submit"
                className="mt-5 w-full border-2 border-foreground bg-secondary py-3.5 text-sm font-black uppercase text-secondary-foreground transition-colors hover:bg-foreground"
              >
                Apply
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
