import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const POSTS = [
  { cat: "Movement", title: "Five minutes of mobility before coffee", read: "4 min", featured: true },
  { cat: "Wellbeing", title: "Why we made the studio phone-free", read: "3 min" },
  { cat: "Nutrition", title: "Eating to recover, not to restrict", read: "6 min" },
  { cat: "Studio", title: "Meet the teachers behind Méthode", read: "5 min" },
]

/**
 * Studio journal — a soft serif featured post beside a quiet hairline list.
 */
export function ContentStudio() {
  const [lead, ...rest] = POSTS
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight">The Journal</h2>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            All entries
          </Link>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Link href="#" className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-secondary">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(201,142,134,0.32),transparent_60%)]" />
              <span className="absolute top-4 left-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">{lead.cat}</span>
            </div>
            <h3 className="mt-6 font-serif text-3xl leading-tight tracking-tight transition-colors group-hover:text-primary">
              {lead.title}
            </h3>
            <p className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground">{lead.read} read</p>
          </Link>

          <div className="divide-y divide-border border-y border-border">
            {rest.map((p) => (
              <Link key={p.title} href="#" className="group flex items-start justify-between gap-4 py-6">
                <div>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-primary">{p.cat}</span>
                  <p className="mt-2 font-serif text-xl leading-snug transition-colors group-hover:text-primary">{p.title}</p>
                  <p className="mt-2 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{p.read}</p>
                </div>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
