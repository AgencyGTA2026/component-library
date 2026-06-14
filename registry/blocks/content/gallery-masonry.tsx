import { Badge } from "@/components/ui/badge"

const PROJECTS = [
  { title: "Backyard transformation", tag: "Hardscape", span: "row-span-2", hue: "from-primary/30 to-primary/10" },
  { title: "Drought-tolerant front yard", tag: "Planting", span: "", hue: "from-accent/30 to-accent/10" },
  { title: "Paver patio & fire pit", tag: "Hardscape", span: "", hue: "from-secondary to-background" },
  { title: "Cedar privacy screen", tag: "Carpentry", span: "row-span-2", hue: "from-primary/20 to-secondary" },
  { title: "Full irrigation install", tag: "Systems", span: "", hue: "from-accent/20 to-background" },
  { title: "Spring cleanup & mulch", tag: "Maintenance", span: "", hue: "from-primary/25 to-accent/10" },
]

/**
 * Gallery masonry — a staggered project grid with hover captions. Built
 * for portfolios and before/after showcases. Swap panels for photos.
 */
export function GalleryMasonry() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-semibold text-primary">Recent work</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
              Projects from around the neighborhood.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Hardscape", "Planting", "Maintenance"].map((f, i) => (
              <button
                key={f}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  i === 0 ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <figure
              key={p.title}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${p.hue} ${p.span}`}
            >
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Badge variant="secondary" className="mb-2">{p.tag}</Badge>
                <p className="font-semibold text-foreground drop-shadow-sm">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
