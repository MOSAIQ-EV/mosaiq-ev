import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { upFromBreakpoint } from "../styles/mediaQueries";
import { maxWidth } from "../styles/mixins";
import WaveSvgClipPath from "./WaveSvgClipPath";

type ContainerProps = {
  backgroundColor: string;
  noOverlay?: boolean;
};
export const Container = styled.section<ContainerProps>`
  position: relative;
  background: ${(p) => p.backgroundColor};
  padding: 1rem 1rem 0 1rem;
  ${upFromBreakpoint("medium")} {
    padding: 2rem 2rem 0 2rem;
  }
  ${(p) =>
    p.noOverlay &&
    css`
      margin-bottom: 12rem;
    `}
  ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background: ${(p) => p.backgroundColor};
    height: 10rem;
    clip-path: url(#page-headline-wave);
  }

  & > div {
    ${maxWidth};
  }
`;

const Headline = styled.h1`
  margin-top: 0.5em;
`;

type Props = {
  backgroundColor: string;
  children: ReactNode;
  noOverlav?: boolean;
};
export default function PageHeadline({
  children,
  backgroundColor,
  noOverlav,
}: Props) {
  return (
    <Container backgroundColor={backgroundColor} noOverlay={noOverlav}>
      <div>
        <Headline>{children}</Headline>
        <WaveSvgClipPath
          path="M0.000248333 0H1C1 0 0.99818 0.158589 0.92052 0.27865C0.876763 0.346298 0.755561 0.302198 0.716071 0.481162C0.64513 0.709558 0.534616 0.737049 0.534616 0.737049C0.354284 0.737049 0.403554 0.620733 0.227192 0.679749C-0.0165968 0.761328 0.000248333 1 0.000248333 1V0Z"
          id="page-headline-wave"
        />
      </div>
    </Container>
  );
}
