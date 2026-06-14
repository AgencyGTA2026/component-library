import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { BlockFrame } from "@/components/gallery/block-frame"
import { CATEGORIES, blocksFor, getCategory } from "@/lib/registry-index"

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) notFound()

  const blocks = blocksFor(category)

  return (
    <div className="min-h-screen bg-[#15120e] text-[#ece4d4]">
      <header className="sticky top-0 z-10 border-b border-[#ece4d4]/15 bg-[#15120e]/90 px-6 py-4 backdrop-blur sm:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-[#ece4d4]/60 transition-colors hover:text-[#ece4d4]"
          >
            <ArrowLeft className="size-3.5" />
            Index
          </Link>
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#ece4d4]/40">
            {blocks.length} {blocks.length === 1 ? "block" : "blocks"}
          </span>
        </div>
      </header>

      <div className="border-b border-[#ece4d4]/15 px-6 py-12 sm:px-10">
        <h1 className="font-serif text-5xl tracking-tight sm:text-7xl">
          {cat.title}
          <span className="text-[#d9542b]">.</span>
        </h1>
        <p className="mt-4 max-w-lg text-[#ece4d4]/60">{cat.blurb}</p>
      </div>

      {blocks.map((block) => (
        <BlockFrame
          key={block.name}
          name={block.name}
          title={block.title}
          description={block.description}
          vibe={block.vibe}
          height={block.previewHeight}
        />
      ))}
    </div>
  )
}
