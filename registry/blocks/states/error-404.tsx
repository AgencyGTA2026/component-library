"use client"

import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SUGGESTIONS = [
  { label: "Services", href: "#services" },
  { label: "Book an appointment", href: "#book" },
  { label: "Contact us", href: "#contact" },
]

/**
 * 404 — a friendly not-found page with an oversized code, a search box,
 * and a few escape hatches. Drop in app/not-found.tsx.
 */
export function Error404() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-serif text-[clamp(6rem,22vw,14rem)] leading-none tracking-tight text-primary">
          404
        </p>
        <h1 className="mt-2 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          It may have moved or never existed. Try a search, or head back to
          familiar ground.
        </p>

        <form className="mx-auto mt-8 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search the site…" className="pl-9" />
          </div>
          <Button type="submit">Search</Button>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="outline">
            <Link href="#"><ArrowLeft className="size-4" /> Go back</Link>
          </Button>
          <Button asChild>
            <Link href="#home"><Home className="size-4" /> Home</Link>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {SUGGESTIONS.map((s) => (
            <Link key={s.label} href={s.href} className="text-primary underline-offset-4 hover:underline">
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
