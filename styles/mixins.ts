import { css, keyframes } from "styled-components";

import { upFromBreakpoint } from "./mediaQueries";

export const maxWidth = css`
  max-width: 1100px;
  margin: 0 auto;
`;

export const boxShadow = css`
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
`;

export const sectionPadding = css`
  padding: 1rem;
  ${upFromBreakpoint("medium")} {
    padding: 2rem;
  }
`;

export const aspectRatio = (
  ratio: number,
  position: string | false = "relative",
) => css`
  ${position && `position: ${position}`};
  ::after {
    content: "";
    display: block;
    padding-top: ${(100 / ratio).toFixed(4)}%;
  }
`;

export const hoverAnimation = css`
  @media (hover: hover) and (pointer: fine) {
    transition: transform 200ms ease-in-out;
    :hover {
      transform: translateY(-0.5rem);
    }
  }
`;
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeIn = (delay = 0) => css`
  opacity: 0;
  animation: ${fadeInAnimation} 300ms ease-in ${delay}ms forwards;
`;
