import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Landing pages ship in 2–3 weeks. Full marketing sites run 6–8 weeks from kickoff to launch, including two structured feedback rounds. We give you a dated schedule before any work begins — and we keep it.",
  },
  {
    q: "What does it cost?",
    a: "Landing pages start at $3,500; full sites at $9,000. Every quote is fixed-price — if we estimated wrong, that's our problem, not your invoice. Try the estimator above for a live ballpark.",
  },
  {
    q: "Do you work with our existing brand?",
    a: "Happily. If your identity is solid we build on it faithfully. If it needs love, we'll say so plainly and quote a refresh as a separate, optional line item.",
  },
  {
    q: "Who writes the copy?",
    a: "We do, with you. Our process starts with a voice workshop, then we draft every page. You'll never receive a beautiful site full of lorem ipsum.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of free fixes. After that, most clients join a care plan (from $200/mo) covering updates, monitoring, and small improvements. No lock-in — the site is 100% yours either way.",
  },
]

/**
 * FAQ — split layout with a sticky intro column and a numbered shadcn
 * accordion. Answers are written to remove objections, not fill space.
 */
export function FaqAccordion() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div className="h-fit lg:sticky lg:top-24">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance">
            Asked often, answered honestly.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Something else on your mind?{" "}
            <Link href="#contact" className="text-primary underline underline-offset-4">
              Ask us directly
            </Link>{" "}
            — a human replies within a day.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="gap-4 py-5 text-left text-base hover:no-underline">
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-9 text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
