import { Document } from "@contentful/rich-text-types";
import React, { useState } from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Accordion } from "../../generated/PageContent";
import color from "../../styles/color";
import { maxWidth, sectionPadding } from "../../styles/mixins";
import { Collapse } from "../Collapse";
import { ArrowDown } from "../Icons";
import RichText from "../RichText";
import WaveSvgClipPath from "../WaveSvgClipPath";

const WavedContainer = styled.section<{ backgroundColor: string }>`
  position: relative;
  padding: 6vw 0;
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

const Content = styled.div`
  ${maxWidth}
  ${sectionPadding}
  color: ${color.white};
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
      <div>
        <Content>
          <Headline onClick={() => setIsOpen(!isOpen)} expanded={isOpen}>
            {headline}
            <ArrowDown />
          </Headline>
          <Collapse isOpen={isOpen}>
            <RichText document={text.json} />
          </Collapse>
        </Content>
      </div>
      <WaveSvgClipPath
        id="top-wave"
        path="M0 0.0566108C0 0.0566108 0.189456 1.0196 0.349998 1.0073C0.473128 0.997871 0.576841 0.0165815 0.700002 0.00755614C0.818454 -0.00112414 0.999994 0.406927 0.999994 0.406927L1 1.0073H0.649996H0.349998H0V0.0566108Z"
      />
    </WavedContainer>
  );
}
