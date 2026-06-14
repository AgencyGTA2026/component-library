import Link from "next/link"
import { BadgeCheck, Camera, Clock, Mail, MapPin, Phone, ShieldCheck, Star, ThumbsUp } from "lucide-react"

const HOURS = [
  ["Mon – Fri", "7am – 7pm"],
  ["Saturday", "8am – 4pm"],
  ["Sunday", "Emergencies"],
] as const

const BADGES = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: BadgeCheck, label: "10-yr warranty" },
  { icon: Star, label: "4.9 ★ · 600+ reviews" },
]

/**
 * Local footer — the works for a service business: NAP, hours, quick
 * links, trust badges, socials, and an emergency call-out. Great SEO
 * footprint for local sites.
 */
export function FooterLocal() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold">Calder Home Services</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            1420 Birchwood Ave, Suite 5<br />Maple Heights, OR 97214
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <Phone className="size-4 shrink-0 text-primary" />
            <a href="tel:+15551234567" className="font-semibold hover:text-primary">(555) 123-4567</a>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <Mail className="size-4 shrink-0 text-primary" />
            <a href="mailto:hello@calderhome.com" className="hover:text-primary">hello@calderhome.com</a>
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Services</p>
          <ul className="space-y-2.5 text-sm">
            {["Heating & cooling", "Plumbing", "Electrical", "Water heaters", "Emergency repair"].map((s) => (
              <li key={s}>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 flex items-center gap-1.5 text-sm font-semibold">
            <Clock className="size-4" />
            Hours
          </p>
          <ul className="space-y-1.5 text-sm">
            {HOURS.map(([day, time]) => (
              <li key={day} className="flex justify-between gap-4">
                <span>{day}</span>
                <span className="text-muted-foreground">{time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <Link href="#" aria-label="Facebook" className="grid size-9 place-items-center rounded-full border transition-colors hover:bg-secondary">
              <ThumbsUp className="size-4" />
            </Link>
            <Link href="#" aria-label="Instagram" className="grid size-9 place-items-center rounded-full border transition-colors hover:bg-secondary">
              <Camera className="size-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          {BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-2.5 rounded-lg border bg-background px-3.5 py-2.5">
              <b.icon className="size-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-4 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Calder Home Services · CCB# 224180</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
