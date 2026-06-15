"use client"

import * as React from "react"

const COURSES = [
  { label: "Foundation year", base: 4800 },
  { label: "Typography", base: 2200 },
  { label: "Print & poster", base: 2600 },
]

const EXTRAS = [
  { label: "Studio space", cost: 900 },
  { label: "Materials kit", cost: 450 },
  { label: "Evening workshops", cost: 700 },
]

/**
 * Bauhaus tuition estimator — pick a course and extras; a slab total updates.
 */
export function CalcBauhaus() {
  const [course, setCourse] = React.useState(0)
  const [extras, setExtras] = React.useState<number[]>([])

  const total = COURSES[course].base + extras.reduce((s, i) => s + EXTRAS[i].cost, 0)

  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-0 border-2 border-foreground lg:grid-cols-[1.3fr_1fr]">
        <div className="border-foreground p-8 sm:p-10 lg:border-r-2">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">Tuition</p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter">Cost it out</h2>

          <p className="mt-7 text-xs font-black uppercase tracking-wide">Course</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {COURSES.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setCourse(i)}
                className={`border-2 border-foreground px-3 py-2.5 text-left text-sm font-black uppercase transition-colors ${
                  course === i ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-wide">Add-ons</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {EXTRAS.map((e, i) => {
              const on = extras.includes(i)
              return (
                <button
                  key={e.label}
                  onClick={() => setExtras((p) => (on ? p.filter((x) => x !== i) : [...p, i]))}
                  className={`border-2 border-foreground px-3 py-2.5 text-left text-xs font-bold uppercase transition-colors ${
                    on ? "bg-secondary text-secondary-foreground" : "hover:bg-accent"
                  }`}
                >
                  {e.label}
                  <span className="mt-1 block font-mono">+${e.cost}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center bg-accent p-8 text-center sm:p-10">
          <p className="font-mono text-xs uppercase">Per year</p>
          <p className="mt-2 text-[clamp(2.5rem,9vw,4rem)] font-black leading-none tracking-tighter">
            ${total.toLocaleString()}
          </p>
          <p className="mt-4 font-medium leading-relaxed">
            Scholarships cover up to half for those who need it. Apply alongside your portfolio.
          </p>
        </div>
      </div>
    </section>
  )
}
