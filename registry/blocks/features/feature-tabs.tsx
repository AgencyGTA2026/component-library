"use client"

import { BarChart3, Bell, CalendarDays, Users } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TABS = [
  {
    id: "schedule",
    label: "Scheduling",
    icon: CalendarDays,
    title: "Dispatch jobs without the whiteboard.",
    body: "Drag-and-drop crews onto the calendar, see conflicts before they happen, and text customers an arrival window automatically.",
    bullets: ["Drag-and-drop dispatch", "Automatic arrival texts", "Route-optimized days"],
  },
  {
    id: "team",
    label: "Team",
    icon: Users,
    title: "Everyone knows where to be.",
    body: "Field techs get the day on their phone — address, notes, photos, and checklists — so nobody calls the office asking what's next.",
    bullets: ["Mobile job cards", "Photo + note capture", "Time tracking built in"],
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    title: "Know which jobs actually make money.",
    body: "Revenue, cost, and margin per job, per crew, per service line. Stop guessing which work is worth taking.",
    bullets: ["Margin by job type", "Crew productivity", "Exportable to your books"],
  },
  {
    id: "alerts",
    label: "Alerts",
    icon: Bell,
    title: "Get nudged before things slip.",
    body: "Overdue invoices, unconfirmed appointments, and warranty follow-ups surface on their own. Nothing falls through.",
    bullets: ["Overdue invoice flags", "Follow-up reminders", "Review requests on autopilot"],
  },
]

/**
 * Feature tabs — a tabbed product showcase with an icon rail and a
 * media panel per tab. Great for software and ops-heavy services.
 */
export function FeatureTabs() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="font-semibold text-primary">One place to run the work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Everything between the call and the invoice.
          </h2>
        </div>

        <Tabs defaultValue="schedule" className="gap-8">
          <TabsList className="mx-auto flex h-auto w-fit max-w-full flex-wrap gap-1 bg-secondary p-1.5">
            {TABS.map((t) => (
              <TabsTrigger key={t.id} value={t.id} className="gap-2 px-4 py-2">
                <t.icon className="size-4" />
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((t) => (
            <TabsContent key={t.id} value={t.id} className="mt-0">
              <div className="grid items-center gap-8 rounded-2xl border bg-card p-7 sm:p-10 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-primary/15 to-secondary">
                  <t.icon className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-primary/40" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
