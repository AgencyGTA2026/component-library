import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const POSTS = [
  {
    title: "Why your homepage hero is costing you leads",
    excerpt: "The fold is real estate. Most sites waste it on a stock photo and a slogan nobody reads.",
    tag: "Conversion",
    date: "May 28, 2026",
    read: "6 min",
    featured: true,
    hue: "from-primary/20 to-primary/5",
  },
  {
    title: "A pricing page teardown: 5 SaaS sites, ranked",
    excerpt: "What the best pricing pages do that the rest don't.",
    tag: "Pricing",
    date: "May 14, 2026",
    read: "9 min",
    hue: "from-accent/25 to-accent/5",
  },
  {
    title: "The fastest CMS is the one your client will actually use",
    excerpt: "Speed isn't just load time. It's how long until an edit goes live.",
    tag: "Build",
    date: "Apr 30, 2026",
    read: "5 min",
    hue: "from-secondary to-background",
  },
  {
    title: "Stop A/B testing button colors. Test the offer.",
    excerpt: "Micro-optimizations are a distraction from the thing that moves the needle.",
    tag: "Strategy",
    date: "Apr 18, 2026",
    read: "7 min",
    hue: "from-primary/15 to-secondary",
  },
]

/**
 * Blog grid — a featured lead post beside a stack of recent articles.
 * Replace the gradient thumbnails with cover images.
 */
export function BlogGrid() {
  const [lead, ...rest] = POSTS

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-4xl tracking-tight text-balance sm:text-5xl">
            From the journal
          </h2>
          <Link href="#blog" className="text-sm font-medium underline-offset-4 hover:underline">
            All articles →
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Link href="#post" className="group flex flex-col">
            <div className={`aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${lead.hue}`} />
            <div className="mt-5 flex items-center gap-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
              <span className="rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
                {lead.tag}
              </span>
              <span>{lead.date}</span>
              <span>· {lead.read}</span>
            </div>
            <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight text-balance transition-colors group-hover:text-primary sm:text-3xl">
              {lead.title}
            </h3>
            <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">{lead.excerpt}</p>
          </Link>

          <div className="flex flex-col divide-y">
            {rest.map((post) => (
              <Link key={post.title} href="#post" className="group flex gap-5 py-5 first:pt-0">
                <div className={`aspect-[4/3] w-32 shrink-0 rounded-lg bg-gradient-to-br ${post.hue}`} />
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                    <span>{post.tag}</span>
                    <span>· {post.read}</span>
                  </div>
                  <h3 className="mt-1.5 flex items-start gap-1 font-medium leading-snug text-balance transition-colors group-hover:text-primary">
                    {post.title}
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
