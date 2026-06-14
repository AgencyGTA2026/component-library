"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Asterisk } from "lucide-react"

const TICKER = [
  "Web design",
  "Branding",
  "Webflow",
  "Next.js",
  "E-commerce",
  "SEO that works",
]

/**
 * Brutal hero — stacked mega-headline, rotated sticker badges, hard
 * offset shadows, and an infinite marquee strip along the bottom.
 */
export function HeroBrutal() {
  return (
    <section className="relative overflow-hidden border-b-4 border-foreground bg-background text-foreground">
      <div className="relative px-5 pt-16 pb-24 sm:px-8 sm:pt-24">
        <motion.div
          initial={{ rotate: -8, scale: 0 }}
          animate={{ rotate: -8, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.5 }}
          className="absolute top-10 right-6 z-10 hidden items-center gap-1 border-2 border-foreground bg-accent px-4 py-2 text-sm font-black uppercase shadow-[5px_5px_0_0_var(--foreground)] sm:flex"
        >
          <Asterisk className="size-4" />
          2 slots left this quarter
        </motion.div>

        <h1 className="text-[clamp(3rem,11vw,9rem)] font-black leading-[0.88] tracking-tighter uppercase">
          <motion.span
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block"
          >
            Websites
          </motion.span>
          <motion.span
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="block pl-[6vw]"
          >
            that hit
          </motion.span>
          <motion.span
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="block"
          >
            like a{" "}
            <span className="bg-foreground px-3 text-accent">tonne.</span>
          </motion.span>
        </h1>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link
            href="#quote"
            className="border-2 border-foreground bg-foreground px-8 py-4 text-lg font-black uppercase text-background shadow-[6px_6px_0_0_var(--accent)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--accent)]"
          >
            Get a quote
          </Link>
          <p className="max-w-xs font-mono text-sm leading-snug">
            No decks. No discovery phases that last a fiscal year. We ship in
            six weeks.
          </p>
          <ArrowDown className="ml-auto hidden size-10 animate-bounce md:block" />
        </div>
      </div>

      <div className="border-t-4 border-foreground bg-foreground py-3 text-background">
        <motion.div
          className="flex w-max items-center gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 text-xl font-black tracking-tight uppercase"
            >
              {item}
              <Asterisk className="size-5 text-accent" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
