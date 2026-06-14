"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const schema = z.object({
  name: z.string().min(2, "Tell us your name"),
  email: z.email("That email doesn't look right"),
  company: z.string().optional(),
  budget: z.string().min(1, "Pick a budget range"),
  message: z.string().min(20, "Give us a sentence or two (20+ characters)"),
})

type Values = z.infer<typeof schema>

const BUDGETS = ["< $5k", "$5k – $15k", "$15k – $40k", "$40k+"]

/**
 * Contact form — split layout with availability note, inline validation,
 * budget chips, and a success state. Wire `onSubmit` to your API or a
 * service like Formspree/Resend.
 */
export function FormContact() {
  const [sent, setSent] = React.useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { budget: "" },
  })
  const budget = watch("budget")

  async function onSubmit(values: Values) {
    // Replace with your endpoint, e.g. fetch("/api/contact", { ... })
    await new Promise((r) => setTimeout(r, 800))
    console.log("contact form:", values)
    setSent(true)
  }

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            We reply to every serious inquiry within one business day. The
            more context you give us, the better our first answer will be.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Currently booking for next quarter
          </div>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-12 text-center">
            <CheckCircle2 className="size-12 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 font-serif text-2xl">Message sent</h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Thanks — we&apos;ll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6 rounded-lg border bg-card p-7 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <Input placeholder="Ada Lovelace" {...register("name")} />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <Input type="email" placeholder="ada@company.com" {...register("email")} />
              </Field>
            </div>

            <Field label="Company (optional)">
              <Input placeholder="Analytical Engines Ltd." {...register("company")} />
            </Field>

            <Field label="Budget" error={errors.budget?.message}>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setValue("budget", b, { shouldValidate: true })}
                    className={cn(
                      "rounded-md border px-4 py-2 text-sm transition-colors",
                      budget === b
                        ? "border-primary bg-primary text-primary-foreground"
                        : "hover:border-foreground/40"
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Project details" error={errors.message?.message}>
              <Textarea
                rows={5}
                placeholder="What are you building, who is it for, and when does it need to exist?"
                {...register("message")}
              />
            </Field>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send message"}
              <Send className="size-4" />
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
