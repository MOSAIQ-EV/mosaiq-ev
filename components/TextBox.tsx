import { useRouter } from "next/router";
import React from "react";
import styled, { css } from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Text } from "../generated/PageContent";
import color from "../styles/color";
import { upToBreakpoint } from "../styles/mediaQueries";
import { boxShadow } from "../styles/mixins";
import Link from "./Link";
import RichText from "./RichText";

export const Container = styled.div<{ clickable: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${color.white};
  ${boxShadow}
  ${upToBreakpoint("small")} {
    padding: 1rem;
  }
  ${(p) =>
    p.clickable &&
    css`
      cursor: pointer;
    `}
`;
const StyledLink = styled(Link)`
  margin: 1rem 0 0 auto;
`;
export type Props = Omit<
  PageContent_pageCollection_items_contentCollection_items_Text,
  "__typename"
> & {
  className?: string;
};
export default function TextBox({ text, link, document, className }: Props) {
  const router = useRouter();

  return (
    <Container
      className={className}
      clickable={!!link}
      onClick={() => link && router.push(`/projekte/${link.sys.id}`)}
    >
      <RichText document={text.json} />
      {link && <StyledLink href={`/projekte/${link.sys.id}`}>mehr</StyledLink>}
      {document && (
        <StyledLink target="__blank" href={document.url}>
          Download PDF
        </StyledLink>
      )}
    </Container>
  );
}
