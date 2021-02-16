import React, { useState } from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Accordion } from "../../generated/PageContent";
import color from "../../styles/color";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import { maxWidth, sectionPadding } from "../../styles/mixins";
import { Collapse } from "../Collapse";
import { ArrowDown } from "../Icons";
import RichText from "../RichText";
import WaveSvgClipPath from "../WaveSvgClipPath";

const WavedContainer = styled.section<{ backgroundColor: string }>`
  position: relative;
  padding: 6vw 0;
  margin: 1rem 0;
  ${upFromBreakpoint("medium")} {
    margin: 2rem 0;
  }
  ::before {
    content: "";
    position: absolute;
    top: 1px;
    right: 0;
    left: 0;
    height: 6vw;
    background: ${(p) => p.backgroundColor};
    clip-path: url(#top-wave);
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 1px;
    left: 0;
    height: 6vw;
    background: ${(p) => p.backgroundColor};
    clip-path: url(#top-wave);
    transform: rotate(180deg);
  }
  & > div {
    width: 100%;
    background: ${(p) => p.backgroundColor};
  }
`;

const Container = styled.div`
  ${sectionPadding}
`;

const Content = styled.div`
  ${maxWidth}
  color: ${color.white};
  a {
    color: ${color.white};
  }
`;

const Headline = styled.h1<{ expanded: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  svg {
    display: block;
    margin: 0 2rem 0 auto;
    height: 0.5em;
    transition: transform 300ms ease-in-out;
    transform: rotate(${(p) => (p.expanded ? 0 : 180)}deg);
  }
`;

export default function Accordion({
  headline,
  text,
  backgroundColor,
}: PageContent_pageCollection_items_contentCollection_items_Accordion & {
  backgroundColor: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WavedContainer backgroundColor={backgroundColor}>
      <Container>
        <Content>
          <Headline onClick={() => setIsOpen(!isOpen)} expanded={isOpen}>
            {headline}
            <ArrowDown />
          </Headline>
          <Collapse isOpen={isOpen}>
            <RichText document={text.json} />
          </Collapse>
        </Content>
      </Container>
      <WaveSvgClipPath
        id="top-wave"
        path="M0 1C0 1 0.0150256 0.2711 0.137 0.0532632C0.258974 -0.164574 0.352613 0.5241 0.492 0.503657C0.658995 0.479166 0.604035 0.00298466 0.772 4.8848e-05C0.939965 -0.00288696 1 0.127487 1 0.127487V1H0Z"
      />
    </WavedContainer>
  );
}
