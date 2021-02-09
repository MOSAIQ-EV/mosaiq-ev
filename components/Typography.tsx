import styled from "styled-components";
import color from "../styles/color";
import { upToBreakpoint } from "../styles/mediaQueries";

export const Headline1 = styled.h1`
  font-size: 10vmin;
  text-transform: uppercase;
  font-weight: bold;
  color: ${color.light};
  ${upToBreakpoint("small")} {
    font-size: 11vmin;
  }
`;

export const Headline2 = styled.h2`
  font-size: 7vmin;
  font-weight: bold;
  ${upToBreakpoint("small")} {
    font-size: 8vmin;
  }
`;

export const Headline3 = styled.h3`
  font-size: 5vmin;
  font-weight: bold;
  ${upToBreakpoint("small")} {
    font-size: 6vmin;
  }
`;

export const Headline4 = styled.h4`
  font-size: 4vmin;
  font-weight: bold;
  ${upToBreakpoint("small")} {
    font-size: 5vmin;
  }
`;

export const Body1 = styled.div`
  font-size: 1rem;
`;

export const Body2 = styled.div`
  font-size: 0.75rem;
`;
