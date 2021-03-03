import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_TeaserSlider_itemsCollection_items } from "../generated/PageContent";
import color from "../styles/color";
import { aspectRatio, boxShadow, hoverAnimation } from "../styles/mixins";
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

const Image = styled.div<{ imageUrl: string }>`
  ${aspectRatio(5 / 3)}
  background-image: ${(p) =>
    `url(${
      p.imageUrl +
      (p.imageUrl.includes("images.ctfassets") ? "?fm=jpg&q=20" : "")
    })`};
  background-repeat: no-repeat;
  background-size: cover;
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
      <Image imageUrl={image.url} />
      <Info>
        <h4>{page.headline}</h4>
        <StyledLink href={link}>mehr</StyledLink>
      </Info>
    </Container>
  );
}
