import { Clock, Phone, ShieldCheck } from "lucide-react"

/**
 * Click-to-call CTA — a phone-forward banner for urgent service work,
 * with a tappable number, hours, and a 24/7 emergency note. Swap the
 * tel: number for the client's tracking line.
 */
export function CtaCall() {
  return (
    <section className="bg-primary px-5 py-16 text-primary-foreground sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-accent md:justify-start">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            Crews available now
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Burst pipe? No heat? Call and we&apos;ll roll a truck.
          </h2>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80 md:justify-start">
            <span className="flex items-center gap-2">
              <Clock className="size-4" />
              24/7 emergency service
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4" />
              Upfront pricing
            </span>
          </div>
        </div>

        <a
          href="tel:+15551234567"
          className="group flex shrink-0 items-center gap-4 rounded-xl bg-accent px-7 py-5 text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <Phone className="size-8 transition-transform group-hover:rotate-12" />
          <span className="text-left">
            <span className="block text-xs font-semibold tracking-widest uppercase opacity-80">
              Call now
            </span>
            <span className="block text-2xl font-bold tracking-tight">
              (555) 123-4567
            </span>
          </span>
        </a>
      </div>
    </section>
  )
}
