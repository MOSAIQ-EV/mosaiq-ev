import { GetServerSideProps } from "next";
import React from "react";

import { client } from "../api";
import { Page_Content } from "../api/querys";
import Page from "../components/Page";
import { PageContent } from "../generated/PageContent";
import { mainColor } from "../styles/color";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.request(Page_Content, {
    name: "Impressum",
    id: "",
  });

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { ...data },
  };
};

export default function Imprint(props: PageContent) {
  return (
    <Page
      noPageHeadlineOverlay
      title="Impressum"
      {...props}
      colors={[
        mainColor.green,
        mainColor.purple,
        mainColor.blue,
        mainColor.red,
      ]}
    />
  );
}
