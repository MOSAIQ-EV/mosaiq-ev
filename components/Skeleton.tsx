import React, { ReactNode } from "react";
import styled from "styled-components";

import { upFromBreakpoint } from "../styles/mediaQueries";
import Footer from "./Footer";
import Header from "./Header";

const Main = styled.main`
  position: relative;
  flex: 1;
  z-index: 1;
  padding-top: 68px;
  ${upFromBreakpoint("medium")} {
    padding-top: 84px;
  }
`;

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
