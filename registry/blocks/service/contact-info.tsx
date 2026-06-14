import { Clock, Mail, MapPin, Phone } from "lucide-react"

const HOURS = [
  { day: "Mon – Fri", time: "7:00am – 7:00pm" },
  { day: "Saturday", time: "8:00am – 4:00pm" },
  { day: "Sunday", time: "Emergencies only" },
]

/**
 * Contact info — name / address / phone / hours over a map panel. The
 * local-business "NAP" block search engines and customers both want.
 */
export function ContactInfo() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border lg:grid-cols-2">
        <div className="bg-card p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Stop by, or we&apos;ll come to you.
          </h2>

          <dl className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="size-5 shrink-0 text-primary" />
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Office</dt>
                <dd className="mt-0.5">
                  1420 Birchwood Ave, Suite 5<br />
                  Maple Heights, OR 97214
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="size-5 shrink-0 text-primary" />
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Phone</dt>
                <dd className="mt-0.5">
                  <a href="tel:+15551234567" className="hover:text-primary">
                    (555) 123-4567
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="size-5 shrink-0 text-primary" />
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                <dd className="mt-0.5">
                  <a href="mailto:hello@calderhome.com" className="hover:text-primary">
                    hello@calderhome.com
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="size-5 shrink-0 text-primary" />
              <div className="w-full">
                <dt className="text-sm font-medium text-muted-foreground">Hours</dt>
                <dd className="mt-1.5 space-y-1">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8 text-sm">
                      <span>{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="relative min-h-72 bg-secondary">
          {/* Map slot — replace with a Google Maps embed. */}
          <div className="absolute inset-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <MapPin className="size-5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
