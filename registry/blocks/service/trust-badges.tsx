import { Award, BadgeCheck, CalendarClock, CreditCard, ShieldCheck, Star } from "lucide-react"

const BADGES = [
  { icon: ShieldCheck, stat: "Licensed", label: "Bonded & insured" },
  { icon: CalendarClock, stat: "25 yrs", label: "In business locally" },
  { icon: Star, stat: "4.9★", label: "600+ reviews" },
  { icon: BadgeCheck, stat: "10-yr", label: "Workmanship warranty" },
  { icon: CreditCard, stat: "0% APR", label: "Financing available" },
  { icon: Award, stat: "A+", label: "BBB accredited" },
]

/**
 * Trust badges — a credentials band of license, experience, rating,
 * warranty, financing, and accreditation. The bar that closes deals.
 */
export function TrustBadges() {
  return (
    <section className="border-y bg-card px-5 py-10 text-card-foreground sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
        {BADGES.map((b) => (
          <div
            key={b.label}
            className="flex flex-col items-center gap-2 text-center lg:border-l lg:first:border-l-0"
          >
            <b.icon className="size-7 text-accent" strokeWidth={1.75} />
            <p className="text-xl font-bold tracking-tight">{b.stat}</p>
            <p className="text-xs leading-tight text-muted-foreground">{b.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
