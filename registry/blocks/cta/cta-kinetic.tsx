"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const WORDS = ["move", "land", "convert", "stick"]

/** A button that leans toward the cursor. */
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()
  const [pos, setPos] = React.useState({ x: 0, y: 0 })

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.35, y: (e.clientY - (r.top + r.height / 2)) * 0.35 })
  }

  return (
    <motion.a
      ref={ref}
      href="#"
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 240, damping: 16 }}
      className="inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-bold text-primary-foreground"
    >
      {children}
    </motion.a>
  )
}

/**
 * Kinetic CTA — a closing line whose final word cycles through synonyms, beside a
 * magnetic primary button.
 */
export function CtaKinetic() {
  const reduce = useReducedMotion()
  const [i, setI] = React.useState(0)

  React.useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2000)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <section className="bg-accent px-5 py-24 text-accent-foreground sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[clamp(2.2rem,7vw,5rem)] font-black leading-[0.95] tracking-tight">
          Let&apos;s make it{" "}
          <span className="relative inline-grid">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={WORDS[i]}
                initial={reduce ? false : { y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduce ? undefined : { y: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
                className="col-start-1 row-start-1 underline decoration-[6px] underline-offset-[6px]"
              >
                {WORDS[i]}.
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <MagneticButton>
          Start a project <ArrowUpRight className="size-5" />
        </MagneticButton>
      </div>
    </section>
  )
}
