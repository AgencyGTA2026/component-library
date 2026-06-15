"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Copy, ExternalLink, Monitor, Smartphone, Tablet } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Vibe } from "@/lib/registry-index"

const WIDTHS = [
  { id: "desktop", icon: Monitor, width: "100%" },
  { id: "tablet", icon: Tablet, width: "768px" },
  { id: "mobile", icon: Smartphone, width: "390px" },
] as const

const VIBE_DOT: Record<Vibe, string> = {
  editorial: "#b3401f",
  brutal: "#d9f526",
  soft: "#0f8a74",
  landscape: "#3f7a33",
  trade: "#f5610a",
  services: "#1668c4",
  retro: "#ff5a5f",
  noir: "#c8a45a",
  bauhaus: "#e63422",
  cyber: "#22d3ee",
  studio: "#c98e86",
}

export function BlockFrame({
  name,
  title,
  description,
  vibe,
  height,
}: {
  name: string
  title: string
  description: string
  vibe: Vibe
  height: number
}) {
  const [width, setWidth] = React.useState<(typeof WIDTHS)[number]["id"]>("desktop")
  const [copied, setCopied] = React.useState(false)
  const command = `npx shadcn@latest add <site>/r/${name}.json`

  async function copy() {
    await navigator.clipboard.writeText(
      `npx shadcn@latest add ${window.location.origin}/r/${name}.json`
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <article className="border-b border-[#ece4d4]/15">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-6 py-5 sm:px-10">
        <span
          className="size-3 rounded-full"
          style={{ background: VIBE_DOT[vibe] }}
          title={vibe}
        />
        <div className="min-w-0">
          <h2 className="font-serif text-xl tracking-tight">{title}</h2>
          <p className="text-sm text-[#ece4d4]/50">{description}</p>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden rounded-md border border-[#ece4d4]/20 p-0.5 md:flex">
            {WIDTHS.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setWidth(w.id)}
                aria-label={`${w.id} width`}
                className={cn(
                  "grid size-8 place-items-center rounded-[5px] transition-colors",
                  width === w.id
                    ? "bg-[#ece4d4] text-[#15120e]"
                    : "text-[#ece4d4]/50 hover:text-[#ece4d4]"
                )}
              >
                <w.icon className="size-4" />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={copy}
            className="flex items-center gap-2 rounded-md border border-[#ece4d4]/20 px-3 py-2 font-mono text-xs transition-colors hover:border-[#ece4d4]/50"
          >
            {copied ? (
              <Check className="size-3.5 text-[#d9f526]" />
            ) : (
              <Copy className="size-3.5" />
            )}
            <span className="hidden max-w-72 truncate lg:inline">{command}</span>
            <span className="lg:hidden">{copied ? "Copied" : "Install"}</span>
          </button>

          <Link
            href={`/preview/${name}`}
            target="_blank"
            aria-label="Open full preview"
            className="grid size-9 place-items-center rounded-md border border-[#ece4d4]/20 text-[#ece4d4]/60 transition-colors hover:border-[#ece4d4]/50 hover:text-[#ece4d4]"
          >
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </div>

      <div className="bg-[#0d0b08] px-3 pb-3 sm:px-6 sm:pb-6">
        <div
          className="mx-auto overflow-hidden rounded-lg border border-[#ece4d4]/10 bg-white transition-[max-width] duration-300"
          style={{ maxWidth: WIDTHS.find((w) => w.id === width)!.width }}
        >
          <iframe
            src={`/preview/${name}`}
            title={title}
            loading="lazy"
            style={{ height }}
            className="block w-full"
          />
        </div>
      </div>
    </article>
  )
}
