"use client"

import * as React from "react"
import { CreditCard, Lock, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const ITEMS = [
  { name: "Grove plan — annual", detail: "Billed yearly", price: 76.8 },
  { name: "Priority onboarding", detail: "One-time", price: 49 },
]

/**
 * Checkout — contact + card fields beside a sticky order summary with a
 * promo field. Demo only; never collect raw card data without a PCI-
 * compliant processor (Stripe Elements, etc.).
 */
export function FormCheckout() {
  const [promo, setPromo] = React.useState("")
  const [applied, setApplied] = React.useState(false)

  const subtotal = ITEMS.reduce((s, i) => s + i.price, 0)
  const discount = applied ? subtotal * 0.1 : 0
  const tax = (subtotal - discount) * 0.08
  const total = subtotal - discount + tax
  const usd = (v: number) => `$${v.toFixed(2)}`

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Checkout</h2>
            <p className="mt-1 text-sm text-muted-foreground">Secure payment — takes about a minute.</p>
          </div>

          <fieldset className="space-y-4">
            <legend className="mb-2 text-sm font-semibold">Contact</legend>
            <div className="space-y-2">
              <Label htmlFor="co-email">Email</Label>
              <Input id="co-email" type="email" placeholder="you@company.com" />
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="mb-2 text-sm font-semibold">Payment</legend>
            <div className="space-y-2">
              <Label htmlFor="co-card">Card number</Label>
              <div className="relative">
                <CreditCard className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="co-card" inputMode="numeric" placeholder="4242 4242 4242 4242" className="pl-9" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="co-exp">Expiry</Label>
                <Input id="co-exp" placeholder="MM / YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="co-cvc">CVC</Label>
                <Input id="co-cvc" inputMode="numeric" placeholder="123" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="co-name">Name on card</Label>
              <Input id="co-name" placeholder="Ada Lovelace" />
            </div>
          </fieldset>

          <Button type="submit" size="lg" className="w-full">
            <Lock className="size-4" />
            Pay {usd(total)}
          </Button>
        </form>

        <aside className="h-fit space-y-5 rounded-2xl border bg-card p-7 lg:sticky lg:top-6">
          <h3 className="font-semibold">Order summary</h3>
          <ul className="space-y-3">
            {ITEMS.map((it) => (
              <li key={it.name} className="flex justify-between gap-4 text-sm">
                <span>
                  <span className="block font-medium">{it.name}</span>
                  <span className="block text-muted-foreground">{it.detail}</span>
                </span>
                <span className="font-mono">{usd(it.price)}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-2">
            <Input
              value={promo}
              onChange={(e) => {
                setPromo(e.target.value)
                setApplied(false)
              }}
              placeholder="Promo code"
              className="h-9"
            />
            <Button type="button" variant="outline" className="h-9" onClick={() => setApplied(promo.trim().length > 0)}>
              Apply
            </Button>
          </div>
          {applied && <p className="text-xs text-primary">Code applied — 10% off.</p>}

          <Separator />
          <dl className="space-y-1.5 text-sm">
            <Row label="Subtotal" value={usd(subtotal)} />
            {applied && <Row label="Discount" value={`−${usd(discount)}`} />}
            <Row label="Tax" value={usd(tax)} />
            <div className="flex justify-between pt-2 text-base font-semibold">
              <dt>Total</dt>
              <dd>{usd(total)}</dd>
            </div>
          </dl>

          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5" />
            256-bit encrypted · cancel anytime
          </p>
        </aside>
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <dt>{label}</dt>
      <dd className="font-mono">{value}</dd>
    </div>
  )
}
