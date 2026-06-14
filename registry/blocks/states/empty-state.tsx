import { FileQuestion, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * Empty state — a reusable "nothing here yet" panel with an illustration
 * slot, message, and a primary action. Use inside lists, tables, search
 * results, or dashboards. Pass your own copy/icon via props if you like.
 */
export function EmptyState() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-background px-5 py-20 text-foreground">
      <div className="mx-auto max-w-sm text-center">
        <span className="mx-auto grid size-20 place-items-center rounded-2xl border-2 border-dashed bg-card text-muted-foreground">
          <FileQuestion className="size-9" strokeWidth={1.5} />
        </span>
        <h2 className="mt-6 text-xl font-semibold tracking-tight">No records yet</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          When you add your first item, it&apos;ll show up here. Nothing to see
          for now.
        </p>
        <Button className="mt-6">
          <Plus className="size-4" />
          Add your first item
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Or <button className="text-primary underline underline-offset-2">import from a file</button>.
        </p>
      </div>
    </section>
  )
}
