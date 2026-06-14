"use client"

import * as React from "react"
import { CalendarCheck, Check, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SERVICES = ["Inspection", "Repair", "Installation", "Maintenance"]
const TIMES = ["8:00 am", "10:00 am", "12:00 pm", "2:00 pm", "4:00 pm"]

function nextDays(count: number) {
  const out: { label: string; date: number; dow: string; full: string }[] = []
  const d = new Date()
  const fmt = new Intl.DateTimeFormat("en-US", { weekday: "short" })
  const long = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" })
  for (let i = 1; out.length < count; i++) {
    const day = new Date(d)
    day.setDate(d.getDate() + i)
    if (day.getDay() === 0) continue // skip Sundays
    out.push({ label: fmt.format(day), date: day.getDate(), dow: fmt.format(day), full: long.format(day) })
  }
  return out
}

/**
 * Booking scheduler — pick a service, day, and time slot, then confirm.
 * Self-contained demo state; wire `onConfirm` to your calendar/API.
 */
export function BookingScheduler() {
  const days = React.useMemo(() => nextDays(6), [])
  const [service, setService] = React.useState(SERVICES[0])
  const [day, setDay] = React.useState(0)
  const [time, setTime] = React.useState<string | null>(null)
  const [booked, setBooked] = React.useState(false)

  if (booked) {
    return (
      <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
        <div className="mx-auto max-w-md rounded-2xl border bg-card p-10 text-center">
          <CalendarCheck className="mx-auto size-12 text-primary" strokeWidth={1.5} />
          <h2 className="mt-4 text-2xl font-semibold">You&apos;re on the schedule</h2>
          <p className="mt-2 text-muted-foreground">
            {service} on <strong className="text-foreground">{days[day].full}</strong> at{" "}
            <strong className="text-foreground">{time}</strong>. We&apos;ll text a
            confirmation shortly.
          </p>
          <Button variant="outline" className="mt-6" onClick={() => setBooked(false)}>
            Book another
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="font-semibold text-primary">Book online</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Grab a time that works for you.
          </h2>
        </div>

        <div className="space-y-7 rounded-2xl border bg-card p-6 sm:p-8">
          <div>
            <p className="mb-3 text-sm font-semibold">Service</p>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className={cn(
                    "rounded-lg border px-4 py-2 text-sm transition-colors",
                    service === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "hover:border-foreground/40"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Day</p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {days.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setDay(i)}
                  className={cn(
                    "flex flex-col items-center rounded-lg border py-3 transition-colors",
                    day === i ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/40"
                  )}
                >
                  <span className="text-xs uppercase opacity-70">{d.dow}</span>
                  <span className="text-lg font-semibold">{d.date}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Clock className="size-4" />
              Time
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {TIMES.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={cn(
                    "rounded-lg border py-2.5 text-sm transition-colors",
                    time === t ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/40"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="w-full"
            disabled={!time}
            onClick={() => setBooked(true)}
          >
            {time ? (
              <>
                <Check className="size-4" />
                Confirm {service.toLowerCase()} · {days[day].dow} {days[day].date}, {time}
              </>
            ) : (
              "Pick a time to continue"
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
