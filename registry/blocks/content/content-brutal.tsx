import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const POSTS = [
  { cat: "Process", title: "Why we quote fixed-price, always", read: "5 min", featured: true },
  { cat: "Design", title: "Borders are back and we never left", read: "4 min" },
  { cat: "Build", title: "Shipping a marketing site in 14 days", read: "7 min" },
  { cat: "Opinion", title: "Stop A/B testing your hero forever", read: "3 min" },
]

/**
 * Brutal blog grid — one screaming featured post over a bordered list.
 */
export function ContentBrutal() {
  const [lead, ...rest] = POSTS
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-tighter uppercase">
          From the desk.
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Link
            href="#"
            className="group flex flex-col justify-between border-2 border-foreground bg-accent p-6 shadow-[8px_8px_0_0_var(--foreground)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_0_var(--foreground)] sm:p-8"
          >
            <span className="w-fit border-2 border-foreground bg-background px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
              {lead.cat}
            </span>
            <div className="mt-16">
              <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-black leading-[0.95] tracking-tight uppercase">
                {lead.title}
              </h3>
              <p className="mt-4 flex items-center gap-2 font-mono text-xs font-bold uppercase">
                {lead.read} read <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </p>
            </div>
          </Link>

          <div className="grid border-2 border-foreground">
            {rest.map((p) => (
              <Link
                key={p.title}
                href="#"
                className="group flex flex-col justify-center border-foreground p-5 transition-colors not-last:border-b-2 hover:bg-foreground hover:text-background"
              >
                <span className="font-mono text-[10px] font-bold uppercase text-muted-foreground group-hover:text-background/60">
                  {p.cat} · {p.read}
                </span>
                <p className="mt-1 text-lg font-black uppercase leading-tight">{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
