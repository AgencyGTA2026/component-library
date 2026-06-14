"use client"

import * as React from "react"
import { KeyRound, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Auth card — tabbed sign-in / create-account with social buttons and a
 * split brand panel. Wire the forms to your auth provider.
 */
export function FormAuth() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-4xl overflow-hidden rounded-[2rem] border bg-card shadow-xl lg:grid-cols-2">
        <div className="relative hidden flex-col justify-between bg-gradient-to-br from-primary to-secondary-foreground p-10 text-primary-foreground lg:flex">
          <p className="font-semibold">Driftwell</p>
          <div>
            <p className="text-2xl font-semibold leading-snug text-balance">
              “The only app that made my morning routine actually stick.”
            </p>
            <p className="mt-4 text-sm opacity-80">Jordan M. · joined 2024</p>
          </div>
          <div className="pointer-events-none absolute -right-16 -bottom-16 size-56 rounded-full bg-primary-foreground/10 blur-2xl" />
        </div>

        <div className="p-8 sm:p-10">
          <Tabs defaultValue="signin">
            <TabsList className="mb-6 w-full">
              <TabsTrigger value="signin" className="flex-1">Sign in</TabsTrigger>
              <TabsTrigger value="signup" className="flex-1">Create account</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="space-y-4">
              <Social />
              <Divider />
              <Field id="si-email" label="Email" type="email" placeholder="you@company.com" />
              <Field id="si-pass" label="Password" type="password" placeholder="••••••••" hint="Forgot?" />
              <Button className="w-full" size="lg">Sign in</Button>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4">
              <Social verb="Sign up" />
              <Divider />
              <Field id="su-name" label="Name" placeholder="Ada Lovelace" />
              <Field id="su-email" label="Email" type="email" placeholder="you@company.com" />
              <Field id="su-pass" label="Password" type="password" placeholder="At least 8 characters" />
              <Button className="w-full" size="lg">Create account</Button>
              <p className="text-center text-xs text-muted-foreground">
                By continuing you agree to our Terms &amp; Privacy Policy.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function Social({ verb = "Continue" }: { verb?: string }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button variant="outline" className="w-full">
        <Mail className="size-4" />
        {verb} with Google
      </Button>
      <Button variant="outline" className="w-full">
        <KeyRound className="size-4" />
        SSO
      </Button>
    </div>
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span className="h-px flex-1 bg-border" />
      or
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  hint,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  hint?: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={id}>{label}</Label>
        {hint && <button type="button" className="text-xs text-primary hover:underline">{hint}</button>}
      </div>
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  )
}
