/**
 * Article body — typeset long-form prose with a lead paragraph, headings,
 * a pull-quote, a figure, and a list. The reading-experience companion to
 * blog-post-header. Tailwind utilities (no @tailwindcss/typography dep).
 */
export function ArticleBody() {
  return (
    <article className="bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="font-serif text-xl leading-relaxed text-balance text-foreground/90 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-primary">
          Most homeowners wait too long to deal with a small problem, and the
          small problem is rarely small by the time they call. Here is how to
          tell the difference — and what it actually costs to act early.
        </p>

        <p className="mt-6 leading-relaxed text-muted-foreground">
          The instinct to wait is understandable. Repairs are disruptive, and
          there is always something more urgent. But the math is rarely in your
          favor. A minor fix today is almost always cheaper than the cascade it
          prevents.
        </p>

        <h2 className="mt-12 font-serif text-2xl tracking-tight sm:text-3xl">Catch it early</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Three signs are worth a same-week call rather than a someday one. Each
          is cheap to address now and expensive to ignore.
        </p>

        <ul className="mt-5 space-y-2 text-muted-foreground">
          {["A stain that returns after you clean it", "A sound that's new, even a quiet one", "A draft, a smell, or a bill that changed without reason"].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {t}
            </li>
          ))}
        </ul>

        <blockquote className="my-10 border-l-4 border-primary pl-6">
          <p className="font-serif text-2xl leading-snug text-balance">
            “The cheapest repair is the one you make before it becomes a
            replacement.”
          </p>
        </blockquote>

        <p className="leading-relaxed text-muted-foreground">
          That is not a sales pitch; it is just how building systems fail. They
          give you warnings, and the warnings get louder and more expensive the
          longer you let them run.
        </p>

        <figure className="my-10">
          <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-primary/20 via-accent/15 to-secondary" />
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            A small stain today; a ceiling repair next winter.
          </figcaption>
        </figure>

        <h2 className="mt-12 font-serif text-2xl tracking-tight sm:text-3xl">What it costs to act</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          A typical early inspection runs a fraction of a full repair, and most
          reputable shops will tell you honestly if it can wait. The goal is not
          to scare you into work — it is to put the decision back in your hands
          while it is still an easy one.
        </p>
      </div>
    </article>
  )
}
