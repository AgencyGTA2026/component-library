"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Moon, Sparkles, Sun, Wind } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

/**
 * Soft hero — centered copy over a gradient-mesh wash, with a glassy
 * product mock and floating habit cards drifting on loop.
 */
export function HeroSoft() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 size-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-20 -right-20 size-80 rounded-full bg-accent/60 blur-3xl" />
        <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 pt-20 pb-10 text-center sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-normal">
            <Sparkles className="size-3.5" />
            New — gentle streaks just launched
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
        >
          Build habits that don&apos;t feel like homework.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Driftwell nudges instead of nags. Track sleep, movement, and calm
          with streaks that forgive a missed day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="#start">Start free</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="#tour">Take the tour</Link>
          </Button>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-4xl px-5 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-[2rem] border bg-card/70 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-10"
        >
          {/* Product slot — replace with an app screenshot. */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Moon, label: "Wind down", value: "9:40 pm", pct: 86 },
              { icon: Sun, label: "Morning light", value: "12 min", pct: 64 },
              { icon: Wind, label: "Breathwork", value: "4 of 5 days", pct: 80 },
            ].map((h) => (
              <div key={h.label} className="rounded-3xl bg-secondary/60 p-5">
                <h.icon className="size-5 text-primary" />
                <p className="mt-3 text-sm text-muted-foreground">{h.label}</p>
                <p className="text-xl font-semibold">{h.value}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-background">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${h.pct}%` }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 hidden rounded-2xl border bg-card px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-xs text-muted-foreground">Calm streak</p>
            <p className="text-lg font-semibold text-primary">18 days 🌿</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
