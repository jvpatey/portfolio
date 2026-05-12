import { ImageResponse } from "next/og";
import { SiteOpenGraphPreview } from "@/lib/siteOpenGraphPreview";

export const runtime = "edge";
export const alt = "jeffreypatey.dev — portfolio preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SiteOpenGraphPreview />, {
    ...size,
  });
}
