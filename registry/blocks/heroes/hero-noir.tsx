"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

/**
 * Noir hero — an oversized serif statement over near-black, with a gold rule.
 */
export function HeroNoir() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.14 }}>
          <motion.p variants={fadeUp} className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">
            Maison Aurum · Est. 1924
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-8 font-serif text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tight text-balance"
          >
            Light, set in <em className="text-primary not-italic">gold.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Each piece is drawn by hand and finished over weeks, not hours. Quiet luxury for those
            who already know.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-sm tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              View the collection
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="#" className="text-sm tracking-wide text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              Book an appointment
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full"
        >
          <div className="absolute inset-0 border border-primary/40" />
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[radial-gradient(circle_at_50%_30%,#2a241a,transparent_70%)]">
            <div className="absolute inset-0 bg-[conic-gradient(from_140deg_at_50%_45%,transparent,rgba(200,164,90,0.25),transparent_55%)]" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              No. 01 — The Solène ring
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
