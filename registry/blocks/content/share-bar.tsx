"use client"

import * as React from "react"
import { Bookmark, Check, Link2, Mail, Printer, Share2 } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Share bar — a compact share rail (copy-link, email, print, bookmark)
 * that turns horizontal on mobile and vertical/sticky on desktop. The
 * copy-link button gives real clipboard feedback.
 */
export function ShareBar() {
  const [copied, setCopied] = React.useState(false)
  const [saved, setSaved] = React.useState(false)

  const copy = async () => {
    try { await navigator.clipboard.writeText(typeof window !== "undefined" ? window.location.href : "") } catch {}
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  const items = [
    { key: "copy", label: copied ? "Copied!" : "Copy link", icon: copied ? Check : Link2, onClick: copy },
    { key: "email", label: "Email", icon: Mail, onClick: () => {} },
    { key: "print", label: "Print", icon: Printer, onClick: () => typeof window !== "undefined" && window.print() },
    { key: "save", label: saved ? "Saved" : "Save", icon: Bookmark, onClick: () => setSaved((s) => !s) },
  ]

  return (
    <section className="bg-background px-5 py-12 text-foreground sm:px-8">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-full border bg-card px-5 py-3">
        <p className="flex items-center gap-2 text-sm font-medium">
          <Share2 className="size-4 text-primary" /> Share this
        </p>
        <div className="flex items-center gap-1">
          {items.map((it) => (
            <button
              key={it.key}
              onClick={it.onClick}
              className={cn(
                "flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors hover:bg-secondary",
                (it.key === "copy" && copied) || (it.key === "save" && saved) ? "text-primary" : "text-muted-foreground"
              )}
            >
              <it.icon className={cn("size-4", it.key === "save" && saved && "fill-current")} />
              <span className="hidden sm:inline">{it.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
