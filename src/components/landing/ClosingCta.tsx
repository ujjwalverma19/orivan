export function ClosingCta() {
  return (
    <section className="px-6 lg:px-10 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-primary px-8 py-20 lg:py-28 text-center relative overflow-hidden">
        <div
          className="absolute top-8 left-10 font-display text-5xl text-foreground/15 rotate-[-8deg]"
          aria-hidden
        >
          ✦
        </div>
        <div
          className="absolute bottom-10 right-12 font-display text-7xl text-foreground/15 rotate-[12deg]"
          aria-hidden
        >
          ✺
        </div>
        <div
          className="absolute top-1/2 right-8 font-display text-4xl text-foreground/15"
          aria-hidden
        >
          ~
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-[1.08] max-w-3xl mx-auto">
          Your next lesson may already exist in someone else's journey.
        </h2>
        <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 h-14 font-semibold text-base hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-[0_6px_0_0_var(--color-clay)]">
          Start Exploring
        </button>
      </div>
    </section>
  );
}
