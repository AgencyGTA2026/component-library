"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TIMES = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"]
const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

/**
 * Date + time picker — a month calendar (past days and Sundays disabled)
 * beside time slots. For appointment and consultation booking. Returns
 * the chosen Date + time; wire confirm to your scheduler.
 */
export function FormDatePicker() {
  const today = React.useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d }, [])
  const [view, setView] = React.useState(() => new Date(today.getFullYear(), today.getMonth(), 1))
  const [selected, setSelected] = React.useState<Date | null>(null)
  const [time, setTime] = React.useState<string | null>(null)

  const year = view.getFullYear()
  const month = view.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthLabel = view.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  const cells: (Date | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ]

  const disabled = (d: Date) => d < today || d.getDay() === 0
  const sameDay = (a: Date | null, b: Date | null) => !!a && !!b && a.toDateString() === b.toDateString()

  return (
    <section className="grid min-h-[70vh] place-items-center bg-background px-5 py-20 text-foreground">
      <div className="w-full max-w-2xl rounded-2xl border bg-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight">Pick a date &amp; time</h2>
        <p className="mt-1 text-sm text-muted-foreground">Appointments are 45 minutes. Closed Sundays.</p>

        <div className="mt-6 grid gap-8 sm:grid-cols-[1fr_auto]">
          {/* calendar */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <button onClick={() => setView(new Date(year, month - 1, 1))} aria-label="Previous month" className="grid size-8 place-items-center rounded-md hover:bg-secondary">
                <ChevronLeft className="size-4" />
              </button>
              <p className="text-sm font-medium">{monthLabel}</p>
              <button onClick={() => setView(new Date(year, month + 1, 1))} aria-label="Next month" className="grid size-8 place-items-center rounded-md hover:bg-secondary">
                <ChevronRight className="size-4" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {DOW.map((d) => (
                <span key={d} className="py-1 text-xs font-medium text-muted-foreground">{d}</span>
              ))}
              {cells.map((d, i) =>
                d === null ? (
                  <span key={i} />
                ) : (
                  <button
                    key={i}
                    disabled={disabled(d)}
                    onClick={() => { setSelected(d); setTime(null) }}
                    className={cn(
                      "grid aspect-square place-items-center rounded-md text-sm tabular-nums transition-colors",
                      disabled(d) && "text-muted-foreground/30",
                      !disabled(d) && !sameDay(d, selected) && "hover:bg-secondary",
                      sameDay(d, selected) && "bg-primary text-primary-foreground"
                    )}
                  >
                    {d.getDate()}
                  </button>
                )
              )}
            </div>
          </div>

          {/* times */}
          <div className="sm:w-40">
            <p className="mb-3 flex items-center gap-1.5 text-sm font-medium">
              <Clock className="size-4" /> {selected ? selected.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) : "Select a day"}
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              {TIMES.map((t) => (
                <button
                  key={t}
                  disabled={!selected}
                  onClick={() => setTime(t)}
                  className={cn(
                    "rounded-lg border py-2 text-sm transition-colors disabled:opacity-40",
                    time === t ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/40"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button size="lg" className="mt-7 w-full" disabled={!selected || !time}>
          {selected && time ? `Confirm ${selected.toLocaleDateString("en-US", { month: "short", day: "numeric" })} at ${time}` : "Select a date and time"}
        </Button>
      </div>
    </section>
  )
}
