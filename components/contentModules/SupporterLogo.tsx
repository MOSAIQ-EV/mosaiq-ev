import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_SupporterLogo } from "../../generated/PageContent";
import color from "../../styles/color";
import { upToBreakpoint } from "../../styles/mediaQueries";
import { boxShadow } from "../../styles/mixins";
import ContentSection from "../ContentSection";
import Img from "../Img";
import RichText from "../RichText";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  background: ${color.white};
  padding: 2rem;
  border-radius: 0.5rem;
  ${boxShadow}
  margin: 0 auto;
  ${upToBreakpoint("small")} {
    flex-direction: column;
  }
`;

const Image = styled(Img)`
  flex: 1 0 250px;
  margin-right: 1rem;
  ${upToBreakpoint("small")} {
    flex: 1 1 100%;
    width: 100%;
  }
`;

export default function SupporterLogo({
  description,
  image,
}: PageContent_pageCollection_items_contentCollection_items_SupporterLogo) {
  return (
    <ContentSection>
      <Container>
        <Image {...image} />
        <RichText document={description.json} />
      </Container>
    </ContentSection>
  );
}
