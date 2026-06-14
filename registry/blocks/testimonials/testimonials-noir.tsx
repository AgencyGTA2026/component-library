"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const QUOTES = [
  { quote: "They drew my grandmother's ring from a single photograph. I wept when I opened the box.", name: "Eleanor V.", role: "Patron since 2009" },
  { quote: "Nothing about Aurum is hurried, and that is precisely the luxury. The wait is part of the gift.", name: "Charles M.", role: "Cercle member" },
  { quote: "I have bought from the great houses. None made me feel as quietly understood as this one.", name: "Sofia R.", role: "Patron since 2016" },
]

/**
 * Noir testimonials — one typeset pull-quote at a time, paged with a crossfade.
 */
export function TestimonialsNoir() {
  const [i, setI] = React.useState(0)
  const q = QUOTES[i]

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">In their words</p>

        <blockquote key={i} className="mt-10 font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.2] tracking-tight text-balance animate-in fade-in duration-700">
          &ldquo;{q.quote}&rdquo;
        </blockquote>

        <p className="mt-8 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
          {q.name} · {q.role}
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => setI((p) => (p - 1 + QUOTES.length) % QUOTES.length)}
            className="grid size-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
            {String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
          </span>
          <button
            aria-label="Next"
            onClick={() => setI((p) => (p + 1) % QUOTES.length)}
            className="grid size-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
