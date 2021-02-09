import { Document } from "@contentful/rich-text-types";
import React, { useState } from "react";
import styled from "styled-components";

import color from "../../styles/color";
import { maxWidth, sectionPadding } from "../../styles/mixins";
import { Collapse } from "../Collapse";
import { ArrowDown } from "../Icons";
import RichText from "../RichText";
import { Headline1 } from "../Typography";
import WaveSvgClipPath from "../WaveSvgClipPath";

const WavedContainer = styled.section`
  position: relative;
  padding: 6vw 0;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 6vw;
    background: pink;
    clip-path: url(#top-wave);
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    height: 6vw;
    background: pink;
    clip-path: url(#top-wave);
    transform: rotate(180deg);
  }
`;

const Container = styled.div`
  width: 100%;
  background: pink;
`;

const Content = styled.div`
  ${maxWidth}
  ${sectionPadding}
  color: ${color.light};
`;

const Headline = styled(Headline1)<{ expanded: boolean }>`
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

type Props = {
  headline: string;
  text: Document;
};

export default function Accordion({ headline, text }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WavedContainer>
      <Container>
        <Content>
          <Headline onClick={() => setIsOpen(!isOpen)} expanded={isOpen}>
            {headline}
            <ArrowDown />
          </Headline>
          <Collapse isOpen={isOpen}>
            <RichText document={text} />
          </Collapse>
        </Content>
      </Container>
      <WaveSvgClipPath
        id="top-wave"
        path="M0 0.0566108C0 0.0566108 0.189456 1.0196 0.349998 1.0073C0.473128 0.997871 0.576841 0.0165815 0.700002 0.00755614C0.818454 -0.00112414 0.999994 0.406927 0.999994 0.406927L1 1.0073H0.649996H0.349998H0V0.0566108Z"
      />
    </WavedContainer>
  );
}
