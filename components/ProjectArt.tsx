// Generated card header: a field of hexagons, shifted a little differently for every card.
export default function ProjectArt({ seed }: { seed: number }) {
  const offset = (seed * 17) % 40;
  return (
    <svg viewBox="0 0 400 128" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`hexes-${seed}`} width="56" height="97" patternUnits="userSpaceOnUse" patternTransform={`translate(${offset} -${offset / 2})`}>
          <path d="M28 2 L52 16 L52 44 L28 58 L4 44 L4 16 Z" fill="none" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.2" />
          <path d="M0 50 L24 64 L24 92 L0 106 M56 50 L32 64 L32 92 L56 106" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="400" height="128" fill={`url(#hexes-${seed})`} />
      <circle cx={300 + offset} cy="30" r="90" fill="#fff" fillOpacity="0.08" />
    </svg>
  );
}
