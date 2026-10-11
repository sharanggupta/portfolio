// The dark band under the name: email, website and profile links, each with a small icon.
// Icons are drawn with SVG shapes, so no image files are needed.

import { createElement as h } from "react";
import { Circle, Line, Path, Rect, Svg, Text, View } from "@react-pdf/renderer";
import { SLATE, styles } from "./cv-styles.mjs";

const WHITE = "#ffffff";
const ICON_SIZE = 12;
const iconProps = { width: ICON_SIZE, height: ICON_SIZE, viewBox: "0 0 12 12" };

const mailIcon = h(
  Svg,
  iconProps,
  h(Rect, { x: 0.8, y: 2, width: 10.4, height: 8, rx: 1, stroke: WHITE, strokeWidth: 1, fill: "none" }),
  h(Path, { d: "M1 3 L6 7 L11 3", stroke: WHITE, strokeWidth: 1, fill: "none" }),
);

const globeIcon = h(
  Svg,
  iconProps,
  h(Circle, { cx: 6, cy: 6, r: 5, stroke: WHITE, strokeWidth: 1, fill: "none" }),
  h(Path, { d: "M6 1 C3 4 3 8 6 11 C9 8 9 4 6 1 Z", stroke: WHITE, strokeWidth: 0.8, fill: "none" }),
  h(Line, { x1: 1, y1: 6, x2: 11, y2: 6, stroke: WHITE, strokeWidth: 0.8 }),
);

const letterTile = (letters) =>
  h(
    View,
    { style: { width: ICON_SIZE, height: ICON_SIZE, borderRadius: 2, backgroundColor: WHITE, alignItems: "center", justifyContent: "center" } },
    h(Text, { style: { fontSize: 6.5, fontWeight: "bold", color: SLATE } }, letters),
  );

const contactItem = (icon, label) =>
  h(View, { style: styles.bandItem }, icon, h(Text, { style: styles.bandText }, label));

/** `contacts` is { email, website, linkedin, github }, each already formatted for display. */
export const contactBand = (contacts) =>
  h(
    View,
    { style: styles.band },
    contactItem(mailIcon, contacts.email),
    contactItem(globeIcon, contacts.website),
    contactItem(letterTile("in"), contacts.linkedin),
    contactItem(letterTile("GH"), contacts.github),
  );
