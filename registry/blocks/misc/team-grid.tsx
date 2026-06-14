import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const TEAM = [
  { name: "June Okafor", role: "Creative Director", initials: "JO", hue: "bg-chart-1" },
  { name: "Theo Lindqvist", role: "Design Lead", initials: "TL", hue: "bg-chart-2" },
  { name: "Mara Castillo", role: "Engineering Lead", initials: "MC", hue: "bg-chart-3" },
  { name: "Felix Adeyemi", role: "Strategy", initials: "FA", hue: "bg-chart-4" },
  { name: "Ines Baptiste", role: "Producer", initials: "IB", hue: "bg-chart-5" },
  { name: "You?", role: "We're hiring", initials: "+", hue: "bg-muted-foreground/50", hiring: true },
]

/**
 * Team grid — portrait slots (CSS placeholders — swap in photos), names
 * on hover-lift cards, and a built-in hiring tile.
 */
export function TeamGrid() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            The studio
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Small on purpose. Senior by default.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM.map((person) =>
            person.hiring ? (
              <Link
                key={person.name}
                href="#careers"
                className="group flex flex-col rounded-lg border border-dashed p-4 transition-colors hover:border-primary"
              >
                <div className="grid aspect-[3/4] place-items-center rounded-md bg-muted text-4xl text-muted-foreground transition-colors group-hover:text-primary">
                  +
                </div>
                <p className="mt-3 flex items-center gap-1 text-sm font-medium">
                  {person.role}
                  <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
                <p className="text-xs text-muted-foreground">Open roles →</p>
              </Link>
            ) : (
              <div key={person.name} className="group">
                {/* Portrait slot — replace the div with next/image. */}
                <div
                  className={`grid aspect-[3/4] place-items-center rounded-lg ${person.hue} text-3xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-1.5`}
                >
                  {person.initials}
                </div>
                <p className="mt-3 text-sm font-medium">{person.name}</p>
                <p className="text-xs text-muted-foreground">{person.role}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
