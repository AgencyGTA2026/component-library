"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "symptoms", label: "Symptoms" },
  { id: "treatment", label: "Treatment options" },
  { id: "recovery", label: "Recovery & aftercare" },
  { id: "faq", label: "Questions" },
]

const COPY: Record<string, string> = {
  overview: "A plain-language overview of the condition, who it affects, and when to seek care.",
  symptoms: "The signs to watch for, how they typically progress, and the red flags that warrant a same-day visit.",
  treatment: "Conservative and surgical options compared, with what to expect from each and typical timelines.",
  recovery: "Aftercare instructions, milestones to expect week by week, and how to reach us with questions.",
  faq: "The questions patients ask us most, answered honestly and without jargon.",
}

/**
 * Anchor nav — a sticky on-page table of contents with scroll-spy that
 * highlights the section in view. Built for long service/treatment/legal
 * pages. Uses IntersectionObserver so it works inside the preview frame.
 */
export function AnchorNav() {
  const [active, setActive] = React.useState(SECTIONS[0].id)
  const rootRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={rootRef} className="bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-8">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">On this page</p>
            <ul className="space-y-1 border-l">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      "-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors",
                      active === s.id
                        ? "border-primary font-medium text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="space-y-16">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-8">
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">{s.label}</h2>
              <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{COPY[s.id]}</p>
              <div className="mt-5 h-40 rounded-xl border bg-card" />
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
