import { Link } from "@tanstack/react-router";
import founder from "@/assets/cat-founder.webp";
import creator from "@/assets/cat-creator.webp";
import athlete from "@/assets/cat-athlete.webp";
import investor from "@/assets/cat-investor.webp";
import pm from "@/assets/cat-pm.webp";
import engineer from "@/assets/cat-engineer.webp";

type Cat = { name: string; img: string; blurb: string; matchers: string[] };

const CATS: Cat[] = [
  {
    name: "Founder",
    img: founder,
    blurb: "Builders who turned conviction into companies.",
    matchers: ["founder", "co-founder", "ceo"],
  },
  {
    name: "Creator",
    img: creator,
    blurb: "Writers, designers, and makers shaping culture.",
    matchers: ["creator", "designer", "writer", "storyteller", "artist"],
  },
  {
    name: "Athlete",
    img: athlete,
    blurb: "Lives lived in pursuit of the next decimal.",
    matchers: ["athlete"],
  },
  {
    name: "Investor",
    img: investor,
    blurb: "Capital allocators who saw what others missed.",
    matchers: ["investor"],
  },
  {
    name: "Product Manager",
    img: pm,
    blurb: "Translators between people, code, and craft.",
    matchers: ["product manager", "product visionary", "product"],
  },
  {
    name: "Engineer",
    img: engineer,
    blurb: "Thinkers who turn first principles into systems.",
    matchers: ["engineer"],
  },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-clay">
            Categories
          </span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-[1.05]">
            Find your kind of greatness.
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            Every craft has its masters. Browse by the life you're trying to build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATS.map((c) => (
            <Link
              key={c.name}
              to="/search"
              search={{ q: c.name, kind: "person" as const }}
              aria-label={`Browse ${c.name} journeys`}
              className="group bg-card rounded-[1.75rem] border border-border p-6 flex items-center gap-5 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="h-24 w-24 shrink-0 rounded-2xl overflow-hidden bg-[color:var(--color-butter-soft)]">
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={640}
                  sizes="96px"
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-2xl font-medium text-foreground">{c.name}</h3>
                <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
