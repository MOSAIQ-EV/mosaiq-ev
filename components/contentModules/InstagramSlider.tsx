import React, { useEffect, useState } from "react";

import { PageContent_pageCollection_items_contentCollection_items_ImageSlider_imagesCollection_items } from "../../generated/PageContent";
import ImageSlider from "./ImageSlider";

export default function InstagramSlider() {
  const [data, setData] = useState<
    PageContent_pageCollection_items_contentCollection_items_ImageSlider_imagesCollection_items[]
  >();

  useEffect(() => {
    fetch(
      "https://graph.instagram.com/v1.0/17841407859198546/media?access_token=IGQVJWZAmZAMcXd0blFTNDRMazRVbTJueUZAjcEhWRVZApRXhqVHoxVXdhVVU3TlNZAc0JBR1o3VUdReEVZAMTNleldiQm5ySE1oNjFMTENNdkFRMzJaVlNHMUpVYzdDM1J3ZA1piRHJnbU9tdFBxMk9QV2d4XwZDZD%0A&fields=media_url,media_type&limit=25",
    )
      .then((res) => res.json())
      .then(({ data }) =>
        setData(
          data
            .filter(
              (i) =>
                i.media_type === "IMAGE" || i.media_type === "CAROUSEL_ALBUM",
            )
            .map((img) => ({ url: img.media_url, description: "" })),
        ),
      );
  }, []);

  return (
    <ImageSlider
      __typename="ImageSlider"
      imagesCollection={{ items: data || [] }}
    />
  );
}
