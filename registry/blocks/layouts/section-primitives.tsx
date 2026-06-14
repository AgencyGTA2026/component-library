import { cn } from "@/lib/utils"

/**
 * Layout primitives shared by page compositions. Install once, then use
 * them to keep section rhythm consistent across a client site.
 */

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
      {children}
    </section>
  )
}

export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function Eyebrow({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "font-mono text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export function Heading({
  className,
  as: Tag = "h2",
  children,
  ...props
}: React.ComponentProps<"h2"> & {
  as?: "h1" | "h2" | "h3" | "h4"
}) {
  return (
    <Tag
      className={cn(
        "font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function Lead({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "max-w-prose text-lg leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
