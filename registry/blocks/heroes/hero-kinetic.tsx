"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"

const HEADLINE = ["Motion", "that", "makes", "people", "stop", "scrolling."]
const MARQUEE = ["Brand films", "Title design", "Product motion", "Explainers", "Loops", "3D & 2D"]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}
const word: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { type: "spring", stiffness: 420, damping: 32 } },
}

/** A button that leans toward the cursor — the signature kinetic micro-interaction. */
function MagneticLink({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = React.useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()
  const [pos, setPos] = React.useState({ x: 0, y: 0 })

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.3, y: (e.clientY - (r.top + r.height / 2)) * 0.3 })
  }

  return (
    <motion.a
      ref={ref}
      href="#"
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

/**
 * Kinetic hero — an oversized headline whose words spring up into place, a looping
 * service marquee, and a magnetic primary CTA.
 */
export function HeroKinetic() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
        >
          <Sparkles className="size-3.5 text-primary" /> Tempo — motion design studio
        </motion.span>

        <motion.h1
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
          className="mt-7 flex max-w-4xl flex-wrap gap-x-4 text-[clamp(2.75rem,9vw,6.5rem)] font-black leading-[0.92] tracking-tight"
        >
          {HEADLINE.map((w, i) => (
            <span key={i} className="overflow-hidden pb-[0.08em]">
              <motion.span
                variants={reduce ? undefined : word}
                className={`inline-block ${w === "stop" ? "text-primary" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-lg text-muted-foreground">
            We design title sequences, brand films, and product motion that earn a second look.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticLink className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground">
              See the reel <ArrowUpRight className="size-4" />
            </MagneticLink>
            <Link href="#" className="text-sm font-semibold underline-offset-4 hover:underline">
              Our process
            </Link>
          </div>
        </div>
      </div>

      {/* looping service marquee */}
      <div className="overflow-hidden border-y border-border bg-foreground py-4 text-background">
        <motion.div
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-10 whitespace-nowrap text-2xl font-black tracking-tight uppercase sm:text-3xl"
        >
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-10">
              {m} <span className="text-primary">✳</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
