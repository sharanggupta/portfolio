// Colours and text styles of the CV PDF (react-pdf stylesheet).

import { Font, StyleSheet } from "@react-pdf/renderer";

// Words stay whole: no "Technol-ogy" breaks.
Font.registerHyphenationCallback((word) => [word]);

export const SLATE = "#343f56"; // headings and the contact band
const SLATE_SOFT = "#4a5775"; // role line
const CHIP = "#9aa1ac";
const GREY = "#6b7280";
const INK = "#16191d";

export const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 8.4, color: INK, lineHeight: 1.35 },
  top: { paddingTop: 24, paddingHorizontal: 34, paddingBottom: 9 },
  name: { fontSize: 27, lineHeight: 1.1, color: INK },
  role: { fontSize: 12.5, color: SLATE_SOFT, marginTop: 4 },
  tagline: { fontSize: 9.5, marginTop: 5 },
  band: { backgroundColor: SLATE, color: "#ffffff", paddingVertical: 7, paddingHorizontal: 34, flexDirection: "row", flexWrap: "wrap" },
  bandItem: { width: "50%", flexDirection: "row", alignItems: "center", paddingVertical: 4 },
  bandText: { marginLeft: 8, fontSize: 9.5, color: "#ffffff" },
  columns: { flexDirection: "row", paddingHorizontal: 34, paddingTop: 10 },
  left: { width: "56%", paddingRight: 22 },
  right: { width: "44%" },
  heading: { fontSize: 13, fontWeight: "bold", color: SLATE, textTransform: "uppercase", marginBottom: 6 },
  entry: { marginBottom: 13 },
  tick: { position: "absolute", left: -34, top: 8, width: 14, borderTopWidth: 1, borderTopColor: INK },
  title: { fontSize: 10.6, fontWeight: "bold" },
  company: { fontSize: 9.6 },
  metaRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 1 },
  meta: { fontSize: 8, fontStyle: "italic", color: GREY },
  bullet: { flexDirection: "row", marginTop: 3.5 },
  bulletDot: { width: 11, paddingTop: 3.5 },
  grow: { flexGrow: 1, flexShrink: 1, fontSize: 8 },
  chips: { flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
  chip: { backgroundColor: CHIP, color: "#ffffff", fontSize: 7.8, paddingVertical: 2.6, paddingHorizontal: 8, borderRadius: 3, marginRight: 5, marginBottom: 5 },
  project: { marginBottom: 12 },
  projectName: { fontSize: 9.4 },
  projectText: { fontSize: 7.9, color: "#333333" },
  section: { marginBottom: 20 },
  link: { fontSize: 7.9, color: SLATE, textDecoration: "underline", marginTop: 3 },
});
