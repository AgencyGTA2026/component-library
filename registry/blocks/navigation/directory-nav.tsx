"use client"

import * as React from "react"
import Link from "next/link"
import {
  Activity,
  Baby,
  Bone,
  Brain,
  Ear,
  Eye,
  Heart,
  Search,
  Stethoscope,
} from "lucide-react"

import { Input } from "@/components/ui/input"

const DEPARTMENTS = [
  { icon: Heart, name: "Cardiology", desc: "Heart & vascular care", href: "#" },
  { icon: Brain, name: "Neurology", desc: "Brain & nervous system", href: "#" },
  { icon: Bone, name: "Orthopedics", desc: "Bones, joints & muscles", href: "#" },
  { icon: Eye, name: "Ophthalmology", desc: "Eye & vision care", href: "#" },
  { icon: Ear, name: "ENT", desc: "Ear, nose & throat", href: "#" },
  { icon: Baby, name: "Pediatrics", desc: "Care for kids", href: "#" },
  { icon: Activity, name: "Emergency", desc: "24/7 urgent care", href: "#" },
  { icon: Stethoscope, name: "Primary care", desc: "Everyday checkups", href: "#" },
]

/**
 * Directory nav — a searchable, categorized link grid for sites with
 * many sections (clinic departments, service lines, locations, help
 * topics). Filters live as you type.
 */
export function DirectoryNav() {
  const [q, setQ] = React.useState("")
  const shown = DEPARTMENTS.filter((d) =>
    (d.name + d.desc).toLowerCase().includes(q.toLowerCase())
  )

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Find your department
            </h2>
            <p className="mt-2 text-muted-foreground">Browse care by specialty, or search below.</p>
          </div>
          <div className="relative w-full max-w-xs">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search departments…" className="pl-9" />
          </div>
        </div>

        {shown.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">No departments match “{q}”.</p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {shown.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="group flex items-center gap-3 rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <d.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{d.name}</span>
                  <span className="block text-xs text-muted-foreground">{d.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
