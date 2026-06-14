import Link from "next/link"

const COLUMNS = [
  { title: "Shop", links: ["All flavors", "Sampler", "Subscriptions", "Gift cards"] },
  { title: "Company", links: ["Our story", "Stockists", "Wholesale", "Careers"] },
  { title: "Help", links: ["Shipping", "Returns", "Contact", "FAQ"] },
]

const SOCIALS = ["IG", "TW", "YT", "TT"]

/**
 * Retro footer — a bright rounded newsletter card over playful link columns.
 */
export function FooterRetro() {
  return (
    <footer className="bg-background px-5 py-12 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-5 rounded-[2rem] border-2 border-foreground bg-accent p-8 text-center shadow-[6px_6px_0_0_var(--foreground)]">
          <h3 className="text-3xl font-black tracking-tight">Get fizz mail</h3>
          <p className="max-w-md font-medium text-foreground/80">
            New flavors, restocks, and the occasional discount code. No spam, ever.
          </p>
          <form className="flex w-full max-w-sm gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-full border-2 border-foreground bg-card px-4 py-2.5 font-medium outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="shrink-0 rounded-full border-2 border-foreground bg-primary px-5 py-2.5 font-black text-primary-foreground">
              Join
            </button>
          </form>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-8 -rotate-6 place-items-center rounded-xl border-2 border-foreground bg-primary text-sm font-black text-primary-foreground">
                P
              </span>
              <span className="text-lg font-black">Poptone</span>
            </div>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              Soda that pops. Real fruit, wild color, zero apologies.
            </p>
            <div className="mt-4 flex gap-2">
              {SOCIALS.map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="grid size-9 place-items-center rounded-full border-2 border-foreground bg-card text-xs font-black transition-transform hover:-translate-y-0.5"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-black uppercase tracking-wide">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="font-medium text-muted-foreground hover:text-foreground">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t-2 border-foreground/20 pt-5 text-sm font-bold text-muted-foreground">
          © {new Date().getFullYear()} Poptone Soda Co. Made with fizz.
        </p>
      </div>
    </footer>
  )
}
