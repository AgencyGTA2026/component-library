"use client"

import * as React from "react"
import { Check, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SUGGESTIONS = [
  "1420 Birchwood Ave, Maple Heights, OR 97214",
  "1422 Birchwood Ave, Maple Heights, OR 97214",
  "1420 Birchwood Ct, Maple Heights, OR 97215",
]

const STATES = ["OR", "WA", "CA", "ID", "NV", "AZ"]

/**
 * Address form — a service-address block with a lightweight autocomplete
 * affordance that fills the structured fields. Swap the static
 * suggestion list for a Places/Mapbox lookup.
 */
export function FormAddress() {
  const [query, setQuery] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const [filled, setFilled] = React.useState(false)
  const [fields, setFields] = React.useState({ street: "", city: "", state: "OR", zip: "" })

  const pick = (s: string) => {
    const [street, city, stateZip] = s.split(", ")
    const [st, zip] = stateZip.split(" ")
    setFields({ street, city, state: st, zip })
    setQuery(s)
    setOpen(false)
    setFilled(true)
  }

  return (
    <section className="grid min-h-[70vh] place-items-center bg-background px-5 py-20 text-foreground">
      <div className="w-full max-w-lg rounded-lg border-2 border-foreground bg-card p-6 sm:p-8">
        <h2 className="text-xl font-bold tracking-tight uppercase">Service address</h2>
        <p className="mt-1 text-sm text-muted-foreground">Where should the crew show up?</p>

        <div className="relative mt-6">
          <Label htmlFor="addr-search">Search address</Label>
          <div className="relative mt-2">
            <MapPin className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="addr-search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(e.target.value.length > 1); setFilled(false) }}
              placeholder="Start typing your address…"
              className="rounded-none border-2 border-foreground pl-9"
              autoComplete="off"
            />
            {filled && <Check className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-primary" />}
          </div>
          {open && (
            <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-none border-2 border-foreground bg-popover shadow-lg">
              {SUGGESTIONS.map((s) => (
                <li key={s}>
                  <button onClick={() => pick(s)} className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm hover:bg-secondary">
                    <MapPin className="size-4 shrink-0 text-muted-foreground" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <Field label="Street address" value={fields.street} onChange={(v) => setFields((f) => ({ ...f, street: v }))} placeholder="123 Main St" />
          <div className="grid grid-cols-[1fr_auto_auto] gap-3">
            <Field label="City" value={fields.city} onChange={(v) => setFields((f) => ({ ...f, city: v }))} placeholder="City" />
            <div className="space-y-2">
              <Label htmlFor="addr-state">State</Label>
              <select
                id="addr-state"
                value={fields.state}
                onChange={(e) => setFields((f) => ({ ...f, state: e.target.value }))}
                className="h-9 rounded-none border-2 border-foreground bg-background px-2 text-sm"
              >
                {STATES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <Field label="ZIP" value={fields.zip} onChange={(v) => setFields((f) => ({ ...f, zip: v }))} placeholder="00000" className="w-24" />
          </div>
        </div>

        <Button className="mt-7 w-full rounded-none border-2 border-foreground">Save address</Button>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  className,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  className?: string
}) {
  const id = React.useId()
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`rounded-none border-2 border-foreground ${className ?? ""}`} />
    </div>
  )
}
