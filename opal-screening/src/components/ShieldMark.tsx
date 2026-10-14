import { useId } from "react";

/**
 * Opal shield mark, rebuilt as a vector from the approved brand board.
 * tone="ink"  navy body for light backgrounds (primary mark)
 * tone="opal" aqua/blue body for dark backgrounds
 * Replace with the designer's master vector when available; keep the API.
 */
export function ShieldMark({
  tone = "ink",
  className,
  title,
}: {
  tone?: "ink" | "opal";
  className?: string;
  title?: string;
}) {
  const id = useId().replace(/:/g, "");
  const ink = tone === "ink";
  return (
    <svg viewBox="0 0 200 240" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <defs>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="1" y2="1">
          {ink ? (
            <>
              <stop offset="0" stopColor="#27334f" />
              <stop offset=".55" stopColor="#141d36" />
              <stop offset="1" stopColor="#0b1226" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#5ce6f2" />
              <stop offset=".5" stopColor="#25b2e8" />
              <stop offset="1" stopColor="#1f5fd8" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`r${id}`} x1="0" y1="0" x2="0" y2="1">
          {ink ? (
            <>
              <stop offset="0" stopColor="#2fd6c4" />
              <stop offset=".5" stopColor="#1d8fd0" />
              <stop offset="1" stopColor="#1a3f8f" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#2d3a5c" />
              <stop offset="1" stopColor="#141d38" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`t${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2b6ff0" />
          <stop offset="1" stopColor="#36e0e6" />
        </linearGradient>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8af3ff" />
          <stop offset=".5" stopColor="#2bb4f0" />
          <stop offset="1" stopColor="#2a5ae6" />
        </linearGradient>
        <mask id={`m${id}`} maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="240">
          <path d="M100 6 182 50v82c0 48-36 82-82 102-46-20-82-54-82-102V50Z" fill="#fff" />
          <path d="M100 70c11 6 22 12 28 20 6 9 8 21 8 34s-2 25-8 35c-6 9-17 16-28 22-11-6-22-13-28-22-6-10-8-22-8-35s2-25 8-34c6-8 17-14 28-20Z" fill="#000" />
          <g fill="none" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M128 0 58 60c-9 18-13 40-13 64s4 44 12 58l33 22" />
            <path d="M72 248l70-60c9-18 13-40 13-64s-4-44-12-58l-33-22" />
          </g>
        </mask>
      </defs>
      <g mask={`url(#m${id})`}>
        <rect width="200" height="240" fill={`url(#b${id})`} />
        <path d="M100 6 182 50v82c0 48-36 82-82 102l50-48c7-18 10-40 10-62s-3-42-10-58Z" fill={`url(#r${id})`} opacity={ink ? 0.92 : 1} />
        <path d="M100 6 142 28 112 52Z" fill={`url(#t${id})`} />
        <path d="M18 50 60 60c-9 20-14 42-14 64L18 132Z" fill="#fff" opacity={ink ? 0.07 : 0.18} />
        <path d="M58 182 100 210v24c-30-12-54-30-66-52Z" fill="#000" opacity=".22" />
      </g>
      <path d="M100 102 112.5 124 100 148 87.5 124Z" fill={`url(#g${id})`} />
      <path d="M100 102V148L87.5 124Z" fill="#fff" opacity=".3" />
    </svg>
  );
}
