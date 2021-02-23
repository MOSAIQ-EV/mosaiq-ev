import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_TeaserSlider } from "../../generated/PageContent";
import Slider from "../Slider";
import TextAndImageCard from "../TextAndImageCard";

const Container = styled.section`
  margin: 2rem 0;
`;

export default function TeaserSlider({
  itemsCollection,
}: PageContent_pageCollection_items_contentCollection_items_TeaserSlider) {
  return (
    <Container>
      <Slider>
        {itemsCollection.items.map((e, i) => (
          <TextAndImageCard {...e} key={i} />
        ))}
      </Slider>
    </Container>
  );
}
