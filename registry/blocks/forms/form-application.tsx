"use client"

import * as React from "react"
import { Paperclip, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const ROLES = ["Senior Designer", "Frontend Engineer", "Project Producer", "Copywriter"]

/**
 * Job application — a careers form with a drag-style file affordance.
 * The upload is a demo; wire it to your storage and the form to your ATS.
 */
export function FormApplication() {
  const [role, setRole] = React.useState(ROLES[0])
  const [file, setFile] = React.useState<string | null>(null)

  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="inline-block -rotate-1 border-2 border-foreground bg-accent px-3 py-1 font-mono text-xs font-bold uppercase text-accent-foreground">
          We&apos;re hiring
        </p>
        <h2 className="mt-6 text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.95] tracking-tighter uppercase">
          Come build with us.
        </h2>

        <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <p className="mb-3 text-sm font-bold uppercase">Role</p>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={
                    "border-2 border-foreground px-3.5 py-2 text-sm font-semibold transition-colors " +
                    (role === r ? "bg-foreground text-background" : "hover:bg-muted")
                  }
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <AppField id="ap-name" label="Full name" placeholder="Ada Lovelace" />
            <AppField id="ap-email" label="Email" type="email" placeholder="ada@email.com" />
          </div>
          <AppField id="ap-portfolio" label="Portfolio / LinkedIn" placeholder="https://" />

          <div className="space-y-2">
            <Label htmlFor="ap-why" className="text-sm font-bold uppercase">Why you?</Label>
            <Textarea id="ap-why" rows={4} placeholder="Three sentences, tops." className="rounded-none border-2 border-foreground" />
          </div>

          <div>
            <p className="mb-2 text-sm font-bold uppercase">Résumé</p>
            <label className="flex cursor-pointer items-center justify-center gap-3 border-2 border-dashed border-foreground bg-muted/40 px-4 py-8 text-center transition-colors hover:bg-muted">
              {file ? (
                <span className="flex items-center gap-2 font-medium">
                  <Paperclip className="size-4" />
                  {file}
                </span>
              ) : (
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Upload className="size-5" />
                  Drop a PDF here or click to browse
                </span>
              )}
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
              />
            </label>
          </div>

          <Button
            type="submit"
            className="w-full rounded-none border-2 border-foreground bg-foreground py-6 text-base font-black uppercase shadow-[5px_5px_0_0_var(--accent)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--accent)]"
          >
            Submit application
          </Button>
        </form>
      </div>
    </section>
  )
}

function AppField({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-bold uppercase">{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} className="rounded-none border-2 border-foreground" />
    </div>
  )
}
