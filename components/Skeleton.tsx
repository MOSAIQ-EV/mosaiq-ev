import React, { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";

import { upFromBreakpoint } from "../styles/mediaQueries";
import { fadeIn } from "../styles/mixins";
import Footer from "./Footer";
import Header from "./Header";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Main = styled.main`
  position: relative;
  flex: 1;
  z-index: 1;
  padding-top: 68px;
  ${upFromBreakpoint("medium")} {
    padding-top: 84px;
  }
`;
/* ${(p) =>
    React.Children.toArray(p.children).map(
      (_, i) => css`
        & > *:nth-child(${i + 1}) {
          opacity: 0;
          ${fadeIn(100 * i)}
        }
      `,
    )} */

type Props = {
  children: ReactNode;
};

export default function Skeleton({ children }: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
