import React, { ReactNode, useRef, useState } from "react";
import styled from "styled-components";

import useEvent from "../../hooks/useEvent";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import Arrow, { Direction } from "./Arrow";

const Wrapper = styled.section`
  position: relative;
  user-select: none;
`;

const Container = styled.div<{ hasOverflow: boolean }>`
  display: grid;
  grid-auto-flow: column;
  justify-content: ${(p) => (p.hasOverflow ? "flex-start" : "center")};
  max-width: 100%;
  --grid-gap: 1rem;
  grid-column-gap: var(--grid-gap);
  user-select: none;
  --spacer: 1rem;
  ${upFromBreakpoint("medium")} {
    --spacer: 3rem;
  }
  padding: var(--grid-gap) 0 var(--grid-gap) var(--spacer);
  ::after {
    content: "";
    min-width: calc(var(--spacer) - var(--grid-gap) + 1px);
  }
  overflow: scroll;
  /* scroll-snap-type: x mandatory;
  & > * {
    scroll-snap-align: center;
  } */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledArrow = styled(Arrow)`
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;

type Props = {
  children: ReactNode;
};

export default function Slider({ children }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const resizeHandler = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollWidth - scrollLeft > window.innerWidth);
      setHasOverflow(scrollWidth > window.innerWidth);
    }
  };

  useEvent("resize", resizeHandler, { initCallback: true });

  const handleArrowClick = (direction: Direction) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[0].clientWidth;
      sliderRef.current.scrollTo({
        left:
          sliderRef.current.scrollLeft +
          (direction === "left" ? itemWidth * -1 : itemWidth),
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper>
      <Container
        ref={sliderRef}
        onScroll={resizeHandler}
        hasOverflow={hasOverflow}
      >
        {children}
      </Container>
      <StyledArrow
        direction={"left"}
        onClick={handleArrowClick}
        visible={showLeftArrow}
      />
      <StyledArrow
        direction={"right"}
        onClick={handleArrowClick}
        visible={showRightArrow}
      />
    </Wrapper>
  );
}
