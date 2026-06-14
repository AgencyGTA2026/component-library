"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const COLUMNS = [
  { heading: "Product", links: ["Features", "Templates", "Integrations", "Changelog", "Roadmap"] },
  { heading: "Solutions", links: ["Agencies", "Startups", "Enterprise", "Creators", "Nonprofits"] },
  { heading: "Resources", links: ["Docs", "Guides", "Blog", "Community", "Status"] },
  { heading: "Company", links: ["About", "Careers", "Customers", "Press", "Contact"] },
]

/**
 * Mega footer — a sitemap of link columns with an inline newsletter and
 * a legal/locale row. The "everything goes here" footer for big sites.
 */
export function FooterMega() {
  const [email, setEmail] = React.useState("")
  const [done, setDone] = React.useState(false)

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-4" />
              </span>
              Lumen
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The fastest way to launch a site that looks like you paid for it.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (/.+@.+\..+/.test(email)) setDone(true)
              }}
              className="mt-6 max-w-sm"
            >
              <p className="mb-2 text-sm font-medium">Get product updates</p>
              {done ? (
                <p className="text-sm text-primary">Thanks — you&apos;re subscribed.</p>
              ) : (
                <div className="flex gap-2">
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@company.com" className="h-10" />
                  <Button type="submit" className="h-10">Subscribe</Button>
                </div>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="mb-3 text-sm font-semibold">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Lumen, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Cookies</Link>
            <button className="flex items-center gap-1.5 hover:text-foreground">
              <Globe className="size-3.5" />
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
