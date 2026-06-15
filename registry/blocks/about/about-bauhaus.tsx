import { Hammer, PenTool, Layers, Eye } from "lucide-react"

const VALUES = [
  { icon: PenTool, title: "Unity of the arts", body: "Craft and design are one trade. The chair, the type, and the building obey the same rules.", color: "bg-primary text-primary-foreground" },
  { icon: Hammer, title: "Learn by making", body: "The workshop is the classroom. You understand a material once your hands have ruined some.", color: "bg-accent" },
  { icon: Layers, title: "Honest construction", body: "Show how it is made. Decoration that hides the join is a small kind of lie.", color: "bg-secondary text-secondary-foreground" },
  { icon: Eye, title: "Form follows function", body: "Beauty is what is left when nothing useless remains. Start from the job, not the style.", color: "bg-card" },
]

/**
 * Bauhaus about — principles as flat-color cells over a thick keyline grid.
 */
export function AboutBauhaus() {
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">The manifesto</p>
        <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.92] tracking-tighter uppercase">
          Four principles, one school.
        </h2>

        <div className="mt-10 grid gap-0 border-2 border-foreground sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body, color }, i) => (
            <div
              key={title}
              className={`border-foreground p-6 ${color} ${
                i < VALUES.length - 1 ? "border-b-2 lg:border-b-0" : ""
              } sm:[&:nth-child(odd)]:border-r-2 lg:[&:not(:last-child)]:border-r-2`}
            >
              <Icon className="size-7" />
              <p className="mt-5 text-lg font-black uppercase">{title}</p>
              <p className="mt-2 font-medium leading-relaxed opacity-85">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
