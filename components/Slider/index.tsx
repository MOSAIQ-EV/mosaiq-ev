import React, { ReactNode, useRef, useState } from "react";
import styled from "styled-components";

import useEvent from "../../hooks/useEvent";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import Arrow, { Direction } from "./Arrow";

const Wrapper = styled.section`
  position: relative;
  user-select: none;
`;

export const Scroll = styled.div`
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Strip = styled.nav<{ hasOverflow: boolean }>`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: ${(p) => (p.hasOverflow ? "flex-start" : "center")};
  --spacer: 1rem;
  ${upFromBreakpoint("medium")} {
    --spacer: 3rem;
  }
  ::before {
    content: "";
    border-left: var(--spacer) solid transparent;
  }
  ::after {
    content: "";
    border-right: var(--spacer) solid transparent;
  }
`;

const Items = styled.div`
  height: 100%;
  display: flex;
  & > * {
    flex: 0 0 auto;
  }
  & > * + * {
    margin-left: 1rem;
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
      <Scroll ref={sliderRef} onScroll={resizeHandler}>
        <Strip hasOverflow={hasOverflow}>
          <Items>{children}</Items>
        </Strip>
      </Scroll>
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
