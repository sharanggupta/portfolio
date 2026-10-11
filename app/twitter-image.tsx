import { socialImage } from "@/lib/brand-image";

// Same picture for the Twitter/X large card (twitter:image is added automatically).
export const alt = "Sharang Gupta, software engineer: a hexagon with a passing test";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return socialImage();
}
