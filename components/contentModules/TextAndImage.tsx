import React from "react";
import styled, { css } from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_TextAndImage } from "../../generated/PageContent";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import { aspectRatio } from "../../styles/mixins";
import ContentSection from "../ContentSection";
import Img, { getAuthor } from "../Img";
import TextBox from "../TextBox";
import { ImageBox } from "./Image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${upFromBreakpoint("medium")} {
    margin: 0 -1rem 2rem -1rem;
  }
`;

const Text = styled(TextBox)`
  z-index: 2;
  border-radius: 0 0 0.5rem 0.5rem;
  ${upFromBreakpoint("medium")} {
    width: 50%;
    border-radius: 0.5rem;
  }
`;

// const Image = styled(Img)`
//   width: 50%;
//   border-radius: 0.5rem 0.5rem 0 0;
//   overflow: hidden;
//   ${upFromBreakpoint("medium")} {
//     min-width: 50%;
//     border-radius: 0.5rem;
//     height: max-content;
//   }
//   img {
//     ${aspectRatio(16 / 10)};
//   }
// `;

const Image = styled(Img)`
  border-radius: 0.5rem 0.5rem 0 0;
  height: max-content;
  ${upFromBreakpoint("medium")} {
    width: 50%;
    /* ${aspectRatio(4 / 3)} */
    border-radius: 0.5rem;
  }
`;

const StyledContentSection = styled(ContentSection)<{ reverse: boolean }>`
  ${upFromBreakpoint("medium")} {
    ${Container} {
      flex-direction: row;
      ${Text} {
        transform: translate3d(-1rem, 2rem, 0);
      }
      ${Image} {
        transform: translate3d(1rem, 0rem, 0);
      }
    }
    ${(p) =>
      p.reverse &&
      css`
        ${Container} {
          flex-direction: row-reverse;
          ${Text} {
            transform: translate3d(1rem, 2rem, 0);
          }
          ${Image} {
            transform: translate3d(-1rem, 0rem, 0);
          }
        }
      `}
  }
`;

export default function TextAndImage({
  image,
  reverse,
  ...text
}: PageContent_pageCollection_items_contentCollection_items_TextAndImage & {
  reverse: boolean;
}) {
  return (
    <StyledContentSection reverse={reverse}>
      <Container>
        <Image url={image.url} author={getAuthor(image.description)} />
        <Text {...text} />
      </Container>
    </StyledContentSection>
  );
}
