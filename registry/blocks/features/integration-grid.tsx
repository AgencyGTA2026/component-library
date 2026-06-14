import {
  Calendar,
  CreditCard,
  Database,
  Hash,
  Mail,
  MessageSquare,
  Phone,
  Receipt,
} from "lucide-react"

const INTEGRATIONS = [
  { icon: CreditCard, name: "Stripe", category: "Payments" },
  { icon: Mail, name: "Mailchimp", category: "Email" },
  { icon: Hash, name: "Slack", category: "Comms" },
  { icon: Calendar, name: "Google Cal", category: "Scheduling" },
  { icon: Receipt, name: "QuickBooks", category: "Accounting" },
  { icon: MessageSquare, name: "Twilio", category: "SMS" },
  { icon: Database, name: "Airtable", category: "Data" },
  { icon: Phone, name: "Aircall", category: "Voice" },
]

/**
 * Integration grid — connect-your-stack tiles with hover lift. Swap the
 * lucide glyphs for real brand logos when you have them.
 */
export function IntegrationGrid() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="font-semibold text-primary">Plays nicely with others</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Connect the tools you already pay for.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INTEGRATIONS.map((it) => (
            <div
              key={it.name}
              className="group flex items-center gap-3 rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{it.name}</span>
                <span className="block text-xs text-muted-foreground">{it.category}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
