"use client"

import * as React from "react"
import Link from "next/link"
import { Bell, ChevronDown, Plus, Search, Settings, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const TABS = ["Overview", "Projects", "Analytics", "Team"]

/**
 * App header — a SaaS product top bar with workspace switcher, search,
 * new-item action, notifications, and an avatar. Pair with a dashboard.
 */
export function HeaderApp() {
  const [tab, setTab] = React.useState("Overview")

  return (
    <header className="border-b bg-card">
      <div className="flex items-center gap-3 px-4 py-2.5 sm:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="hidden sm:inline">Lumen</span>
        </Link>

        <button className="flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-sm transition-colors hover:bg-secondary">
          <span className="grid size-5 place-items-center rounded bg-accent text-[10px] font-bold text-accent-foreground">A</span>
          <span className="hidden sm:inline">Acme Studio</span>
          <ChevronDown className="size-3.5 text-muted-foreground" />
        </button>

        <div className="relative ml-auto hidden max-w-xs flex-1 md:block">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search…"
            className="h-9 w-full rounded-md border bg-background pr-12 pl-9 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40"
          />
          <kbd className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            ⌘K
          </kbd>
        </div>

        <Button size="sm" className="ml-auto gap-1.5 md:ml-0">
          <Plus className="size-4" />
          <span className="hidden sm:inline">New project</span>
        </Button>

        <button aria-label="Settings" className="hidden size-9 place-items-center rounded-md text-muted-foreground hover:bg-secondary sm:grid">
          <Settings className="size-4.5" />
        </button>
        <button aria-label="Notifications" className="relative grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-secondary">
          <Bell className="size-4.5" />
          <span className="absolute top-2 right-2.5 size-2 rounded-full bg-destructive ring-2 ring-card" />
        </button>
        <button aria-label="Account" className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
          JO
        </button>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-2 sm:px-4">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={
              "relative px-3 py-2.5 text-sm transition-colors " +
              (tab === t ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground")
            }
          >
            {t}
            {tab === t && <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary" />}
          </button>
        ))}
      </nav>
    </header>
  )
}
