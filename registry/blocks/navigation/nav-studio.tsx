"use client"

import * as React from "react"

const SECTIONS = [
  { id: "classes", label: "Classes" },
  { id: "method", label: "The method" },
  { id: "teachers", label: "Teachers" },
  { id: "memberships", label: "Memberships" },
  { id: "visit", label: "Visit" },
]

/**
 * Studio anchor nav — a calm sticky rail with a soft blush active pill.
 */
export function NavStudio() {
  const [active, setActive] = React.useState(SECTIONS[0].id)

  return (
    <section className="bg-background text-foreground">
      <nav className="sticky top-0 z-10 flex flex-wrap gap-2 border-b border-border bg-background/85 px-6 py-4 backdrop-blur sm:px-10">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              active === s.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
        {SECTIONS.map((s, i) => (
          <div key={s.id} className={active === s.id ? "" : "hidden"}>
            <p className="text-xs tracking-[0.25em] uppercase text-primary">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-serif text-4xl tracking-tight">{s.label}</h3>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              A quiet word on {s.label.toLowerCase()} — everything you need to know before your first
              visit, gathered in one calm place.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
