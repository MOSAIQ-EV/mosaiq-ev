import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Slider } from "../../generated/PageContent";
import { boxShadow } from "../../styles/mixins";
import Img from "../Img";
import Slider from "../Slider";
import TextAndImageCard from "../TextAndImageCard";

const SliderImage = styled(Img)`
  width: 300px;
  height: 300px;
  ${boxShadow};
  border-radius: 0.5rem;
`;

export default function SliderModule({
  itemsCollection,
}: PageContent_pageCollection_items_contentCollection_items_Slider) {
  return (
    <Slider>
      {itemsCollection.items.map((e, i) => {
        switch (e.__typename) {
          case "SliderImage":
            return (
              <SliderImage
                url={e.image.url}
                author={e.image.description}
                key={i}
              />
            );

          case "SliderTeaser":
            return <TextAndImageCard {...e} key={i} />;
        }
      })}
    </Slider>
  );
}
