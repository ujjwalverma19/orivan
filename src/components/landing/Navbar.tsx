import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <nav className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Orivan
          </span>
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground/80">
          <Link to="/" hash="journeys" className="hover:text-foreground transition-colors">
            Journeys
          </Link>
          <Link to="/paths" className="hover:text-foreground transition-colors">
            Paths
          </Link>
          <Link to="/" hash="categories" className="hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link to="/" hash="how" className="hover:text-foreground transition-colors">
            How It Works
          </Link>
        </div>
        <Button
          asChild
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-11 font-semibold shadow-[0_4px_0_0_var(--color-ink)]"
        >
          <Link to="/paths">Get Started</Link>
        </Button>
      </nav>
    </header>
  );
}
