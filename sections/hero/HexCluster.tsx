import styles from "./HexCluster.module.css";

const HEX_SIDES = 6;

function hexagonPoints(centerX: number, centerY: number, radius: number): string {
  return Array.from({ length: HEX_SIDES }, (_, corner) => {
    const angle = ((2 * Math.PI) / HEX_SIDES) * corner - Math.PI / 2;
    return `${(centerX + radius * Math.cos(angle)).toFixed(1)},${(centerY + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(" ");
}

const ADAPTERS: ReadonlyArray<readonly [number, number]> = [
  [200, 122],
  [292, 176],
  [292, 284],
  [108, 284],
  [108, 176],
];

/** Decorative hero art: overlapping translucent hexagons with a passing test at the core. */
export default function HexCluster() {
  return (
    <div className={styles.art} aria-hidden="true">
      <svg viewBox="0 0 400 400" width="100%" focusable="false">
        <defs>
          <linearGradient id="hex-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <polygon points={hexagonPoints(250, 120, 74)} fill="url(#hex-fill)" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        <polygon points={hexagonPoints(120, 190, 62)} fill="url(#hex-fill)" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
        <polygon points={hexagonPoints(300, 290, 56)} fill="url(#hex-fill)" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
        <polygon points={hexagonPoints(200, 230, 108)} fill="url(#hex-fill)" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path className={styles.check} pathLength={1} d="M150 232 L190 272 L258 190" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        {ADAPTERS.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="5" fill="currentColor" />
            <circle cx={x} cy={y} r="11" fill="none" stroke="currentColor" strokeOpacity="0.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}
