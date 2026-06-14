"use client"

import * as React from "react"
import { Heart, Plus, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const PRODUCTS = [
  { name: "Linen Camp Shirt", price: 88, rating: 4.8, tag: "New", cat: "Tops", hue: "from-primary/25 to-primary/5" },
  { name: "Wide-Leg Trouser", price: 124, rating: 4.6, cat: "Bottoms", hue: "from-accent/25 to-accent/5" },
  { name: "Suede Chelsea Boot", price: 240, rating: 4.9, tag: "Bestseller", cat: "Shoes", hue: "from-secondary to-background" },
  { name: "Merino Crew Knit", price: 110, rating: 4.7, cat: "Tops", hue: "from-primary/15 to-secondary" },
  { name: "Canvas Tote", price: 64, rating: 4.5, cat: "Bags", hue: "from-accent/20 to-background" },
  { name: "Pleated Midi Skirt", price: 96, rating: 4.4, cat: "Bottoms", hue: "from-primary/20 to-accent/10" },
  { name: "Leather Card Holder", price: 48, rating: 4.8, cat: "Bags", hue: "from-secondary to-primary/10" },
  { name: "Cotton Court Sneaker", price: 130, rating: 4.6, tag: "New", cat: "Shoes", hue: "from-accent/25 to-secondary" },
]

const FILTERS = ["All", "Tops", "Bottoms", "Shoes", "Bags"]

/**
 * Product grid — filterable storefront cards with rating, a wishlist
 * heart, and a hover quick-add. Swap the gradient panels for product
 * photography and wire the cart action.
 */
export function ProductGrid() {
  const [filter, setFilter] = React.useState("All")
  const [liked, setLiked] = React.useState<string[]>([])

  const shown = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter)
  const toggleLike = (n: string) =>
    setLiked((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]))

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-medium text-primary">New season</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              The spring edit
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  filter === f ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/40"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
          {shown.map((p) => (
            <article key={p.name} className="group">
              <div className={`relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br ${p.hue}`}>
                {p.tag && <Badge className="absolute top-3 left-3">{p.tag}</Badge>}
                <button
                  onClick={() => toggleLike(p.name)}
                  aria-label="Add to wishlist"
                  className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-background"
                >
                  <Heart className={cn("size-4", liked.includes(p.name) && "fill-destructive text-destructive")} />
                </button>
                <button className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-2 rounded-lg bg-foreground py-2.5 text-sm font-medium text-background opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <Plus className="size-4" />
                  Quick add
                </button>
              </div>
              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-medium">{p.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="size-3 fill-current text-accent" />
                    {p.rating.toFixed(1)}
                  </p>
                </div>
                <p className="font-medium">${p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
