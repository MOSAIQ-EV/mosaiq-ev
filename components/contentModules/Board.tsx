import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Board_memberCollection_items } from "../../generated/PageContent";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import BoardCard from "../BoardCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    flex: 0 1 280px;
    margin: 0.5rem;
  }
  ${upFromBreakpoint("medium")} {
    & > div {
      margin: 1rem;
    }
    & > div:nth-child(2) {
      transform: translateY(-2rem);
    }
    & > div:nth-child(5) {
      transform: translateY(2rem);
    }
    & > div:nth-child(3) {
      transform: translateY(2rem);
    }
  }
  @media (min-width: 624px) {
    & > div:nth-child(2) {
      transform: translateY(-1rem);
    }
    & > div:nth-child(3) {
      transform: translateY(1rem);
    }
    & > div:nth-child(5) {
      transform: translateY(1rem);
    }
  }
  @media (min-width: 360px) and (max-width: 623px) {
    & > div:nth-child(odd) {
      transform: translateX(-1.5rem);
    }
    & > div:nth-child(even) {
      transform: translateX(1.5rem);
    }
  }
`;

type Props = {
  items: (PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Board_memberCollection_items | null)[];
};
export default function Board({ items }: Props) {
  return (
    <Container>
      {items.map((e, i) => e && <BoardCard key={i} {...e} />)}
    </Container>
  );
}
