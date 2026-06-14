import Link from "next/link"
import { CalendarPlus, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

const NEXT_STEPS = [
  { icon: Mail, title: "Check your inbox", body: "A confirmation and prep checklist are on the way." },
  { icon: Phone, title: "We may call", body: "Our team confirms details the day before." },
  { icon: MapPin, title: "Plan your visit", body: "Parking is free; enter through the north door." },
]

/**
 * Thank-you / confirmation — the page after a booking, quote, or form
 * submit. Shows the appointment summary, next steps, and a calendar add.
 */
export function ThankYou() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto w-full max-w-xl text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-9" strokeWidth={1.75} />
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          You&apos;re all set, Jordan.
        </h1>
        <p className="mt-3 text-muted-foreground">
          Your appointment is booked. We&apos;ve emailed a confirmation to
          jordan@email.com.
        </p>

        <div className="mt-8 rounded-2xl border bg-card p-6 text-left">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-muted-foreground">Appointment</p>
              <p className="text-lg font-semibold">Consultation · Dr. Okafor</p>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">
              <Clock className="size-4" />
              Tue, Jun 18 · 10:00 AM
            </span>
          </div>
          <Button className="mt-5 w-full" variant="outline">
            <CalendarPlus className="size-4" />
            Add to calendar
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {NEXT_STEPS.map((s) => (
            <div key={s.title} className="rounded-xl border bg-card p-4 text-left">
              <s.icon className="size-5 text-primary" />
              <p className="mt-3 text-sm font-semibold">{s.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild><Link href="#home">Back to home</Link></Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Need to reschedule? <Link href="#" className="text-primary underline underline-offset-4">Manage your booking</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
