"use client"

import * as React from "react"
import { MailCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Newsletter strip — a single-field capture band with social proof and
 * an inline success swap. Connect `subscribe` to your ESP of choice.
 */
export function FormNewsletter() {
  const [email, setEmail] = React.useState("")
  const [state, setState] = React.useState<"idle" | "error" | "done">("idle")

  function subscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!/.+@.+\..+/.test(email)) {
      setState("error")
      return
    }
    // Replace with your ESP call (ConvertKit, Mailchimp, Resend…)
    console.log("subscribe:", email)
    setState("done")
  }

  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-lg border bg-card px-7 py-12 text-center sm:px-12 md:flex-row md:text-left">
        <div className="flex-1">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            The Monthly Brief
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance">
            One useful email a month. That&apos;s the whole pitch.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Teardowns, launch notes, and what we&apos;d do differently. Read by
            4,200 founders and marketers. Unsubscribe anytime.
          </p>
        </div>

        <div className="w-full max-w-sm">
          {state === "done" ? (
            <div className="flex items-center gap-3 rounded-md border border-primary/40 bg-primary/5 p-4 text-left">
              <MailCheck className="size-6 shrink-0 text-primary" />
              <p className="text-sm">
                <strong>Check your inbox</strong> — confirm the link and
                you&apos;re in.
              </p>
            </div>
          ) : (
            <form onSubmit={subscribe} noValidate className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setState("idle")
                  }}
                  aria-invalid={state === "error"}
                />
                <Button type="submit" className="shrink-0">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                {state === "error" ? (
                  <span className="text-destructive">
                    Hmm, that email doesn&apos;t look right.
                  </span>
                ) : (
                  "No spam. No “just checking in.”"
                )}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
