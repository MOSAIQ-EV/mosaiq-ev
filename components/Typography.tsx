import { css } from "styled-components";

import { upFromBreakpoint } from "../styles/mediaQueries";

export const font = {
  text: css`
    font-size: 1rem;
    ${upFromBreakpoint("medium")} {
      font-size: 1.1rem;
    }
  `,
  headline1: css`
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 0.5em;
    ${upFromBreakpoint("small")} {
      font-size: 3.5rem;
    }
    ${upFromBreakpoint("medium")} {
      font-size: 4rem;
    }
    ${upFromBreakpoint("large")} {
      font-size: 5rem;
    }
    ${upFromBreakpoint("xlarge")} {
      font-size: 6rem;
    }
  `,
  headline2: css`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 0.5em;
    ${upFromBreakpoint("small")} {
      font-size: 3rem;
    }
    ${upFromBreakpoint("medium")} {
      font-size: 3.5rem;
    }
    ${upFromBreakpoint("large")} {
      font-size: 4.2rem;
    }
    ${upFromBreakpoint("xlarge")} {
      font-size: 5rem;
    }
  `,
  headline3: css`
    font-weight: bold;
    font-size: 1.7rem;
    margin-bottom: 0.5em;
    ${upFromBreakpoint("small")} {
      font-size: 2.5rem;
    }
    ${upFromBreakpoint("medium")} {
      font-size: 3rem;
    }
    ${upFromBreakpoint("large")} {
      font-size: 3.5rem;
    }
    ${upFromBreakpoint("xlarge")} {
      font-size: 4rem;
    }
  `,
  headline4: css`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5em;
    ${upFromBreakpoint("small")} {
      font-size: 1.7rem;
    }
    ${upFromBreakpoint("medium")} {
      font-size: 1.8rem;
    }
    ${upFromBreakpoint("large")} {
      font-size: 1.9rem;
    }
    ${upFromBreakpoint("xlarge")} {
      font-size: 2rem;
    }
  `,
};
