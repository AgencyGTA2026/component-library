"use client"

import * as React from "react"
import { CheckCircle2, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LENGTH = 6

/**
 * OTP verification — a segmented code input with paste support, auto-
 * advance, and backspace handling. For booking confirmations, 2FA, and
 * phone verification. Verifies against "123456" in this demo.
 */
export function FormOtp() {
  const [digits, setDigits] = React.useState<string[]>(Array(LENGTH).fill(""))
  const [status, setStatus] = React.useState<"idle" | "error" | "done">("idle")
  const refs = React.useRef<(HTMLInputElement | null)[]>([])

  const setAt = (i: number, val: string) => {
    setStatus("idle")
    setDigits((prev) => {
      const next = [...prev]
      next[i] = val
      return next
    })
  }

  const onChange = (i: number, raw: string) => {
    const v = raw.replace(/\D/g, "")
    if (!v) return setAt(i, "")
    if (v.length > 1) {
      // paste
      const chars = v.slice(0, LENGTH).split("")
      setDigits((prev) => {
        const next = [...prev]
        chars.forEach((c, k) => { if (i + k < LENGTH) next[i + k] = c })
        return next
      })
      refs.current[Math.min(i + chars.length, LENGTH - 1)]?.focus()
      return
    }
    setAt(i, v)
    if (i < LENGTH - 1) refs.current[i + 1]?.focus()
  }

  const onKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus()
  }

  const code = digits.join("")
  const verify = () => setStatus(code === "123456" ? "done" : "error")

  return (
    <section className="grid min-h-[70vh] place-items-center bg-background px-5 py-20 text-foreground">
      <div className="w-full max-w-sm rounded-2xl border bg-card p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-secondary text-primary">
          {status === "done" ? <CheckCircle2 className="size-7" /> : <ShieldCheck className="size-7" />}
        </span>
        <h2 className="mt-5 text-xl font-semibold tracking-tight">
          {status === "done" ? "Verified!" : "Enter your code"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {status === "done" ? "Your number is confirmed." : "We texted a 6-digit code to •••• 4567. (Try 123456.)"}
        </p>

        {status !== "done" && (
          <>
            <div className="mt-6 flex justify-center gap-2">
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => { refs.current[i] = el }}
                  value={d}
                  inputMode="numeric"
                  maxLength={LENGTH}
                  onChange={(e) => onChange(i, e.target.value)}
                  onKeyDown={(e) => onKeyDown(i, e)}
                  className={cn(
                    "size-12 rounded-lg border bg-background text-center text-lg font-semibold outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
                    status === "error" && "border-destructive"
                  )}
                />
              ))}
            </div>
            {status === "error" && <p className="mt-3 text-sm text-destructive">That code didn&apos;t match. Try again.</p>}
            <Button className="mt-6 w-full" disabled={code.length < LENGTH} onClick={verify}>Verify</Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Didn&apos;t get it? <button className="text-primary hover:underline">Resend</button>
            </p>
          </>
        )}
      </div>
    </section>
  )
}
