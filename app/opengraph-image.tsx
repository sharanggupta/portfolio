import { SOCIAL_IMAGE, socialImage } from "@/components/brand/SocialImage";

// Next.js serves this at /opengraph-image and adds the og:image tags automatically.
export const alt = SOCIAL_IMAGE.alt;
export const size = SOCIAL_IMAGE.size;
export const contentType = SOCIAL_IMAGE.contentType;

export default function Image() {
  return socialImage();
}
