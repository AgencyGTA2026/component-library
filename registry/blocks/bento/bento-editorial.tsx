import { ArrowUpRight, Compass, Layers, PenTool, Type } from "lucide-react"

const CAPABILITIES = [
  {
    icon: Compass,
    title: "Brand strategy",
    body: "Positioning workshops that end with a point of view, not a word cloud.",
    span: "md:col-span-3",
    num: "01",
  },
  {
    icon: Type,
    title: "Identity & typography",
    body: "Wordmarks, type systems, and the restraint to stop at enough.",
    span: "md:col-span-2",
    num: "02",
  },
  {
    icon: PenTool,
    title: "Editorial design",
    body: "Layouts with the pacing of a well-edited magazine.",
    span: "md:col-span-2",
    num: "03",
  },
  {
    icon: Layers,
    title: "Web design & build",
    body: "Design and engineering in the same room, shipping the same site. Performance budgets included.",
    span: "md:col-span-3",
    num: "04",
  },
]

/**
 * Editorial bento — an asymmetric 3/2 — 2/3 capability grid with figure
 * numbers and hover-revealed arrows. Quietly confident, no gimmicks.
 */
export function BentoEditorial() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Four disciplines, <em className="text-primary">one</em> conversation.
          </h2>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Capabilities — 2025
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border bg-border md:grid-cols-5">
          {CAPABILITIES.map((cap) => (
            <article
              key={cap.title}
              className={`group relative flex min-h-56 flex-col justify-between bg-background p-7 transition-colors hover:bg-card ${cap.span}`}
            >
              <div className="flex items-start justify-between">
                <cap.icon className="size-6 text-primary" strokeWidth={1.5} />
                <span className="font-mono text-xs text-muted-foreground">
                  {cap.num}
                </span>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-serif text-2xl tracking-tight">
                  {cap.title}
                  <ArrowUpRight className="size-4 -translate-x-1 translate-y-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {cap.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
