import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const POSTS = [
  { cat: "Heritage", title: "The four cuts that defined a century", read: "8 min", featured: true },
  { cat: "Atelier", title: "Inside the setting room", read: "5 min" },
  { cat: "Stones", title: "Reading a diamond by candlelight", read: "6 min" },
  { cat: "Style", title: "How to wear gold after dark", read: "4 min" },
]

/**
 * Noir journal — a featured serif lead beside a hairline list of entries.
 */
export function ContentNoir() {
  const [lead, ...rest] = POSTS
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight">The Journal</h2>
          <Link href="#" className="text-sm tracking-wide text-muted-foreground hover:text-foreground">
            All entries
          </Link>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Link href="#" className="group">
            <div className="relative aspect-[16/10] border border-border bg-[radial-gradient(circle_at_40%_30%,#241f17,transparent_70%)]">
              <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] uppercase text-primary">
                {lead.cat}
              </span>
            </div>
            <h3 className="mt-6 font-serif text-3xl leading-tight tracking-tight transition-colors group-hover:text-primary">
              {lead.title}
            </h3>
            <p className="mt-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">{lead.read} read</p>
          </Link>

          <div className="divide-y divide-border border-y border-border">
            {rest.map((p) => (
              <Link key={p.title} href="#" className="group flex items-start justify-between gap-4 py-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">{p.cat}</span>
                  <p className="mt-2 font-serif text-xl leading-snug transition-colors group-hover:text-primary">{p.title}</p>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{p.read}</p>
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
