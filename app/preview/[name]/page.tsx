import { notFound } from "next/navigation"

import { BLOCKS, getBlock } from "@/lib/registry-index"

export function generateStaticParams() {
  return BLOCKS.map((b) => ({ name: b.name }))
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const block = getBlock(name)
  if (!block) notFound()

  const Component = block.component

  // Scroll-driven blocks need runway above/below so their transforms can
  // play through the full range inside the (otherwise short) preview frame.
  if (block.category === "parallax") {
    return (
      <div data-vibe={block.vibe} className="bg-background text-foreground">
        <div className="flex h-[34vh] flex-col items-center justify-end gap-2 pb-8 text-muted-foreground">
          <p className="font-mono text-xs tracking-[0.2em] uppercase">Scroll to see it animate</p>
          <span className="animate-bounce text-2xl leading-none">↓</span>
        </div>
        <Component />
        <div className="h-[120vh]" aria-hidden />
      </div>
    )
  }

  return (
    <div data-vibe={block.vibe} className="min-h-screen bg-background text-foreground">
      <Component />
    </div>
  )
}
