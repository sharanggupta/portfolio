import { ImageResponse } from "next/og";
import { PERSON } from "@/content/site";

// Shared by the social preview images and the Apple icon, so the brand lives in one place.
export const COLORS = { bg: "#0d1117", fg: "#e6edf3", accent: "#5fc1c5", border: "#30363d" };

function Hexagon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <polygon
        points="32,4 56,18 56,46 32,60 8,46 8,18"
        fill={COLORS.accent}
        fillOpacity="0.12"
        stroke={COLORS.accent}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M20 33 L29 42 L45 24"
        fill="none"
        stroke={COLORS.accent}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function socialImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: COLORS.bg,
          border: `2px solid ${COLORS.border}`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: COLORS.accent }}>
            JAVA · SPRING · TDD
          </div>
          <div style={{ marginTop: 28, fontSize: 84, fontWeight: 700, color: COLORS.fg }}>
            {PERSON.name}
          </div>
          <div style={{ marginTop: 6, fontSize: 40, color: COLORS.accent }}>
            {PERSON.jobTitle}
          </div>
          <div style={{ marginTop: 22, fontSize: 36, color: COLORS.fg }}>
            {PERSON.tagline}
          </div>
        </div>
        <Hexagon size={300} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

export function appleIcon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: COLORS.bg,
        }}
      >
        <Hexagon size={140} />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
