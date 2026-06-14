"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Compass, Hammer, PenTool, Rocket } from "lucide-react"

const STEPS = [
  { icon: Compass, title: "Strategy", body: "We map the market and your edge before anything gets designed.", tone: "from-primary/30 to-primary/5" },
  { icon: PenTool, title: "Design", body: "A custom system — type, color, motion — built only for you.", tone: "from-accent/30 to-accent/5" },
  { icon: Hammer, title: "Build", body: "Hand-coded, fast, accessible, and yours to edit.", tone: "from-secondary to-background" },
  { icon: Rocket, title: "Launch", body: "We ship, measure, and tune against real pipeline.", tone: "from-primary/20 to-accent/10" },
]

/**
 * Sticky scroll features — a pinned visual stage on one side while
 * stepped copy scrolls past; the active step's panel cross-fades in.
 * Element-targeted scroll so it runs inside the preview iframe.
 */
export function StickyScrollFeatures() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)))
    })
  }, [scrollYProgress])

  return (
    <section ref={ref} className="relative bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
        {/* sticky visual */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.04 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br ${s.tone}`}
                >
                  <s.icon className="size-16 text-primary" strokeWidth={1.25} />
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / 0{STEPS.length}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* stepped copy */}
        <div>
          {STEPS.map((s, i) => (
            <div key={s.title} className="flex min-h-screen flex-col justify-center py-16">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary lg:hidden">
                <s.icon className="size-6" />
              </span>
              <p className="mt-4 font-mono text-sm font-semibold text-primary lg:mt-0">
                Step {i + 1}
              </p>
              <h3 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{s.title}</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
