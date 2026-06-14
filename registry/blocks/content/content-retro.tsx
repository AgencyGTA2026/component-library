import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const POSTS = [
  { cat: "Recipes", title: "5 spritzes to make with Citrus Pop", read: "4 min", color: "bg-accent" },
  { cat: "Behind the can", title: "How we mix a flavor (it takes 40 tries)", read: "6 min", color: "bg-secondary text-secondary-foreground" },
  { cat: "Stockists", title: "We just landed in 200 new stores", read: "2 min", color: "bg-primary text-primary-foreground" },
]

/**
 * Retro blog grid — rounded color cards with a sticker category tag.
 */
export function ContentRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">The Fizz Journal</h2>
          <Link href="#" className="font-bold underline decoration-2 underline-offset-4">
            All posts
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.title}
              href="#"
              className={`group flex min-h-[300px] flex-col justify-between rounded-[1.75rem] border-2 border-foreground p-6 shadow-[5px_5px_0_0_var(--foreground)] transition-transform hover:-translate-y-1 ${p.color}`}
            >
              <span className="w-fit rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-black text-foreground">
                {p.cat}
              </span>
              <div>
                <h3 className="text-2xl font-black leading-tight">{p.title}</h3>
                <p className="mt-3 flex items-center gap-1 text-sm font-bold">
                  {p.read} read
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
