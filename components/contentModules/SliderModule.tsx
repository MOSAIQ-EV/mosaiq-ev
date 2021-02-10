import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Slider_itemsCollection as Props } from "../../generated/PageContent";
import { boxShadow } from "../../styles/mixins";
import Slider from "../Slider";
import TextAndImageCard from "../TextAndImageCard";

const SliderImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  ${boxShadow};
  border-radius: 0.5rem;
`;

export default function SliderModule({ items }: Props) {
  return (
    <Slider>
      {items.map((e, i) => {
        switch (e?.__typename) {
          case "SliderImage":
            return <SliderImage src={e?.image?.url ?? ""} key={i} />;

          case "SliderTeaser":
            return <TextAndImageCard {...e} key={i} />;
        }
      })}
    </Slider>
  );
}
