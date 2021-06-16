import React from "react";

import { PageContent_pageCollection_items_contentCollection_items_ImageSlider_imagesCollection_items } from "../../generated/PageContent";
import ImageSlider from "./ImageSlider";

export default function InstagramSlider({
  images,
}: {
  images: PageContent_pageCollection_items_contentCollection_items_ImageSlider_imagesCollection_items[];
}) {
  return (
    <ImageSlider
      __typename="ImageSlider"
      imagesCollection={{ items: images }}
      unoptimized
    />
  );
}
