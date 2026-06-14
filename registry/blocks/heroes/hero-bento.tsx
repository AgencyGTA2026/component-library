"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Quote, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"

const BARS = [38, 56, 44, 72, 61, 88, 95]

const cell = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

/**
 * Bento hero — headline column beside a live grid of proof: a metric
 * cell, a mini bar chart, a quote, and an avatar strip.
 */
export function HeroBento() {
  return (
    <section className="bg-background text-foreground">
      <div className="grid gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Growth studio for SaaS
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Marketing sites that pull their weight.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Strategy, design, and build — measured against the only metric
            that matters: qualified pipeline.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#contact">
                Book an intro call
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="#work">View case studies</Link>
            </Button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.div
            variants={cell}
            className="col-span-2 flex items-end justify-between gap-6 rounded-lg border bg-card p-6 sm:col-span-1"
          >
            <div>
              <p className="text-sm text-muted-foreground">Avg. conversion lift</p>
              <p className="mt-1 text-5xl font-medium tracking-tight">
                +127<span className="text-primary">%</span>
              </p>
            </div>
            <TrendingUp className="size-8 shrink-0 text-primary" />
          </motion.div>

          <motion.div
            variants={cell}
            className="col-span-2 rounded-lg border bg-card p-6 sm:col-span-1"
          >
            <p className="text-sm text-muted-foreground">Demo requests / week</p>
            <div className="mt-4 flex h-20 items-end gap-1.5">
              {BARS.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.07, ease: "easeOut" }}
                  className={`flex-1 rounded-sm ${i === BARS.length - 1 ? "bg-primary" : "bg-muted-foreground/25"}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={cell}
            className="col-span-2 rounded-lg border bg-primary p-6 text-primary-foreground"
          >
            <Quote className="size-5 opacity-60" />
            <p className="mt-3 text-lg leading-snug text-balance">
              “They rebuilt our site in five weeks. Pipeline doubled the
              following quarter.”
            </p>
            <p className="mt-4 font-mono text-xs tracking-widest uppercase opacity-70">
              Dana Reyes — VP Marketing, Quantive
            </p>
          </motion.div>

          <motion.div
            variants={cell}
            className="col-span-2 flex items-center justify-between rounded-lg border bg-card px-6 py-4"
          >
            <div className="flex -space-x-2.5">
              {["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"].map((c, i) => (
                <span
                  key={i}
                  className={`grid size-9 place-items-center rounded-full border-2 border-card text-[10px] font-bold text-white ${c}`}
                >
                  {["DR", "MK", "JT", "AS"][i]}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by 60+ B2B teams
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
