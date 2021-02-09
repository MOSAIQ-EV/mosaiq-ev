import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

import color from "../styles/color";
import { upToBreakpoint } from "../styles/mediaQueries";
import { boxShadow } from "../styles/mixins";
import RichText from "./RichText";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background: ${color.light};
  ${boxShadow}
  ${upToBreakpoint("small")} {
    padding: 0 1rem;
  }
`;
const StyledLink = styled.a`
  margin: auto 0 1rem auto;
`;
export type Props = {
  text: Document;
  link?: string;
  className?: string;
};
export default function TextBox({ text, link, className }: Props) {
  return (
    <Container className={className}>
      <RichText document={text} />
      {link && <StyledLink href={`${link}`}>mehr</StyledLink>}
    </Container>
  );
}
