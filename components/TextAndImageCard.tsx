import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_TeaserSlider_itemsCollection_items } from "../generated/PageContent";
import color from "../styles/color";
import { boxShadow, hoverAnimation } from "../styles/mixins";
import Img from "./Img";
import Link from "./Link";

const Container = styled.div`
  ${boxShadow};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  cursor: pointer;
  ${hoverAnimation}
`;

const Info = styled.div`
  background: ${color.white};
  padding: 1rem;
  height: 100%;
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: right;
`;

const Image = styled(Img)`
  overflow: visible;
`;

export default function TextAndImageCard({
  image,
  page,
}: PageContent_pageCollection_items_contentCollection_items_TeaserSlider_itemsCollection_items) {
  const router = useRouter();

  if (!image?.url || !page?.headline) return null;

  const link = `/projekte/${page.sys.id}`;

  return (
    <Container
      onClick={(e) => {
        e.preventDefault();
        router.push(link);
      }}
    >
      <Image {...image} width={300} height={180} />
      <Info>
        <h3>{page.headline}</h3>
        <StyledLink href={link}>mehr</StyledLink>
      </Info>
    </Container>
  );
}
