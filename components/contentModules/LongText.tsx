import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_LongText } from "../../generated/PageContent";
import color from "../../styles/color";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import { maxWidth, sectionPadding } from "../../styles/mixins";
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
    clip-path: url(#long-text-wave);
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: 1px;
    height: 6vw;
    background: ${(p) => p.backgroundColor};
    clip-path: url(#long-text-wave);
    transform: rotate(180deg);
  }
  & > div {
    width: 100%;
    background: ${(p) => p.backgroundColor};
  }
  a {
    color: ${color.white};
  }
`;

const Content = styled.div`
  ${sectionPadding}
  & > div {
    ${maxWidth}
    color: ${color.white};
  }
`;
const WAVES = [
  "M0 0.212321C0 0.212321 0.0324504 -0.00597684 0.2355 0.0001256C0.43589 0.00614811 0.516652 0.518113 0.65 0.367C0.954 0.0225 1 0.662265 1 0.662265V1H0V0.212321Z",
  "M0 0C0 0 0.10445 0.414007 0.3075 0.4195C0.50789 0.424921 0.443681 0.0709014 0.6395 0.028C0.781015 -0.0030041 1 0.696 1 0.696V1H0V0Z",
];

export default function LongText({
  text,
  backgroundColor,
}: PageContent_pageCollection_items_contentCollection_items_LongText & {
  backgroundColor: string;
}) {
  return (
    <WavedContainer backgroundColor={backgroundColor}>
      <Content>
        <div>
          <RichText document={text.json} />
        </div>
      </Content>
      <WaveSvgClipPath
        id={`long-text-wave`}
        path={WAVES[Math.floor(Math.random() * WAVES.length)]}
      />
    </WavedContainer>
  );
}
