import { SOCIAL_IMAGE, socialImage } from "@/components/brand/SocialImage";

// Same picture for the Twitter/X large card (twitter:image is added automatically).
export const alt = SOCIAL_IMAGE.alt;
export const size = SOCIAL_IMAGE.size;
export const contentType = SOCIAL_IMAGE.contentType;

export default function Image() {
  return socialImage();
}
