import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

import { DEMOS, getDemo } from "@/lib/registry-index"

export function generateStaticParams() {
  return DEMOS.map((d) => ({ vibe: d.vibe }))
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ vibe: string }>
}) {
  const { vibe } = await params
  const demo = getDemo(vibe)
  if (!demo) notFound()

  const Component = demo.component
  const index = DEMOS.findIndex((d) => d.vibe === vibe)
  const prev = DEMOS[(index - 1 + DEMOS.length) % DEMOS.length]
  const next = DEMOS[(index + 1) % DEMOS.length]

  return (
    <div data-vibe={demo.vibe} className="bg-background text-foreground">
      {/* floating control bar — sits above the demo, outside its theme flow */}
      <div className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-fit items-center gap-1 rounded-full border border-white/10 bg-[#15120e]/90 p-1.5 text-[#ece4d4] shadow-2xl backdrop-blur">
        <Link
          href="/demo"
          className="flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs tracking-wide uppercase transition-colors hover:bg-white/10"
        >
          <ArrowLeft className="size-3.5" />
          All demos
        </Link>
        <span className="mx-1 hidden text-xs text-[#ece4d4]/50 sm:inline">
          {demo.business} · {demo.industry}
        </span>
        <Link
          href={`/demo/${prev.vibe}`}
          aria-label={`Previous: ${prev.business}`}
          className="grid size-9 place-items-center rounded-full transition-colors hover:bg-white/10"
        >
          <ChevronLeft className="size-4" />
        </Link>
        <Link
          href={`/demo/${next.vibe}`}
          aria-label={`Next: ${next.business}`}
          className="grid size-9 place-items-center rounded-full transition-colors hover:bg-white/10"
        >
          <ChevronRight className="size-4" />
        </Link>
      </div>

      <Component />
    </div>
  )
}
