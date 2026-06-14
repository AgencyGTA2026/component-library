import Link from "next/link"
import { ArrowRight, BookOpen, Layers3, Monitor } from "lucide-react"

import { BLOCKS, CATEGORIES, DEMOS } from "@/lib/registry-index"

const SWATCH: Record<string, string> = {
  editorial: "#b3401f",
  brutal: "#d9f526",
  soft: "#0f8a74",
  landscape: "#3f7a33",
  trade: "#f5610a",
  services: "#1668c4",
}

const demos = DEMOS.map((demo) => ({
  href: `/demo/${demo.vibe}`,
  label: demo.business,
  description: `${demo.industry} — a full ${demo.vibe} demo assembled only from library blocks.`,
  vibe: demo.vibe.charAt(0).toUpperCase() + demo.vibe.slice(1),
  swatch: SWATCH[demo.vibe],
}))

export default function DemoIndexPage() {
  return (
    <main className="min-h-screen bg-[#15120e] text-[#ece4d4]">
      <header className="border-b border-[#ece4d4]/15 px-6 py-4 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#ece4d4]/50">
          <Link href="/" className="transition-colors hover:text-[#ece4d4]">
            Blocks registry
          </Link>
          <span>{BLOCKS.length} blocks across {CATEGORIES.length} categories</span>
        </div>
      </header>

      <section className="grid border-b border-[#ece4d4]/15 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="px-6 py-16 sm:px-10 sm:py-24">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ece4d4]/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ece4d4]/55">
            <Layers3 className="size-3.5" />
            Demo websites
          </p>
          <h1 className="max-w-4xl font-serif text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.9] tracking-tight">
            See the blocks in a real page.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#ece4d4]/66">
            These examples use the same installable registry blocks shown in the category browser. Open either site, then jump back to the catalog to inspect or copy individual blocks.
          </p>
        </div>

        <aside className="border-t border-[#ece4d4]/15 px-6 py-8 sm:px-10 lg:border-l lg:border-t-0">
          <div className="grid gap-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#ece4d4]/45">
              Available categories
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-[#ece4d4]/68">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="border-b border-[#ece4d4]/10 py-2 transition-colors hover:text-[#ece4d4]"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="grid lg:grid-cols-2">
        {demos.map((demo) => (
          <Link
            key={demo.href}
            href={demo.href}
            className="group min-h-[420px] border-b border-[#ece4d4]/15 px-6 py-8 transition-colors hover:bg-[#ece4d4]/5 sm:px-10 lg:border-r"
          >
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#ece4d4]/50">
                    <span
                      className="size-3 rounded-full"
                      style={{ backgroundColor: demo.swatch }}
                    />
                    {demo.vibe}
                  </span>
                  <Monitor className="size-5 text-[#ece4d4]/35 transition-colors group-hover:text-[#ece4d4]" />
                </div>
                <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                  {demo.label}
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-[#ece4d4]/58">
                  {demo.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#ece4d4]/60">
                Open demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-4 px-6 py-8 sm:px-10">
        <Link
          href="/layouts"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#ece4d4]/55 transition-colors hover:text-[#ece4d4]"
        >
          <BookOpen className="size-4" />
          Inspect page composition blocks
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ece4d4]/35">
          npx shadcn@latest add /r/&lt;block&gt;.json
        </span>
      </footer>
    </main>
  )
}
