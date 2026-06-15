"use client"

import * as React from "react"

const SECTIONS = [
  { id: "boot", label: "Boot" },
  { id: "runtime", label: "Runtime" },
  { id: "defense", label: "Defense" },
  { id: "deploy", label: "Deploy" },
  { id: "access", label: "Access" },
]

/**
 * Cyber anchor nav — a glowing tab rail; the active tab lights up cyan.
 */
export function NavCyber() {
  const [active, setActive] = React.useState(SECTIONS[0].id)

  return (
    <section className="border-b border-primary/20 bg-background text-foreground">
      <nav className="flex flex-wrap border-b border-primary/20">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`flex-1 border-r border-primary/10 px-5 py-4 font-mono text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-all last:border-r-0 ${
              active === s.id
                ? "bg-primary/10 text-primary shadow-[inset_0_-2px_0_0_#22d3ee]"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        {SECTIONS.map((s, i) => (
          <div key={s.id} className={active === s.id ? "" : "hidden"}>
            <span className="font-mono text-5xl font-black text-primary [text-shadow:0_0_24px_rgba(34,211,238,0.5)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-3xl font-black tracking-tight">{s.label}</h3>
            <p className="mt-3 max-w-xl text-muted-foreground">
              The {s.label.toLowerCase()} stage of a run — wired, monitored, and reversible. Jump
              straight to it from the rail above.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
