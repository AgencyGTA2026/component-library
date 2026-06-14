"use client"

import * as React from "react"
import { CheckCircle2, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const SERVICES = ["Roof replacement", "Roof repair", "Inspection", "Gutters", "Storm damage"]
const TIMELINES = ["Emergency", "This month", "1–3 months", "Just researching"]
const PROPERTY = ["Single-family", "Multi-family", "Commercial"]

/**
 * Request for quote — a structured, multi-section RFQ for trades. More
 * detailed than a contact form; collects everything needed to bid.
 */
export function FormRfq() {
  const [service, setService] = React.useState<string[]>(["Roof replacement"])
  const [timeline, setTimeline] = React.useState(TIMELINES[1])
  const [property, setProperty] = React.useState(PROPERTY[0])
  const [sent, setSent] = React.useState(false)

  const toggleService = (s: string) =>
    setService((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))

  if (sent) {
    return (
      <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
        <div className="mx-auto max-w-md rounded-lg border bg-card p-10 text-center">
          <CheckCircle2 className="mx-auto size-12 text-primary" strokeWidth={1.5} />
          <h2 className="mt-4 text-2xl font-bold">Request received</h2>
          <p className="mt-2 text-muted-foreground">
            We&apos;ll review the details and get you a written estimate within
            one business day.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            <FileText className="size-4" />
            Request a quote
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tell us about the job.
          </h2>
        </div>

        <form className="space-y-8 rounded-lg border bg-card p-6 sm:p-8" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <Section title="What do you need? (select all that apply)">
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <Chip key={s} active={service.includes(s)} onClick={() => toggleService(s)}>{s}</Chip>
              ))}
            </div>
          </Section>

          <Section title="Property type">
            <div className="flex flex-wrap gap-2">
              {PROPERTY.map((p) => (
                <Chip key={p} active={property === p} onClick={() => setProperty(p)}>{p}</Chip>
              ))}
            </div>
          </Section>

          <Section title="Timeline">
            <div className="flex flex-wrap gap-2">
              {TIMELINES.map((t) => (
                <Chip key={t} active={timeline === t} onClick={() => setTimeline(t)}>{t}</Chip>
              ))}
            </div>
          </Section>

          <Section title="Project address">
            <Input placeholder="Street, city, ZIP" />
          </Section>

          <Section title="Details">
            <Textarea rows={4} placeholder="Roof age, square footage, what you're seeing (leaks, missing shingles)…" />
          </Section>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="rfq-name">Name</Label>
              <Input id="rfq-name" placeholder="Ada Lovelace" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rfq-phone">Phone</Label>
              <Input id="rfq-phone" type="tel" placeholder="(555) 123-4567" />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">Send request</Button>
        </form>
      </div>
    </section>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold">{title}</p>
      {children}
    </div>
  )
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md border px-3.5 py-2 text-sm transition-colors",
        active ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/40"
      )}
    >
      {children}
    </button>
  )
}
