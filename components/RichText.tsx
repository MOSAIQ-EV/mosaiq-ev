import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
  }
  p {
    margin: 1rem 0;
  }
`;

type Props = {
  document: Document;
};

export default function RichText({ document }: Props) {
  return <Container>{documentToReactComponents(document)}</Container>;
}
