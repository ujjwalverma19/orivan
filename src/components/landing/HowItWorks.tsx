import discover from "@/assets/how-discover.webp";
import learn from "@/assets/how-learn.webp";
import apply from "@/assets/how-apply.webp";

const steps = [
  {
    n: "01",
    title: "Discover",
    img: discover,
    body: "Find people whose journeys match your ambitions.",
  },
  {
    n: "02",
    title: "Learn",
    img: learn,
    body: "Study their decisions, failures, habits, resources, and turning points.",
  },
  {
    n: "03",
    title: "Apply",
    img: apply,
    body: "Turn lessons from their journeys into your own roadmap.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-clay">
            The Method
          </span>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-[1.05]">
            How Orivan works.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((s) => (
            <div key={s.n} className="group relative">
              <div className="aspect-[5/4] rounded-[1.75rem] overflow-hidden bg-secondary border border-border">
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={640}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="font-display text-2xl text-clay">{s.n}</span>
                <h3 className="font-display text-3xl font-medium text-foreground">{s.title}</h3>
              </div>
              <p className="mt-3 text-foreground/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
