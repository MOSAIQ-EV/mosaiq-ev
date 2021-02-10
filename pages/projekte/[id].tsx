import { GetServerSideProps } from "next";
import React from "react";

import { client } from "../../api";
import { Page_Content } from "../../api/querys";
import Page from "../../components/Page";
import { PageContent } from "../../generated/PageContent";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await client.request(Page_Content, {
    id: params.id,
    name: "",
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

export default function Project(props: PageContent) {
  return <Page {...props} />;
}
