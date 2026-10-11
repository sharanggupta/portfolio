import { ImageResponse } from "next/og";
import BrandMark from "@/components/brand/BrandMark";
import { PERSON } from "@/content/person";
import { BRAND_COLORS } from "./tokens";

const MARK_FILL_OPACITY = 0.12;

function Mark({ size }: { size: number }) {
  return <BrandMark size={size} color={BRAND_COLORS.accent} fillOpacity={MARK_FILL_OPACITY} />;
}


/** The 1200x630 picture shown when the site is shared. */
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
          background: BRAND_COLORS.background,
          border: `2px solid ${BRAND_COLORS.border}`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: BRAND_COLORS.accent }}>
            {PERSON.focus.toUpperCase()}
          </div>
          <div style={{ marginTop: 28, fontSize: 84, fontWeight: 700, color: BRAND_COLORS.foreground }}>
            {PERSON.name}
          </div>
          <div style={{ marginTop: 6, fontSize: 40, color: BRAND_COLORS.accent }}>
            {PERSON.jobTitle}
          </div>
          <div style={{ marginTop: 22, fontSize: 36, color: BRAND_COLORS.foreground }}>
            {PERSON.tagline}
          </div>
        </div>
        <Mark size={300} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

/** The 180x180 icon for iOS home screens. */
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
          background: BRAND_COLORS.background,
        }}
      >
        <Mark size={140} />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
