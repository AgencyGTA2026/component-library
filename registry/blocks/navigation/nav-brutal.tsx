"use client"

import * as React from "react"

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "scope", label: "Scope" },
  { id: "timeline", label: "Timeline" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
]

/**
 * Brutal anchor nav — boxed cells, the active one inverts. Click to scroll.
 */
export function NavBrutal() {
  const [active, setActive] = React.useState(SECTIONS[0].id)

  return (
    <section className="border-y-4 border-foreground bg-background text-foreground">
      <nav className="flex flex-wrap border-b-2 border-foreground">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`flex-1 border-foreground px-5 py-4 text-sm font-black uppercase whitespace-nowrap transition-colors [&:not(:last-child)]:border-r-2 ${
              active === s.id ? "bg-foreground text-background" : "hover:bg-accent"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="grid gap-px bg-foreground sm:grid-cols-2">
        {SECTIONS.map((s) => (
          <div
            key={s.id}
            className={`bg-background p-8 transition-opacity ${active === s.id ? "" : "opacity-50"}`}
          >
            <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
              {SECTIONS.indexOf(s) + 1 < 10 ? "0" : ""}
              {SECTIONS.indexOf(s) + 1}
            </span>
            <p className="mt-1 text-2xl font-black uppercase">{s.label}</p>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              Jump straight to {s.label.toLowerCase()} — no scrolling past the fluff.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
