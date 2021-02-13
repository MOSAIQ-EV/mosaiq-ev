import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

import { client } from "../api";
import { Page_Content } from "../api/querys";
import Page from "../components/Page";
import { PageContent } from "../generated/PageContent";
import { mainColor } from "../styles/color";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.request(Page_Content, {
    name: "Über uns",
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

export default function AboutUs(props: PageContent) {
  return (
    <Page
      {...props}
      title="Über uns"
      colors={[
        mainColor.blue,
        mainColor.purple,
        mainColor.red,
        mainColor.green,
      ]}
    />
  );
}
