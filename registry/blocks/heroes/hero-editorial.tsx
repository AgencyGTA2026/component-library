"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

/**
 * Editorial hero — oversized serif headline with an italic accent word,
 * staggered reveal, a mono meta column, and a layered media slot (swap
 * the gradient art for a client photo).
 */
export function HeroEditorial() {
  return (
    <section className="overflow-hidden bg-background text-foreground">
      <div className="grid gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col justify-between"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-8 font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground"
            >
              Brand · Web · Identity
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] tracking-tight text-balance"
            >
              Websites for brands with{" "}
              <em className="text-primary">something</em> to say.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground"
            >
              We design and build sites that read like good writing: clear,
              confident, and impossible to mistake for anyone else&apos;s.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-none px-8">
                <Link href="#contact">
                  Start a project
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Link
                href="#work"
                className="group text-sm tracking-wide underline-offset-4 hover:underline"
              >
                See the work →
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t pt-6 font-mono text-xs text-muted-foreground"
          >
            <div>
              <p className="text-2xl font-medium text-foreground">11</p>
              <p className="mt-1 tracking-widest uppercase">Years</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-foreground">140+</p>
              <p className="mt-1 tracking-widest uppercase">Launches</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-foreground">9</p>
              <p className="mt-1 tracking-widest uppercase">Awards</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[320px] lg:min-h-[480px]"
        >
          {/* Media slot — replace with a client image. */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 border border-primary/40" />
          <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(160deg,#b3401f_0%,#7a2b12_45%,#211d16_100%)]">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(247,243,236,0.5),transparent_55%)]" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.25em] uppercase text-background/70">
              Fig. 01 — Selected work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
