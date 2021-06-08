import React, { useEffect, useState } from "react";

import { PageContent_pageCollection_items_contentCollection_items_ImageSlider_imagesCollection_items } from "../../generated/PageContent";
import ImageSlider from "./ImageSlider";

export default function InstagramSlider() {
  const [data, setData] = useState<
    PageContent_pageCollection_items_contentCollection_items_ImageSlider_imagesCollection_items[]
  >();
  useEffect(() => {
    fetch(
      "https://graph.instagram.com/v1.0/17841407859198546/media?access_token=IGQVJVUEpZAY2pkM05oY01HbjluU0lkREtEYUFfMHpiRjlRcTUwd3lvb3VKVVE5bjlYYUp4QXdQUXQ2ZAnhQMVRYRkN5d0FLb2NxMkNBTXdWQUROUXVmVFNITzNHTFlHM0NoQWZAKZA3JZAa25uN21Sb19MUwZDZD&fields=media_url,media_type&limit=50",
    )
      .then((res) => res.json())
      .then(({ data }) =>
        setData(
          data
            .filter(
              (i) =>
                i.media_type === "IMAGE" || i.media_type === "CAROUSEL_ALBUM",
            )
            .map((img) => ({
              url: img.media_url,
              description: "Bild vom MOSAIQ Instagram Account",
            })),
        ),
      );
  }, []);

  return (
    <ImageSlider
      __typename="ImageSlider"
      imagesCollection={{ items: data || [] }}
      unoptimized
    />
  );
}
