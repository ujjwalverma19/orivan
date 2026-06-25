import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const CREATOR_LINKS = [
  { label: "GitHub", href: "https://github.com/ujjwalverma19", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ujjwalv19/", Icon: Linkedin },
  { label: "X", href: "https://x.com/UJJWALV75382953", Icon: Twitter },
  { label: "Instagram", href: "https://instagram.com/ujjwal_verma19", Icon: Instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-semibold text-foreground">Orivan</span>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <p className="mt-4 max-w-xs text-foreground/65 leading-relaxed">
              A library of lives. Discover the paths behind greatness.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
              About Orivan
            </h4>
            <p className="mt-4 max-w-md text-sm text-foreground/65 leading-relaxed">
              Orivan exists to preserve and share the full life journeys of world-shaping people —
              not just their highlights, but the doubts, failures, and decisions that built them.
              Learning from a life takes longer than reading a quote.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
              Built by
            </h4>
            <p className="mt-4 text-sm text-foreground/75">Ujjwal Verma</p>
            <div className="mt-3 flex items-center gap-2">
              {CREATOR_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/65 hover:text-foreground hover:bg-cream/60 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-sm text-foreground/55">
          <p>© {new Date().getFullYear()} Orivan. Every life leaves a map.</p>
          <p>Made with care, for the curious.</p>
        </div>
      </div>
    </footer>
  );
}
