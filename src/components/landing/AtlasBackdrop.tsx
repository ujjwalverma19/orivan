/**
 * AtlasBackdrop
 * Site-wide ambient layer: hand-drawn compass, stars, map fragments and
 * sketch doodles repeated subtly down the page. Sits behind all content.
 * Opacity is kept between 5–9% so it never competes with typography.
 */
export function AtlasBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-foreground"
    >
      {/* Tiled doodle pattern across the whole page */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="atlas-doodles"
            x="0"
            y="0"
            width="520"
            height="520"
            patternUnits="userSpaceOnUse"
          >
            {/* compass rose */}
            <g
              transform="translate(80 90)"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
            >
              <circle cx="0" cy="0" r="26" />
              <circle cx="0" cy="0" r="18" strokeDasharray="2 3" />
              <path d="M0 -32 L4 0 L0 32 L-4 0 Z" fill="currentColor" fillOpacity="0.35" />
              <path d="M-32 0 L0 -4 L32 0 L0 4 Z" fill="currentColor" fillOpacity="0.18" />
              <text
                x="0"
                y="-38"
                textAnchor="middle"
                fontSize="8"
                fill="currentColor"
                fontFamily="serif"
              >
                N
              </text>
            </g>

            {/* tiny stars */}
            <g fill="currentColor">
              <path d="M230 60 l1.4 3.4 3.6 .3 -2.8 2.3 .9 3.5 -3.1 -1.9 -3.1 1.9 .9 -3.5 -2.8 -2.3 3.6 -.3z" />
              <path d="M430 220 l1 2.4 2.6 .2 -2 1.7 .6 2.5 -2.2 -1.3 -2.2 1.3 .6 -2.5 -2 -1.7 2.6 -.2z" />
              <path d="M120 320 l1 2.4 2.6 .2 -2 1.7 .6 2.5 -2.2 -1.3 -2.2 1.3 .6 -2.5 -2 -1.7 2.6 -.2z" />
              <circle cx="350" cy="430" r="1.6" />
              <circle cx="60" cy="440" r="1.4" />
              <circle cx="470" cy="90" r="1.4" />
            </g>

            {/* dashed route */}
            <path
              d="M -20 200 Q 100 140 220 210 T 460 200 T 720 220"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 6"
              strokeLinecap="round"
            />
            <path
              d="M -20 380 Q 140 460 280 380 T 540 400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 6"
              strokeLinecap="round"
            />

            {/* sketch mountain */}
            <g
              transform="translate(330 340)"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path d="M -34 22 L -10 -14 L 4 6 L 18 -22 L 40 22 Z" />
              <path d="M -2 -6 L 4 -2 M 14 -14 L 20 -8" strokeWidth="0.9" />
            </g>

            {/* small book / milestone */}
            <g
              transform="translate(140 150)"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
            >
              <rect x="-10" y="-7" width="20" height="14" rx="1.5" />
              <path d="M0 -7 V 7" />
              <path d="M-7 -3 H -2 M 2 -3 H 7 M -7 0 H -2 M 2 0 H 7" />
            </g>

            {/* milestone pin */}
            <g transform="translate(430 380)" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 -10 a4 4 0 1 1 0.01 0" />
              <path d="M0 -6 V 8" />
              <circle cx="0" cy="-10" r="1.4" fill="currentColor" />
            </g>

            {/* dotted graticule fragment */}
            <g stroke="currentColor" strokeWidth="0.7" strokeDasharray="1 4" opacity="0.7">
              <path d="M 0 110 H 520" />
              <path d="M 0 270 H 520" />
              <path d="M 200 0 V 520" />
              <path d="M 380 0 V 520" />
            </g>
          </pattern>

          <radialGradient id="atlas-mask" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="atlas-soft-mask">
            <rect width="100%" height="100%" fill="url(#atlas-mask)" />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="url(#atlas-doodles)" mask="url(#atlas-soft-mask)" />
      </svg>
    </div>
  );
}
