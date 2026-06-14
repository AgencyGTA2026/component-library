import { Star } from "lucide-react"

const REVIEWS = [
  { quote: "Tastes like summer in a can. My kids fight over the last one.", name: "Jess M.", color: "bg-accent" },
  { quote: "Finally a soda I don't feel weird about drinking daily.", name: "Andre P.", color: "bg-secondary text-secondary-foreground" },
  { quote: "The mango one is dangerous. I bought four cases.", name: "Lena K.", color: "bg-card" },
  { quote: "Brought it to a party and everyone asked where to buy it.", name: "Sam T.", color: "bg-primary text-primary-foreground" },
]

/**
 * Retro testimonials — bright rounded review cards with star ratings.
 */
export function TestimonialsRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">People are fizzing</h2>
          <div className="flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-4 py-1.5 font-black shadow-[3px_3px_0_0_var(--foreground)]">
            <Star className="size-4 fill-foreground" /> 4.9 · 48k reviews
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className={`flex flex-col justify-between rounded-[1.5rem] border-2 border-foreground p-6 shadow-[5px_5px_0_0_var(--foreground)] ${r.color}`}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg font-bold leading-snug">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-black">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
