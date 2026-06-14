"use client"

import * as React from "react"
import { Check, Heart, Minus, Plus, ShieldCheck, Star, Truck } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const IMAGES = [
  "from-primary/30 to-primary/5",
  "from-accent/30 to-accent/5",
  "from-secondary to-background",
  "from-primary/15 to-accent/10",
]
const SIZES = ["XS", "S", "M", "L", "XL"]
const COLORS = [
  { name: "Clay", val: "#b3603a" },
  { name: "Sage", val: "#8a9a6b" },
  { name: "Ink", val: "#2a2a32" },
]

/**
 * Product detail — thumbnail gallery beside buying options: variants,
 * quantity, add-to-cart, trust row, and an accordion for the fine print.
 */
export function ProductDetail() {
  const [img, setImg] = React.useState(0)
  const [size, setSize] = React.useState("M")
  const [color, setColor] = React.useState(COLORS[0])
  const [qty, setQty] = React.useState(1)

  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
        {/* gallery */}
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          <div className="flex gap-3 sm:flex-col">
            {IMAGES.map((hue, i) => (
              <button
                key={i}
                onClick={() => setImg(i)}
                className={cn(
                  "aspect-square w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-gradient-to-br transition-colors",
                  hue,
                  img === i ? "border-primary" : "border-transparent"
                )}
              />
            ))}
          </div>
          <div className={`flex-1 overflow-hidden rounded-2xl border bg-gradient-to-br ${IMAGES[img]}`}>
            <div className="aspect-[4/5]" />
          </div>
        </div>

        {/* info */}
        <div>
          <Badge variant="secondary">In stock</Badge>
          <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            The Everyday Overshirt
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">128 reviews</span>
          </div>
          <p className="mt-5 text-3xl font-medium">$148</p>
          <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
            A heavyweight cotton-twill overshirt that works as a light jacket.
            Garment-dyed for a lived-in look from day one.
          </p>

          {/* color */}
          <div className="mt-7">
            <p className="mb-2 text-sm font-medium">Color — <span className="text-muted-foreground">{color.name}</span></p>
            <div className="flex gap-2.5">
              {COLORS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c)}
                  aria-label={c.name}
                  className={cn(
                    "grid size-9 place-items-center rounded-full ring-offset-2 ring-offset-background transition-shadow",
                    color.name === c.name && "ring-2 ring-foreground"
                  )}
                  style={{ background: c.val }}
                >
                  {color.name === c.name && <Check className="size-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* size */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium">Size</p>
              <button className="text-sm text-primary hover:underline">Size guide</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(
                    "min-w-12 rounded-lg border px-3 py-2 text-sm transition-colors",
                    size === s ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/40"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* qty + add */}
          <div className="mt-7 flex gap-3">
            <div className="flex items-center rounded-lg border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease" className="grid size-11 place-items-center hover:bg-muted">
                <Minus className="size-4" />
              </button>
              <span className="w-10 text-center font-mono tabular-nums">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase" className="grid size-11 place-items-center hover:bg-muted">
                <Plus className="size-4" />
              </button>
            </div>
            <Button size="lg" className="flex-1">Add to cart — ${148 * qty}</Button>
            <Button size="lg" variant="outline" aria-label="Wishlist" className="px-3.5">
              <Heart className="size-5" />
            </Button>
          </div>

          {/* trust */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Truck className="size-4" /> Free shipping over $75</span>
            <span className="flex items-center gap-2"><ShieldCheck className="size-4" /> 60-day returns</span>
          </div>

          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem value="details">
              <AccordionTrigger>Details &amp; materials</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                100% organic cotton twill, 9.5oz. Garment-dyed and pre-shrunk.
                Corozo buttons. Machine wash cold, hang dry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping &amp; returns</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ships in 1–2 business days. Free carbon-neutral shipping on
                orders over $75. Returns are free within 60 days, no questions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
