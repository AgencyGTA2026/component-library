import { Heart, Leaf, Sun, Users } from "lucide-react"

const VALUES = [
  { icon: Sun, title: "Made for good days", body: "We build the drink you reach for when the sun's out and plans are loose.", color: "bg-accent" },
  { icon: Leaf, title: "Kind to the planet", body: "Recyclable cans, real ingredients, suppliers we actually visit.", color: "bg-secondary text-secondary-foreground" },
  { icon: Users, title: "Small, loud team", body: "Nine humans in one bright room, mixing flavors and arguing about color.", color: "bg-primary text-primary-foreground" },
  { icon: Heart, title: "No weird stuff", body: "If we can't pronounce it, it doesn't go in. Simple as that.", color: "bg-card" },
]

/**
 * Retro about — values as bright rounded cards with sticker icons.
 */
export function AboutRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-black tracking-[0.2em] uppercase text-primary">Who we are</p>
        <h2 className="mt-3 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] font-black leading-[0.95] tracking-tight">
          A soda company that takes fun seriously.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body, color }) => (
            <div
              key={title}
              className={`rounded-[1.5rem] border-2 border-foreground p-6 shadow-[5px_5px_0_0_var(--foreground)] ${color}`}
            >
              <span className="grid size-12 place-items-center rounded-2xl border-2 border-foreground bg-card text-foreground">
                <Icon className="size-6" />
              </span>
              <p className="mt-4 text-lg font-black">{title}</p>
              <p className="mt-1.5 text-sm font-medium opacity-80">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
