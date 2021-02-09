import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

import color from "../../styles/color";
import { maxWidth, sectionPadding } from "../../styles/mixins";
import RichText from "../RichText";
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
    clip-path: url(#long-text-wave);
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    height: 6vw;
    background: pink;
    clip-path: url(#long-text-wave);
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

type Props = {
  text: Document;
};
export default function LongText({ text }: Props) {
  return (
    <WavedContainer>
      <Container>
        <Content>
          <RichText document={text} />
        </Content>
      </Container>
      <WaveSvgClipPath
        id="long-text-wave"
        path="M0 1C0 1 0.019496 0.341529 0.14147 0.151566C0.263445 -0.0383974 0.349011 0.266678 0.488397 0.248852C0.655392 0.227494 0.676358 0.00256504 0.844323 4.89491e-06C1.01229 -0.00255525 0.99979 1 0.99979 1H0Z"
      />
    </WavedContainer>
  );
}
