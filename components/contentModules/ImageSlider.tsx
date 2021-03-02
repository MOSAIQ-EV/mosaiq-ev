import React, { useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_ImageSlider } from "../../generated/PageContent";
import color from "../../styles/color";
import { upFromBreakpoint, upToBreakpoint } from "../../styles/mediaQueries";
import { boxShadow, hoverAnimation } from "../../styles/mixins";
import { Close } from "../Icons";
import Img, { getAuthor } from "../Img";
import Slider from "../Slider";
import Arrow from "../Slider/Arrow";

const Container = styled.section`
  margin: 2rem 0;
  user-select: none;
`;

const SliderImage = styled(Img)`
  ${boxShadow};
  border-radius: 0.5rem;
  & > img {
    height: 100%;
  }
  cursor: pointer;
  ${hoverAnimation}
  width: 80vw;
  height: 80vw;
  ${upFromBreakpoint("small")} {
    width: 350px;
    height: 350px;
  }
  ${upFromBreakpoint("medium")} {
    width: 300px;
    height: 300px;
  }
`;

const Fullscreen = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const GlobalStyle = createGlobalStyle`
    body {
        overflow: hidden;
    }
    header {
        transform: translateY(-100%) !important;
    }
`;

const FullScreenImage = styled(Img)`
  max-height: calc(100vh - 4rem);
  border-radius: 0.5rem;
  ${upToBreakpoint("medium")} {
    width: calc(100vw - 1rem);
  }
  & > img {
    object-fit: contain;
  }
`;

const CloseIcon = styled(Close)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  color: ${color.white};
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const StyledArrow = styled(Arrow)`
  top: auto;
  height: auto;
`;

export default function ImageSlider({
  imagesCollection,
}: PageContent_pageCollection_items_contentCollection_items_ImageSlider) {
  const [fullscreenImage, setFullscreenImage] = useState<number>();
  const fullScreenContainer = useRef<HTMLDivElement>(null);

  const { items: images } = imagesCollection;
  const nextImage = () => {
    if (fullscreenImage < images.length - 1) {
      setFullscreenImage(fullscreenImage + 1);
    }
  };
  const prevImage = () => {
    if (fullscreenImage > 0) {
      setFullscreenImage(fullscreenImage - 1);
    }
  };
  return (
    <Container>
      <Slider>
        {images.map((e, i) => (
          <SliderImage
            key={i}
            url={e.url}
            author={getAuthor(e.description)}
            onClick={() => setFullscreenImage(i)}
          />
        ))}
      </Slider>
      {fullscreenImage !== undefined && (
        <>
          <GlobalStyle />
          <Fullscreen
            ref={fullScreenContainer}
            onClick={(e) => {
              if (e.target === fullScreenContainer.current) {
                setFullscreenImage(undefined);
              }
            }}
          >
            <FullScreenImage url={images[fullscreenImage].url} />
            <StyledArrow
              direction="left"
              onClick={prevImage}
              visible={fullscreenImage !== 0}
            />
            <StyledArrow
              direction="right"
              onClick={nextImage}
              visible={fullscreenImage < images.length - 1}
            />
            <CloseIcon onClick={() => setFullscreenImage(undefined)} />
          </Fullscreen>
        </>
      )}
    </Container>
  );
}
