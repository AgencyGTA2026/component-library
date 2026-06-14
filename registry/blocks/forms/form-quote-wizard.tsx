"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  PartyPopper,
  Rocket,
  ShoppingBag,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type Answers = {
  projectType: string
  pages: string
  timeline: string
  name: string
  email: string
}

const PROJECT_TYPES = [
  { id: "marketing", label: "Marketing site", icon: Globe },
  { id: "ecommerce", label: "Online store", icon: ShoppingBag },
  { id: "product", label: "Web app / SaaS", icon: Rocket },
  { id: "rebuild", label: "Fix / rebuild", icon: Wrench },
]
const PAGES = ["1–5 pages", "6–15 pages", "16–40 pages", "Not sure yet"]
const TIMELINES = ["ASAP", "1–2 months", "This quarter", "Flexible"]

/**
 * Quote wizard — a four-step request form with progress bar, animated
 * step transitions, and a summary on completion. Swap the final
 * console.log for your API call.
 */
export function FormQuoteWizard() {
  const [step, setStep] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const [answers, setAnswers] = React.useState<Answers>({
    projectType: "",
    pages: "",
    timeline: "",
    name: "",
    email: "",
  })
  const set = (patch: Partial<Answers>) => setAnswers((a) => ({ ...a, ...patch }))

  const steps = [
    { title: "What are we building?", valid: !!answers.projectType },
    { title: "How big is it?", valid: !!answers.pages },
    { title: "When do you need it?", valid: !!answers.timeline },
    {
      title: "Where do we send the quote?",
      valid: answers.name.length > 1 && /.+@.+\..+/.test(answers.email),
    },
  ]
  const last = step === steps.length - 1

  function next() {
    if (!steps[step].valid) return
    if (last) {
      console.log("quote request:", answers)
      setDone(true)
    } else {
      setStep((s) => s + 1)
    }
  }

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-xl">
        <div className="mb-10 text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Project quote
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            Get a ballpark in 60 seconds.
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg border bg-card">
          {!done && (
            <div className="flex h-1.5 bg-muted">
              <motion.div
                className="bg-primary"
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ ease: "easeOut", duration: 0.4 }}
              />
            </div>
          )}

          <div className="p-7 sm:p-9">
            {done ? (
              <div className="py-6 text-center">
                <PartyPopper className="mx-auto size-12 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-2xl">Request received!</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                  We&apos;ll send a tailored estimate for your{" "}
                  <strong className="text-foreground">
                    {PROJECT_TYPES.find((p) => p.id === answers.projectType)?.label.toLowerCase()}
                  </strong>{" "}
                  to <strong className="text-foreground">{answers.email}</strong> within
                  one business day.
                </p>
              </div>
            ) : (
              <>
                <p className="font-mono text-xs text-muted-foreground">
                  Step {step + 1} of {steps.length}
                </p>
                <h3 className="mt-2 mb-6 text-xl font-semibold tracking-tight">
                  {steps[step].title}
                </h3>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 0 && (
                      <div className="grid grid-cols-2 gap-3">
                        {PROJECT_TYPES.map((t) => (
                          <ChoiceCard
                            key={t.id}
                            active={answers.projectType === t.id}
                            onClick={() => set({ projectType: t.id })}
                          >
                            <t.icon className="size-6" strokeWidth={1.5} />
                            <span className="text-sm font-medium">{t.label}</span>
                          </ChoiceCard>
                        ))}
                      </div>
                    )}
                    {step === 1 && (
                      <ChipGroup
                        options={PAGES}
                        value={answers.pages}
                        onChange={(v) => set({ pages: v })}
                      />
                    )}
                    {step === 2 && (
                      <ChipGroup
                        options={TIMELINES}
                        value={answers.timeline}
                        onChange={(v) => set({ timeline: v })}
                      />
                    )}
                    {step === 3 && (
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <Label>Your name</Label>
                          <Input
                            value={answers.name}
                            onChange={(e) => set({ name: e.target.value })}
                            placeholder="Ada Lovelace"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input
                            type="email"
                            value={answers.email}
                            onChange={(e) => set({ email: e.target.value })}
                            placeholder="ada@company.com"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className={cn(step === 0 && "invisible")}
                  >
                    <ArrowLeft className="size-4" />
                    Back
                  </Button>
                  <Button onClick={next} disabled={!steps[step].valid}>
                    {last ? "Get my quote" : "Continue"}
                    {last ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ChoiceCard({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-start gap-3 rounded-md border p-4 text-left transition-all",
        active
          ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/30"
          : "hover:border-foreground/40"
      )}
    >
      {children}
    </button>
  )
}

function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={cn(
            "rounded-md border px-5 py-2.5 text-sm transition-all",
            value === o
              ? "border-primary bg-primary text-primary-foreground"
              : "hover:border-foreground/40"
          )}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
