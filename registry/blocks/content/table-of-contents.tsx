"use client"

import * as React from "react"
import { List } from "lucide-react"

import { cn } from "@/lib/utils"

const ITEMS = [
  { id: "intro", label: "Introduction", level: 1 },
  { id: "signs", label: "The early signs", level: 1 },
  { id: "draft", label: "Drafts & airflow", level: 2 },
  { id: "moisture", label: "Moisture & stains", level: 2 },
  { id: "cost", label: "What it costs", level: 1 },
  { id: "next", label: "What to do next", level: 1 },
]

/**
 * Table of contents — a sticky, indented TOC with scroll-spy + a reading
 * progress bar. IntersectionObserver-based so it works in the preview
 * iframe. Pairs with article-body.
 */
export function TableOfContents() {
  const [active, setActive] = React.useState(ITEMS[0].id)
  const [progress, setProgress] = React.useState(0)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setActive(vis[0].target.id)
      },
      { rootMargin: "-15% 0px -75% 0px" }
    )
    ITEMS.forEach((i) => { const el = document.getElementById(i.id); if (el) obs.observe(el) })

    const el = ref.current
    const onScroll = () => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.scrollHeight - window.innerHeight
      const seen = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)))
      setProgress(seen * 100)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll) }
  }, [])

  return (
    <section ref={ref} className="bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <p className="mb-3 flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <List className="size-3.5" /> Contents
            </p>
            <div className="mb-4 h-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
            </div>
            <nav>
              <ul className="space-y-1 text-sm">
                {ITEMS.map((it) => (
                  <li key={it.id} style={{ paddingLeft: it.level === 2 ? 14 : 0 }}>
                    <a
                      href={`#${it.id}`}
                      className={cn(
                        "block py-1 transition-colors",
                        active === it.id ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="max-w-2xl space-y-12">
          {ITEMS.filter((i) => i.level === 1).map((it) => (
            <section key={it.id} id={it.id} className="scroll-mt-8">
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">{it.label}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Placeholder copy for the “{it.label}” section. Scroll and watch
                the contents highlight the section you&apos;re reading and the
                progress bar fill as you go.
              </p>
              {ITEMS.filter((s) => s.level === 2 && ITEMS.indexOf(s) > ITEMS.indexOf(it) && ITEMS.indexOf(s) < ITEMS.findIndex((x, idx) => x.level === 1 && idx > ITEMS.indexOf(it))).map((sub) => (
                <div key={sub.id} id={sub.id} className="mt-6 scroll-mt-8">
                  <h3 className="text-lg font-semibold">{sub.label}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">More detail under this subheading.</p>
                </div>
              ))}
              <div className="mt-5 h-32 rounded-xl border bg-card" />
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
