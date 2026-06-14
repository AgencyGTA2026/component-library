"use client"

import * as React from "react"

const SECTIONS = [
  { id: "heritage", label: "Heritage" },
  { id: "craft", label: "The craft" },
  { id: "collection", label: "Collection" },
  { id: "bespoke", label: "Bespoke" },
  { id: "visit", label: "Visit us" },
]

/**
 * Noir anchor nav — a sticky hairline rail with a gold active underline.
 */
export function NavNoir() {
  const [active, setActive] = React.useState(SECTIONS[0].id)

  return (
    <section className="bg-background text-foreground">
      <nav className="sticky top-0 z-10 flex flex-wrap gap-x-8 gap-y-2 border-y border-border bg-background/90 px-5 py-4 backdrop-blur sm:px-8">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`border-b pb-1 text-sm tracking-[0.12em] uppercase transition-colors ${
              active === s.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        {SECTIONS.map((s) => (
          <div key={s.id} className={active === s.id ? "" : "hidden"}>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">
              {String(SECTIONS.indexOf(s) + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-serif text-4xl tracking-tight">{s.label}</h3>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              A quiet word on {s.label.toLowerCase()} — the kind of detail that rewards the patient
              reader and the patient collector alike.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
