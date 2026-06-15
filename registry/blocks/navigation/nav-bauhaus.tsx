"use client"

import * as React from "react"

const SECTIONS = [
  { id: "foundation", label: "Foundation" },
  { id: "colour", label: "Colour" },
  { id: "type", label: "Type" },
  { id: "print", label: "Print" },
  { id: "apply", label: "Apply" },
]

/**
 * Bauhaus anchor nav — boxed cells, the active one fills with primary red.
 */
export function NavBauhaus() {
  const [active, setActive] = React.useState(SECTIONS[0].id)

  return (
    <section className="border-b-4 border-foreground bg-background text-foreground">
      <nav className="flex flex-wrap border-b-2 border-foreground">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`flex-1 border-foreground px-5 py-4 text-sm font-black uppercase whitespace-nowrap transition-colors [&:not(:last-child)]:border-r-2 ${
              active === s.id ? "bg-primary text-primary-foreground" : "hover:bg-accent"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        {SECTIONS.map((s, i) => (
          <div key={s.id} className={active === s.id ? "" : "hidden"}>
            <span className="text-5xl font-black tracking-tighter text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-3xl font-black uppercase tracking-tight">{s.label}</h3>
            <p className="mt-3 max-w-xl font-medium leading-relaxed text-muted-foreground">
              The {s.label.toLowerCase()} module — taught as a workshop, assessed by what you make,
              pinned to the wall when it works.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
