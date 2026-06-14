"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Compass, LayoutGrid, LifeBuoy, Menu, Sparkles, X, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const MENU = {
  Product: [
    { icon: Zap, title: "Automation", desc: "Put busywork on autopilot" },
    { icon: LayoutGrid, title: "Templates", desc: "Start from 200+ layouts" },
    { icon: Sparkles, title: "AI assist", desc: "Draft and refine in seconds" },
    { icon: Compass, title: "Roadmap", desc: "See what's shipping next" },
  ],
  Solutions: [
    { icon: LifeBuoy, title: "For agencies", desc: "Manage every client in one place" },
    { icon: LayoutGrid, title: "For teams", desc: "Shared workspaces and roles" },
    { icon: Zap, title: "For founders", desc: "Launch without a developer" },
    { icon: Sparkles, title: "For creators", desc: "Sell directly to your audience" },
  ],
}

/**
 * Mega-menu header — hover (or tap) a top-level item to reveal a panel
 * of linked features. Closes on leave; collapses to a sheet on mobile.
 */
export function HeaderMega() {
  const [open, setOpen] = React.useState<string | null>(null)
  const [mobile, setMobile] = React.useState(false)

  return (
    <header
      className="relative z-40 border-b bg-card/80 backdrop-blur"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          Lumen
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {Object.keys(MENU).map((key) => (
            <button
              key={key}
              onMouseEnter={() => setOpen(key)}
              onClick={() => setOpen((v) => (v === key ? null : key))}
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors",
                open === key ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary"
              )}
            >
              {key}
              <ChevronDown className={cn("size-3.5 transition-transform", open === key && "rotate-180")} />
            </button>
          ))}
          <Link href="#pricing" className="rounded-full px-4 py-2 text-sm transition-colors hover:bg-secondary">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="#signin">Sign in</Link>
          </Button>
          <Button asChild className="hidden rounded-full sm:inline-flex">
            <Link href="#start">Start free</Link>
          </Button>
          <button className="grid size-9 place-items-center rounded-md hover:bg-secondary md:hidden" onClick={() => setMobile((v) => !v)} aria-label="Menu">
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* desktop mega panel */}
      {open && (
        <div
          onMouseEnter={() => setOpen(open)}
          className="absolute inset-x-0 top-full hidden border-b bg-card shadow-xl md:block"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-5 py-6 sm:px-8 lg:grid-cols-4">
            {MENU[open as keyof typeof MENU].map((item) => (
              <Link
                key={item.title}
                href="#"
                className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <item.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{item.title}</span>
                  <span className="block text-xs text-muted-foreground">{item.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* mobile sheet */}
      {mobile && (
        <div className="border-t md:hidden">
          {Object.entries(MENU).map(([key, items]) => (
            <div key={key} className="border-b px-5 py-4">
              <p className="mb-2 text-sm font-semibold">{key}</p>
              <div className="grid gap-1">
                {items.map((item) => (
                  <Link key={item.title} href="#" className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
                    <item.icon className="size-4" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="flex gap-2 p-5">
            <Button asChild variant="outline" className="flex-1"><Link href="#signin">Sign in</Link></Button>
            <Button asChild className="flex-1"><Link href="#start">Start free</Link></Button>
          </div>
        </div>
      )}
    </header>
  )
}
