import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const POSTS = [
  { cat: "Theory", title: "Why the grid sets you free", read: "6 min", color: "bg-primary text-primary-foreground" },
  { cat: "Type", title: "Universal: the alphabet of a movement", read: "5 min", color: "bg-accent" },
  { cat: "Colour", title: "Red, blue, yellow — and nothing else", read: "4 min", color: "bg-secondary text-secondary-foreground" },
]

/**
 * Bauhaus journal — flat color cards with hard category labels.
 */
export function ContentBauhaus() {
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-foreground pb-5">
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black uppercase tracking-tighter">The Bulletin</h2>
          <Link href="#" className="text-sm font-bold uppercase underline decoration-2 underline-offset-4">
            All issues
          </Link>
        </div>

        <div className="mt-8 grid gap-0 border-2 border-foreground sm:grid-cols-3">
          {POSTS.map((p, i) => (
            <Link
              key={p.title}
              href="#"
              className={`group flex min-h-[280px] flex-col justify-between border-foreground p-6 ${p.color} ${
                i < POSTS.length - 1 ? "border-b-2 sm:border-b-0 sm:[&:not(:last-child)]:border-r-2" : ""
              }`}
            >
              <span className="w-fit border-2 border-foreground bg-background px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-foreground">
                {p.cat}
              </span>
              <div>
                <h3 className="text-2xl font-black uppercase leading-[0.95]">{p.title}</h3>
                <p className="mt-3 flex items-center gap-1 text-sm font-bold uppercase">
                  {p.read} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
