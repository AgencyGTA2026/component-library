"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const REVIEWS = [
  { quote: "Setup took 4 minutes. The calm is permanent.", name: "Jordan M.", role: "Designer" },
  { quote: "First app my therapist and I agree on.", name: "Sam K.", role: "Teacher" },
  { quote: "I've kept a streak for 3 months. Me!", name: "Alex P.", role: "Engineer" },
  { quote: "The Sunday letters are weirdly moving.", name: "Riley T.", role: "Writer" },
  { quote: "Finally deleted my other 4 habit apps.", name: "Casey L.", role: "Nurse" },
  { quote: "It nudges. It never nags. Bliss.", name: "Devon W.", role: "Chef" },
]

const LOGOS = ["TheVerge", "WIRED", "Fast Company", "Lifehacker", "TechCrunch"]

/**
 * Marquee testimonials — a press-logo strip over two counter-scrolling
 * rows of review cards that pause on hover.
 */
export function TestimonialsMarquee() {
  return (
    <section className="overflow-hidden bg-background py-20 text-foreground sm:py-24">
      <div className="mx-auto mb-12 max-w-4xl px-5 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          40,000 calmer mornings and counting.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-muted-foreground/60">
          {LOGOS.map((l) => (
            <span key={l} className="font-serif text-lg font-semibold tracking-tight">
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {[0, 1].map((row) => (
          <div key={row} className="group flex overflow-hidden">
            <motion.div
              className="flex w-max gap-4 pr-4 group-hover:[animation-play-state:paused]"
              animate={{ x: row === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ duration: 38, ease: "linear", repeat: Infinity }}
            >
              {[...REVIEWS, ...REVIEWS].map((r, i) => (
                <figure
                  key={i}
                  className="w-72 shrink-0 rounded-2xl border bg-card p-5 shadow-sm"
                >
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-3 text-xs text-muted-foreground">
                    {r.name} · {r.role}
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
