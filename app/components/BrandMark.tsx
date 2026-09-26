export default function BrandMark({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="HappyLuxe HL logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hl-pink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7a2c8" />
          <stop offset="100%" stopColor="#c21868" />
        </linearGradient>
      </defs>
      <path
        d="M18 17 V83 M18 50 H55 M55 17 V83 M72 17 V83 H91"
        fill="none"
        stroke="url(#hl-pink)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 72 C27 57 33 93 52 73 S78 57 94 36"
        fill="none"
        stroke="#f3a1c5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
