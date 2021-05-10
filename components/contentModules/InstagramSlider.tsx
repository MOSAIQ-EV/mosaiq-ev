import React, { useMemo } from "react";

import ImageSlider from "./ImageSlider";

type Props = {
  images: string[];
};

export default function InstagramSlider({ images }: Props) {
  const imageCollection = useMemo(
    () =>
      images.map((img) => ({
        url: img,
        description: "Bild vom MOSAIQ Instagram Account",
        width: null,
        height: null,
      })),
    [images],
  );

  return (
    <ImageSlider
      __typename="ImageSlider"
      imagesCollection={{ items: imageCollection }}
      unoptimized
    />
  );
}
