"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const QUOTES = [
  { quote: "I came for my back and stayed for the calm. I leave every class feeling taller and quieter.", name: "Maya R.", role: "Member, 2 years" },
  { quote: "The smallest classes I've ever been in. The teachers actually know my body now.", name: "Priya S.", role: "Member, 8 months" },
  { quote: "Post-natal and nervous, and they made it feel safe from day one. I'm stronger than before.", name: "Hannah L.", role: "Member, 1 year" },
]

/**
 * Studio testimonials — one soft serif quote at a time, paged with a crossfade.
 */
export function TestimonialsStudio() {
  const [i, setI] = React.useState(0)
  const q = QUOTES[i]

  return (
    <section className="bg-secondary px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-primary">In their words</p>

        <blockquote key={i} className="mt-8 font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.25] tracking-tight text-balance animate-in fade-in duration-700">
          &ldquo;{q.quote}&rdquo;
        </blockquote>

        <p className="mt-7 text-sm tracking-[0.15em] uppercase text-muted-foreground">{q.name} · {q.role}</p>

        <div className="mt-9 flex items-center justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => setI((p) => (p - 1 + QUOTES.length) % QUOTES.length)}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="text-sm text-muted-foreground">
            {i + 1} / {QUOTES.length}
          </span>
          <button
            aria-label="Next"
            onClick={() => setI((p) => (p + 1) % QUOTES.length)}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
