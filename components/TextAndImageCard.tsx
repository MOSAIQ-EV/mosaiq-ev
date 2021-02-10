import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser as Props } from "../generated/PageContent";
import color from "../styles/color";
import { aspectRatio, boxShadow, hoverAnimation } from "../styles/mixins";
import Link from "./Link";
import { Headline4 } from "./Typography";

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

const Image = styled.img`
  object-fit: cover;
  ${aspectRatio(4 / 3)}
`;

const Info = styled.div`
  background: ${color.light};
  padding: 1rem;
`;

const Headline = styled(Headline4)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  hyphens: auto;
  width: 300px;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: right;
`;

export default function TextAndImageCard({ image, page }: Props) {
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
      <Image src={image.url} />
      <Info>
        <Headline>{page.headline}</Headline>
        <StyledLink href={link}>mehr</StyledLink>
      </Info>
    </Container>
  );
}
