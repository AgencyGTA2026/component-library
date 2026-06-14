import Link from "next/link"
import { ArrowRight, Monitor } from "lucide-react"

import { BLOCKS, CATEGORIES, blocksFor } from "@/lib/registry-index"

const VIBES = [
  { id: "editorial", label: "Editorial", swatch: "#b3401f", note: "serif, whitespace, ink on cream" },
  { id: "brutal", label: "Brutal", swatch: "#d9f526", note: "borders, mono, hard shadows" },
  { id: "soft", label: "Soft", swatch: "#0f8a74", note: "rounded, glass, gradient calm" },
  { id: "landscape", label: "Landscape", swatch: "#3f7a33", note: "earthy green, clay accent — lawn & garden" },
  { id: "trade", label: "Trade", swatch: "#f5610a", note: "steel + safety orange — roofing & contractors" },
  { id: "services", label: "Services", swatch: "#1668c4", note: "trust blue, amber CTA — HVAC, plumbing, home" },
  { id: "retro", label: "Retro", swatch: "#ff5a5f", note: "Memphis pop — cream, coral, geometric" },
  { id: "noir", label: "Noir", swatch: "#c8a45a", note: "near-black, gold, serif luxury" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#15120e] text-[#ece4d4]">
      <header className="border-b border-[#ece4d4]/15 px-6 py-4 sm:px-10">
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.25em] uppercase text-[#ece4d4]/50">
          <span>Connor / Agency</span>
          <span>{BLOCKS.length} blocks · {VIBES.length} vibes</span>
        </div>
      </header>

      <section className="border-b border-[#ece4d4]/15 px-6 pt-16 pb-12 sm:px-10 sm:pt-24">
        <h1 className="font-serif text-[clamp(3.5rem,12vw,11rem)] leading-[0.9] tracking-tight">
          Blocks<span className="text-[#d9542b]">.</span>
        </h1>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-md text-lg leading-relaxed text-[#ece4d4]/70">
            A parts catalog for client websites. Browse a block, copy one
            command, and it lands in the project — code and all.
          </p>
          <div className="flex flex-col items-start gap-5">
            <Link
              href="/demo"
              className="inline-flex items-center gap-3 rounded-md bg-[#ece4d4] px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#15120e] transition-transform hover:-translate-y-0.5"
            >
              <Monitor className="size-4" />
              Open demo websites
            </Link>
            <div className="flex flex-col gap-2 font-mono text-xs">
              {VIBES.map((v) => (
                <span key={v.id} className="flex items-center gap-3">
                  <span
                    className="inline-block size-3 rounded-full"
                    style={{ background: v.swatch }}
                  />
                  <span className="w-20 tracking-[0.2em] uppercase">{v.label}</span>
                  <span className="text-[#ece4d4]/45">{v.note}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        {CATEGORIES.map((cat, i) => {
          const count = blocksFor(cat.slug).length
          return (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-[#ece4d4]/15 px-6 py-6 transition-colors hover:bg-[#ece4d4]/5 sm:grid-cols-[5rem_1fr_1fr_auto] sm:px-10"
            >
              <span className="font-mono text-xs text-[#ece4d4]/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-2xl tracking-tight transition-colors group-hover:text-[#d9542b] sm:text-3xl">
                {cat.title}
              </span>
              <span className="hidden text-sm text-[#ece4d4]/50 sm:block">
                {cat.blurb}
              </span>
              <span className="flex items-center gap-3 font-mono text-xs text-[#ece4d4]/50">
                {count} {count === 1 ? "block" : "blocks"}
                <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
            </Link>
          )
        })}
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-[11px] tracking-[0.2em] uppercase text-[#ece4d4]/40 sm:px-10">
        <span>npx shadcn add &lt;this-site&gt;/r/&lt;block&gt;.json</span>
        <span>Built with shadcn registry · Tailwind v4</span>
      </footer>
    </div>
  )
}
