"use client";

import MediaCarousel from "./MediaCarousel";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

/** Thin wrapper — prefer MediaCarousel for mixed image/video items. */
export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  return (
    <MediaCarousel
      alt={alt}
      items={images.map((src) => ({ type: "image" as const, src }))}
    />
  );
}
