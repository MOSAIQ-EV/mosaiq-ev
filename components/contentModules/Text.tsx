import React from "react";
import styled from "styled-components";

import { upFromBreakpoint } from "../../styles/mediaQueries";
import ContentSection from "../ContentSection";
import TextBox, { Container, Props } from "../TextBox";

const StyledSection = styled(ContentSection)`
  ${upFromBreakpoint("medium")} {
    :nth-child(even) {
      ${Container} {
        margin-left: 4rem;
      }
    }
    :nth-child(odd) {
      ${Container} {
        margin-right: 4rem;
      }
    }
  }
`;

export default function Text(props: Props) {
  return (
    <StyledSection>
      <TextBox {...props} />
    </StyledSection>
  );
}
