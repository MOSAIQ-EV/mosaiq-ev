import { Document } from "@contentful/rich-text-types";
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
  ${maxWidth}
  ${sectionPadding}
  color: ${color.white};
`;

export default function LongText({
  text,
  backgroundColor,
}: PageContent_pageCollection_items_contentCollection_items_LongText & {
  backgroundColor: string;
}) {
  return (
    <WavedContainer backgroundColor={backgroundColor}>
      <div>
        <Content>
          <RichText document={text.json} />
        </Content>
      </div>
      <WaveSvgClipPath
        id="long-text-wave"
        path="M0 1C0 1 0.019496 0.341529 0.14147 0.151566C0.263445 -0.0383974 0.349011 0.266678 0.488397 0.248852C0.655392 0.227494 0.676358 0.00256504 0.844323 4.89491e-06C1.01229 -0.00255525 0.99979 1 0.99979 1H0Z"
      />
    </WavedContainer>
  );
}
