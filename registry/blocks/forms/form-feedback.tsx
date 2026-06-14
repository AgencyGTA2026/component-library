"use client"

import * as React from "react"
import { PartyPopper } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

/**
 * Feedback / NPS — a 0–10 "how likely to recommend" scale with a
 * follow-up comment and a thank-you state. Wire onSubmit to your store.
 */
export function FormFeedback() {
  const [score, setScore] = React.useState<number | null>(null)
  const [comment, setComment] = React.useState("")
  const [sent, setSent] = React.useState(false)

  const bucket =
    score === null ? null : score <= 6 ? "detractor" : score <= 8 ? "passive" : "promoter"
  const prompt =
    bucket === "promoter"
      ? "Wonderful — what did we get right?"
      : bucket === "passive"
        ? "Thanks — what would make it a 10?"
        : "Sorry to hear it. What let you down?"

  if (sent) {
    return (
      <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
        <div className="mx-auto max-w-md rounded-lg border bg-card p-10 text-center">
          <PartyPopper className="mx-auto size-12 text-primary" strokeWidth={1.5} />
          <h2 className="mt-4 font-serif text-2xl">Thank you</h2>
          <p className="mt-2 text-muted-foreground">
            Your feedback goes straight to the team that can do something about it.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Quick favor
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
            How likely are you to recommend us?
          </h2>
        </div>

        <div className="rounded-lg border bg-card p-6 sm:p-8">
          <div className="grid grid-cols-11 gap-1.5">
            {Array.from({ length: 11 }).map((_, n) => (
              <button
                key={n}
                onClick={() => setScore(n)}
                className={cn(
                  "aspect-square rounded-md border text-sm font-medium tabular-nums transition-colors",
                  score === n
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:border-foreground/40"
                )}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
            <span>Not likely</span>
            <span>Very likely</span>
          </div>

          {score !== null && (
            <div className="mt-7 space-y-3">
              <Label htmlFor="fb-comment">{prompt}</Label>
              <Textarea
                id="fb-comment"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Optional, but appreciated…"
              />
              <Button className="w-full" onClick={() => setSent(true)}>
                Send feedback
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
