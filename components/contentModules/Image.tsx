import React from "react";
import styled, { css } from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Image } from "../../generated/PageContent";
import { upFromBreakpoint, upToBreakpoint } from "../../styles/mediaQueries";
import { boxShadow } from "../../styles/mixins";
import ContentSection from "../ContentSection";
import Img, { getAuthor } from "../Img";
import TextBox, { Container } from "../TextBox";

export const ImageBox = styled(Img)`
  border-radius: 0.5rem;
  width: 100%;
  ${upToBreakpoint("medium")} {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  ${upFromBreakpoint("medium")} {
    ${boxShadow};
  }
`;

const Wrapper = styled.div<{ small?: boolean }>`
  display: flex;
  flex-direction: column;
  ${Container} {
    border-radius: 0 0 0.5rem 0.5rem;
    z-index: 1;
  }
  ${upToBreakpoint("medium")} {
    ${boxShadow};
    ${Container} {
      box-shadow: unset;
    }
  }
  ${upFromBreakpoint("medium")} {
    ${(p) => p.small && "width: 70%;"};
    padding-left: 10%;
    padding-right: 5%;
    ${Container} {
      transform: translate3d(-5%, -2rem, 0);
      border-radius: 0.5rem;
    }
    ${(p) => {
      if (React.Children.toArray(p.children).length > 1) {
        return css`
          span {
            bottom: 2.25rem;
          }
        `;
      }
    }}
  }
`;

export default function Image({
  image,
  description,
  link,
  small,
}: PageContent_pageCollection_items_contentCollection_items_Image) {
  return (
    <ContentSection>
      <Wrapper small={small}>
        <ImageBox
          url={image.url}
          author={getAuthor(image.description)}
          aspectRatio={16 / 10}
        />
        {description && (
          <TextBox text={description} link={link} document={null} />
        )}
      </Wrapper>
    </ContentSection>
  );
}
