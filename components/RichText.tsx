import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  h1 {
    font-size: 6em;
  }
  h2 {
    font-size: 5em;
  }
  h3 {
    font-size: 4em;
  }
  h4 {
    font-size: 3em;
  }
  h5 {
    font-size: 2em;
  }
  h6 {
    font-size: 1em;
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
