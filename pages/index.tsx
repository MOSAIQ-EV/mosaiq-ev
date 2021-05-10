import Instagram from "instagram-web-api";
import { GetServerSideProps } from "next";
import React from "react";

import { client } from "../api";
import { Page_Content } from "../api/querys";
import Page from "../components/Page";
import { PageContent } from "../generated/PageContent";
import { mainColor } from "../styles/color";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.request(Page_Content, {
    name: "Startseite",
    id: "",
  });

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { ...data, instagramImages: [] },
  };
};

export default function StartPage(
  props: PageContent & { instagramImages: string[] },
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
