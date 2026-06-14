const TILES = [
  { label: "Fig. 01", color: "#d9f526", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Fig. 02", color: "#0c0c0c", span: "" },
  { label: "Fig. 03", color: "#e11d48", span: "" },
  { label: "Fig. 04", color: "#0c0c0c", span: "" },
  { label: "Fig. 05", color: "#d9f526", span: "" },
]

const LOGOS = ["TONNE", "STAK", "GRIDLOCK", "MONOLITH", "BRUT&CO", "HARDSET"]

/**
 * Brutal gallery — a bordered work grid over a marquee-free logo wall.
 */
export function MediaBrutal() {
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-tighter uppercase">
          Selected work.
        </h2>

        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:grid-cols-4">
          {TILES.map((t) => (
            <div
              key={t.label}
              className={`group relative border-2 border-foreground ${t.span}`}
              style={{ backgroundColor: t.color }}
            >
              <span className="absolute bottom-2 left-2 border-2 border-foreground bg-background px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                {t.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 border-2 border-foreground sm:grid-cols-3 lg:grid-cols-6">
          {LOGOS.map((l) => (
            <div
              key={l}
              className="border-foreground p-5 text-center font-black uppercase [&:not(:last-child)]:border-r-2"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
