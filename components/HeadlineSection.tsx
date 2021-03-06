import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_SectionHeadline } from "../generated/PageContent";
import { maxWidth, sectionPadding } from "../styles/mixins";
import WaveSvgClipPath from "./WaveSvgClipPath";

const Container = styled.section<{ backgroundColor: string }>`
  position: relative;
  ${sectionPadding};
  margin-top: 10vw;
  ::before {
    content: "";
    position: absolute;
    top: -12vw;
    left: 0;
    right: 0;
    height: 300%;
    background: ${(p) => p.backgroundColor};
    z-index: -1;
    clip-path: url(#wave);
  }
`;

const StyledHeadline1 = styled.h1`
  ${maxWidth};
`;

export default function HeadlineSection({
  headline,
  backgroundColor,
}: PageContent_pageCollection_items_contentCollection_items_SectionHeadline & {
  backgroundColor: string;
}) {
  return (
    <Container backgroundColor={backgroundColor}>
      <StyledHeadline1>{headline}</StyledHeadline1>
      <WaveSvgClipPath
        path="M0 0.0998401C0 0.0998401 0.189456 0.16203 0.349998
      0.14976C0.473128 0.14035 0.576841 0.0098823 0.700002
      0.000877054C0.818454 -0.00778392 1 0.0505539 1
      0.0505539L0.999994 0.748801C0.999994 0.748801 0.816572 0.976839
      0.649996 0.998401C0.48455 1.01982 0.414085 0.81855 0.249999
      0.848641C0.138016 0.869176 0 0.948481 0
      0.948481V0.4992V0.0998401Z"
        id="wave"
      />
    </Container>
  );
}
