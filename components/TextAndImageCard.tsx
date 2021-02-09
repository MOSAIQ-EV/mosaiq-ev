import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser as Props } from "../generated/PageContent";
import color from "../styles/color";
import { aspectRatio, boxShadow, hoverAnimation } from "../styles/mixins";
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

const StyledLink = styled.a`
  display: block;
  text-align: right;
`;

export default function TextAndImageCard({ image, page }: Props) {
  // const history = useHistory();
  if (!image?.url || !page?.headline) return null;
  //onClick={() => history.push(`/${page.sys.id}`)}

  return (
    <Container>
      <Image src={image.url} />
      <Info>
        <Headline>{page.headline}</Headline>
        <StyledLink href={page.sys.id}>mehr</StyledLink>
      </Info>
    </Container>
  );
}
