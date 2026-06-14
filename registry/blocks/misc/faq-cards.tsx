import Link from "next/link"
import { HelpCircle, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

const FAQS = [
  {
    q: "Do you offer free estimates?",
    a: "Always. We'll come out, assess the job, and hand you a written, itemized quote with no obligation and no high-pressure sales pitch.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — fully licensed, bonded, and insured. We're happy to send proof before any work begins, and every job is permitted where required.",
  },
  {
    q: "How soon can you start?",
    a: "Most standard jobs are scheduled within the same week, and we keep emergency slots open daily for urgent repairs.",
  },
  {
    q: "What does it cost?",
    a: "Every property is different, so we price per job rather than guess online. Your written estimate is the price you pay — we don't bill for surprises.",
  },
  {
    q: "Do you offer financing?",
    a: "We do. Qualified customers can split larger projects into low monthly payments, including 0% APR plans on approved credit.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Every job is backed by our workmanship warranty. If something we installed fails within the coverage period, we make it right at no charge.",
  },
]

/**
 * FAQ cards — a two-column grid of plain Q&A tiles (no accordion) with a
 * "still have questions?" call-to-call footer. Pairs with faq-accordion.
 */
export function FaqCards() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
            <HelpCircle className="size-4" />
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            The stuff homeowners ask us most.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border bg-secondary p-6 text-secondary-foreground sm:flex-row">
          <p className="font-medium">Still have a question? Talk to a real person.</p>
          <Button asChild size="lg">
            <Link href="tel:+15551234567">
              <Phone className="size-4" />
              (555) 123-4567
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
