"use client"

import * as React from "react"
import { BellOff, CalendarHeart, CloudMoon, HeartHandshake, Sprout } from "lucide-react"

const FEATURES = [
  {
    icon: Sprout,
    title: "Gentle streaks",
    body: "Miss a day? Your streak bends instead of breaking. Two grace days a week, always.",
    span: "lg:col-span-2",
  },
  {
    icon: BellOff,
    title: "Quiet hours",
    body: "No pings after dusk. Driftwell sleeps when you do.",
    span: "",
  },
  {
    icon: CloudMoon,
    title: "Sleep stories",
    body: "Wind-down audio that fades out when you do.",
    span: "",
  },
  {
    icon: CalendarHeart,
    title: "Weekly letters",
    body: "A Sunday note about your week — written like a friend, not a dashboard.",
    span: "lg:col-span-2",
  },
  {
    icon: HeartHandshake,
    title: "Shared circles",
    body: "Invite up to five people. Encourage, never compete: there are no leaderboards here.",
    span: "lg:col-span-3 sm:col-span-2",
  },
]

/**
 * Soft bento — rounded glass cards with a cursor-tracking spotlight that
 * follows the pointer across each cell.
 */
export function BentoSoft() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="font-medium text-primary">Why Driftwell</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Softer by design, in every detail.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <SpotlightCard key={f.title} className={f.span}>
              <span className="inline-grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpotlightCard({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <article
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect()
        ref.current!.style.setProperty("--spot-x", `${e.clientX - rect.left}px`)
        ref.current!.style.setProperty("--spot-y", `${e.clientY - rect.top}px`)
      }}
      className={`group relative overflow-hidden rounded-[1.75rem] border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </article>
  )
}
