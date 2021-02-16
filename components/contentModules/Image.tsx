import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Image } from "../../generated/PageContent";
import { upFromBreakpoint, upToBreakpoint } from "../../styles/mediaQueries";
import { boxShadow } from "../../styles/mixins";
import ContentSection from "../ContentSection";
import Img, { getAuthor } from "../Img";
import TextBox, { Container } from "../TextBox";

export const ImageBox = styled(Img)`
  border-radius: 0.5rem;
  width: 100%;
  ${boxShadow};
  ${upToBreakpoint("medium")} {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${Container} {
    border-radius: 0 0 0.5rem 0.5rem;
    z-index: 1;
  }
  ${upFromBreakpoint("medium")} {
    padding-left: 10%;
    padding-right: 5%;
    ${Container} {
      transform: translate3d(-5%, -2rem, 0);
      border-radius: 0.5rem;
    }
  }
`;

export default function Image({
  image,
  description,
  link,
}: PageContent_pageCollection_items_contentCollection_items_Image) {
  return (
    <ContentSection>
      <Wrapper>
        <ImageBox url={image.url} author={getAuthor(image.description)} />
        {description && (
          <TextBox text={description} link={link} document={null} />
        )}
      </Wrapper>
    </ContentSection>
  );
}
