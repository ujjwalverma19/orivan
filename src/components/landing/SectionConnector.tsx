/**
 * SectionConnector
 * Hand-drawn dashed route that visually links two sections, with a small
 * milestone marker midway. Sits between sections at very low opacity.
 */
type Props = {
  variant?: "left" | "right" | "center";
  marker?: "dot" | "star" | "compass" | "pin" | "none";
};

export function SectionConnector({ variant = "center", marker = "dot" }: Props) {
  const path =
    variant === "left"
      ? "M 80 0 Q 40 60 120 120 T 80 240"
      : variant === "right"
        ? "M 320 0 Q 380 60 280 120 T 320 240"
        : "M 200 0 Q 120 70 220 130 T 200 240";

  return (
    <div
      aria-hidden
      className="relative mx-auto h-32 sm:h-40 w-full max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 text-foreground"
    >
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="none"
        className="absolute inset-0 mx-auto h-full w-full max-w-2xl opacity-[0.18]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      >
        <path d={path} strokeDasharray="3 7" />

        {marker === "dot" && (
          <g transform="translate(200 120)">
            <circle r="3.5" fill="currentColor" />
            <circle r="9" strokeDasharray="2 3" />
          </g>
        )}

        {marker === "star" && (
          <g transform="translate(200 120)" fill="currentColor">
            <path d="M0 -9 L2.4 -2.8 9 -2.4 3.8 1.6 5.6 8 0 4.6 -5.6 8 -3.8 1.6 -9 -2.4 -2.4 -2.8 Z" />
          </g>
        )}

        {marker === "compass" && (
          <g transform="translate(200 120)">
            <circle r="12" />
            <circle r="6" strokeDasharray="1.5 2" />
            <path d="M0 -16 L2.5 0 0 16 -2.5 0 Z" fill="currentColor" fillOpacity="0.4" />
          </g>
        )}

        {marker === "pin" && (
          <g transform="translate(200 116)">
            <path d="M0 -10 a5 5 0 1 1 0.01 0" />
            <path d="M0 -5 V 12" />
            <circle cx="0" cy="-10" r="1.6" fill="currentColor" />
          </g>
        )}
      </svg>
    </div>
  );
}
