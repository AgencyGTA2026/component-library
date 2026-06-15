"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

/**
 * Studio hero — a soft serif headline over greige with an airy media panel.
 */
export function HeroStudio() {
  return (
    <section className="overflow-hidden bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.1fr_1fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
          <motion.p variants={fadeUp} className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Reformer Pilates · Studio Méthode
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-7 font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[1.02] tracking-tight text-balance"
          >
            Move with intention. Leave lighter.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Small classes, slow tempo, real attention. A calm place to build strength that follows
            you off the mat.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Try an intro class <ArrowRight className="size-4" />
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              View the schedule
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-secondary"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,142,134,0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(217,194,184,0.5),transparent_55%)]" />
          <span className="absolute bottom-5 left-5 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            No. 01 — The reformer room
          </span>
        </motion.div>
      </div>
    </section>
  )
}
