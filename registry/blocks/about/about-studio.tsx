import { Leaf, Heart, Hand, Sparkles } from "lucide-react"

const VALUES = [
  { icon: Hand, title: "Hands-on, always", body: "Real cues, real corrections. We teach the body in front of us, not a routine on a card." },
  { icon: Leaf, title: "Calm by design", body: "Soft light, quiet rooms, unhurried tempo. The studio should lower your shoulders the moment you walk in." },
  { icon: Heart, title: "Every body welcome", body: "Beginners, post-natal, returning from injury. We meet you where you are and move from there." },
  { icon: Sparkles, title: "Progress you can feel", body: "Not before-and-afters — the quiet wins. Standing taller, sleeping better, moving easier." },
]

/**
 * Studio about — values as soft hairline cards with quiet blush icons.
 */
export function AboutStudio() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] uppercase text-primary">What we believe</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            A studio built around how you feel, not how you look.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <p className="mt-5 font-serif text-lg">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
