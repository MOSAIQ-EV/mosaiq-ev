import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

import { longText_text_links } from "../generated/longText";
import color from "../styles/color";
import { upFromBreakpoint } from "../styles/mediaQueries";
import Img from "./Img";

const Container = styled.div`
  overflow: hidden;
  & > p,
  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > p + p,
  ul + p,
  ol + p,
  p + ul,
  p + ol,
  ul + ul,
  ol + ul,
  ul + ol,
  ol + ol {
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
  h1,
  h2,
  h3 {
    margin-top: 0.5em;
  }
`;

const StyledImage = styled(Img)`
  border-radius: 0.5em;
  margin: 1em 0;
  ${upFromBreakpoint("small")} {
    width: 35%;
  }
`;

type Props = {
  document: Document;
  links?: longText_text_links;
};

export default function RichText({ document, links }: Props) {
  return (
    <Container>
      {documentToReactComponents(document, {
        renderText: (text) =>
          text
            .split("\n")
            .flatMap((text, i) => [i > 0 && <br key={i} />, text]),

        renderNode: {
          // eslint-disable-next-line react/display-name
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { url } = links.assets.block.find((e) =>
              e.url.includes(node.data.target.sys.id),
            );

            return (
              <StyledImage url={url} description={"ogo"} aspectRatio={16 / 9} />
            );
          },
        },
      })}
    </Container>
  );
}
