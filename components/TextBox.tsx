import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Text } from "../generated/PageContent";
import color from "../styles/color";
import { upToBreakpoint } from "../styles/mediaQueries";
import { boxShadow } from "../styles/mixins";
import Link from "./Link";
import RichText from "./RichText";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background: ${color.white};
  ${boxShadow}
  ${upToBreakpoint("small")} {
    padding: 0 1rem;
  }
`;
const StyledLink = styled(Link)`
  margin: auto 0 1rem auto;
`;
export type Props = PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Text & {
  className?: string;
};
export default function TextBox({ text, link, document, className }: Props) {
  return (
    <Container className={className}>
      <RichText document={text.json} />
      {link && <StyledLink href={`${link}`}>mehr</StyledLink>}
      {document && (
        <StyledLink target="__blank" href={document.url}>
          Download PDF
        </StyledLink>
      )}
    </Container>
  );
}
