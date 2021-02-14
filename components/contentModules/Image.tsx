import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Image } from "../../generated/PageContent";
import { upFromBreakpoint, upToBreakpoint } from "../../styles/mediaQueries";
import { boxShadow } from "../../styles/mixins";
import ContentSection from "../ContentSection";
import Img from "../Img";
import TextBox from "../TextBox";

export const ImageBox = styled(Img)`
  border-radius: 0.5rem;
  max-width: 100%;
  ${boxShadow};
  ${upToBreakpoint("medium")} {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${upToBreakpoint("medium")} {
    & > div {
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }
`;

const StyledContentSection = styled(ContentSection)`
  ${upFromBreakpoint("medium")} {
    :nth-child(odd) {
      ${Container} {
        margin-left: 6rem;
        & > div {
          margin: 0 3rem 0 -2rem;
          transform: translateY(-2rem);
        }
      }
    }
    :nth-child(even) {
      ${Container} {
        margin-right: 6rem;
        & > div {
          margin: 0 0 0 3rem;
          transform: translateY(-2rem);
        }
      }
    }
  }
`;

export default function Image({
  image,
  description,
  link,
}: PageContent_pageCollection_items_contentCollection_items_Image) {
  return (
    <StyledContentSection>
      <Container>
        <ImageBox url={image.url} author={image.description} />
        {description && (
          <TextBox text={description} link={link} document={null} />
        )}
      </Container>
    </StyledContentSection>
  );
}
