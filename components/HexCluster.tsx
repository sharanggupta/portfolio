// Decorative hero art: overlapping translucent hexagons with a passing test at the core.
// aria-hidden because it carries no information.
export default function HexCluster() {
  const hex = (cx: number, cy: number, r: number) =>
    [0, 1, 2, 3, 4, 5]
      .map((i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
      })
      .join(" ");

  return (
    <div className="hero-art hidden md:block" aria-hidden="true">
      <svg viewBox="0 0 400 400" width="100%" focusable="false">
        <defs>
          <linearGradient id="hex-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <polygon points={hex(250, 120, 74)} fill="url(#hex-fill)" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        <polygon points={hex(120, 190, 62)} fill="url(#hex-fill)" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
        <polygon points={hex(300, 290, 56)} fill="url(#hex-fill)" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
        <polygon points={hex(200, 230, 108)} fill="url(#hex-fill)" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M150 232 L190 272 L258 190" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        {[
          [200, 122],
          [292, 176],
          [292, 284],
          [108, 284],
          [108, 176],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="5" fill="currentColor" />
            <circle cx={x} cy={y} r="11" fill="none" stroke="currentColor" strokeOpacity="0.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}
