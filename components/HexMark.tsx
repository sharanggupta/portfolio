// The brand mark: a hexagon with a passing test (a check) inside, adapters around it.
// Decorative by default (aria-hidden); the surrounding text names it.
export default function HexMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <polygon
        points="32,4 56,18 56,46 32,60 8,46 8,18"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M20 33 L29 42 L45 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
