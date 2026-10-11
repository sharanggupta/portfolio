// The brand mark: a hexagon with a passing test (a check) inside.
// Decorative (aria-hidden); the text next to it names it. It is drawn in `color`, which by default
// is the surrounding text colour, and also renders the social image and the Apple icon.

export default function BrandMark({
  size = 28,
  color = "currentColor",
  fillOpacity = 0.1,
}: {
  size?: number;
  color?: string;
  fillOpacity?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <polygon
        points="32,4 56,18 56,46 32,60 8,46 8,18"
        fill={color}
        fillOpacity={fillOpacity}
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M20 33 L29 42 L45 24" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
