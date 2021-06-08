import { GetServerSideProps } from "next";
import React from "react";

import { client } from "../api";
import { Page_Content } from "../api/querys";
import Page from "../components/Page";
import { PageContent } from "../generated/PageContent";
import { mainColor } from "../styles/color";

//IGQVJVUEpZAY2pkM05oY01HbjluU0lkREtEYUFfMHpiRjlRcTUwd3lvb3VKVVE5bjlYYUp4QXdQUXQ2ZAnhQMVRYRkN5d0FLb2NxMkNBTXdWQUROUXVmVFNITzNHTFlHM0NoQWZAKZA3JZAa25uN21Sb19MUwZDZD

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
