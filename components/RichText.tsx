import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

import color from "../styles/color";
import { upFromBreakpoint } from "../styles/mediaQueries";

const Container = styled.div`
  overflow: hidden;
  & > p,
  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > p,
  ul,
  ol + p,
  ul,
  ol {
    margin-top: 1rem;
  }
  a {
    color: ${color.green};
    font-weight: bold;
    text-decoration: none;
  }
  ul,
  ol {
    margin-left: 2rem;
    ${upFromBreakpoint("medium")} {
      margin-left: 3rem;
    }
  }
`;

type Props = {
  document: Document;
};

export default function RichText({ document }: Props) {
  return <Container>{documentToReactComponents(document)}</Container>;
}
