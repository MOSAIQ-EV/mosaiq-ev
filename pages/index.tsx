import { GetServerSideProps } from "next";
import React from "react";

import { client } from "../api";
import { Page_Content } from "../api/querys";
import Page from "../components/Page";
import {
  PageContent,
  PageContent_pageCollection_items_contentCollection_items_ImageSlider_imagesCollection_items,
} from "../generated/PageContent";
import { mainColor } from "../styles/color";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.request(Page_Content, {
    name: "Startseite",
    id: "",
  });
  try {
    await fetch(
      ` https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`,
    );

    const instagramImages = await fetch(
      `https://graph.instagram.com/v1.0/17841407859198546/media?access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}&fields=media_url,media_type&limit=50`,
    )
      .then((res) => res.json())
      .then(({ data }) =>
        data
          .filter(
            (i) =>
              i.media_type === "IMAGE" || i.media_type === "CAROUSEL_ALBUM",
          )
          .map((img) => ({
            url: img.media_url,
            description: "Bild vom MOSAIQ Instagram Account",
          })),
      )
      .catch(() => null);
    return {
      props: { ...data, instagramImages },
    };
  } catch {
    return { props: { ...data } };
  }
};

export default function StartPage(
  props: PageContent & {
    instagramImages: PageContent_pageCollection_items_contentCollection_items_ImageSlider_imagesCollection_items[];
  },
) {
  return (
    <Page
      {...props}
      title="Startseite"
      colors={[
        mainColor.purple,
        mainColor.red,
        mainColor.blue,
        mainColor.green,
      ]}
    />
  );
}
