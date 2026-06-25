import { useState } from "react";
import type { Person } from "@/content/schemas";

/**
 * Reusable portrait renderer.
 *
 * - If `person.portrait` resolves to a real image, render it.
 * - Otherwise (missing or load error), render a deterministic editorial
 *   fallback built from initials + soft geometric shapes, in the same warm
 *   cream palette as existing journey cards.
 *
 * String paths like "/src/assets/foo.webp" are resolved through Vite's
 * import.meta.glob so content files don't need to use ES imports.
 */

const assetUrls = import.meta.glob("/src/assets/journey-*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function resolvePortrait(portrait?: string): string | null {
  if (!portrait) return null;
  if (/^(https?:)?\/\//.test(portrait)) return portrait;
  if (portrait.startsWith("/src/")) return assetUrls[portrait] ?? null;
  return portrait;
}

function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

const SIZE_PX: Record<NonNullable<PortraitSize>, number> = {
  sm: 96,
  md: 192,
  lg: 512,
  xl: 768,
};

type PortraitSize = "sm" | "md" | "lg" | "xl";

interface Props {
  person: Pick<Person, "name" | "slug" | "portrait" | "roles" | "industry">;
  size?: PortraitSize;
  className?: string;
  eager?: boolean;
  sizes?: string;
}

export function PersonPortrait({
  person,
  size = "lg",
  className = "",
  eager = false,
  sizes,
}: Props) {
  const resolved = resolvePortrait(person.portrait);
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const px = SIZE_PX[size];

  const showImage = resolved && !errored;

  return (
    <div className={`relative w-full h-full overflow-hidden bg-secondary ${className}`}>
      {showImage ? (
        <>
          {!loaded && <div className="absolute inset-0 animate-pulse bg-secondary" aria-hidden />}
          <img
            src={resolved}
            alt={`Illustrated portrait of ${person.name}`}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            decoding="async"
            width={px}
            height={px}
            sizes={
              sizes ??
              (size === "xl"
                ? "(min-width: 1024px) 42vw, 100vw"
                : size === "lg"
                  ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  : `${px}px`)
            }
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </>
      ) : (
        <PortraitFallback person={person} />
      )}
    </div>
  );
}

function PortraitFallback({
  person,
}: {
  person: Pick<Person, "name" | "slug" | "roles" | "industry">;
}) {
  const h = hashSlug(person.slug);
  const cx1 = 20 + (h % 30); // 20-49
  const cy1 = 18 + ((h >> 3) % 30);
  const cx2 = 60 + ((h >> 6) % 25);
  const cy2 = 55 + ((h >> 9) % 30);
  const r1 = 28 + ((h >> 12) % 14);
  const r2 = 22 + ((h >> 15) % 16);
  const rot = (h >> 18) % 360;
  const initials = initialsOf(person.name);
  const badge = person.roles?.[0] ?? person.industry ?? "Journey";

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <rect width="100" height="100" className="fill-secondary" />
        <g style={{ transformOrigin: "50% 50%", transform: `rotate(${rot}deg)` }}>
          <circle cx={cx1} cy={cy1} r={r1} className="fill-primary" opacity="0.18" />
          <ellipse
            cx={cx2}
            cy={cy2}
            rx={r2}
            ry={r2 * 0.75}
            className="fill-primary"
            opacity="0.14"
          />
          <circle cx={50} cy={92} r={24} className="fill-foreground" opacity="0.06" />
        </g>
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-display fill-foreground"
          fontSize="32"
          fontWeight="500"
          opacity="0.82"
        >
          {initials}
        </text>
      </svg>
      <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-card/95 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/75 border border-border">
        {badge}
      </span>
    </div>
  );
}
