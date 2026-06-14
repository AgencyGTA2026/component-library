const LOGOS = [
  "Northwind",
  "Lumen",
  "Pinewood",
  "Vertex",
  "Almanac",
  "Soapbox",
  "Cobalt",
  "Maple & Co",
  "Driftwell",
  "Quantive",
]

/**
 * Logo cloud — a quiet "trusted by" band. Swap the text wordmarks for
 * client <img> logos; the muted treatment keeps them from shouting.
 */
export function LogoCloud() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by teams who&apos;ve outgrown the template.
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-center font-serif text-xl font-semibold tracking-tight text-muted-foreground/50 transition-colors hover:text-foreground"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
