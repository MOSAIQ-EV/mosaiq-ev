import React, { ReactNode, useRef, useState } from "react";
import styled from "styled-components";

import useEvent from "../../hooks/useEvent";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import Arrow, { Direction } from "./Arrow";

const Wrapper = styled.section`
  position: relative;
  user-select: none;
`;

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
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
    min-width: calc(var(--spacer) - var(--grid-gap));
  }
  overflow: scroll;
  scroll-snap-type: x mandatory;
  & > * {
    scroll-snap-align: center;
  }
  ::-webkit-scrollbar {
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

  const resizeHandler = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollWidth - scrollLeft > window.innerWidth);
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
      <Container ref={sliderRef} onScroll={resizeHandler}>
        {children}
        {children}
      </Container>
      <Arrow
        direction={"left"}
        onClick={handleArrowClick}
        visible={showLeftArrow}
      />
      <Arrow
        direction={"right"}
        onClick={handleArrowClick}
        visible={showRightArrow}
      />
    </Wrapper>
  );
}
