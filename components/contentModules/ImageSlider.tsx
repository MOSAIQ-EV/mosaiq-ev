import Image from "next/image";
import React, { useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_ImageSlider } from "../../generated/PageContent";
import color from "../../styles/color";
import { boxShadow, hoverAnimation } from "../../styles/mixins";
import { Close } from "../Icons";
import Img from "../Img";
import Slider from "../Slider";
import Arrow from "../Slider/Arrow";
const Container = styled.section`
  margin: 2rem 0;
  user-select: none;
`;

const SliderImage = styled(Img)`
  ${boxShadow};
  border-radius: 0.5rem;
  cursor: pointer;
  ${hoverAnimation}
  width: 300px;
  height: 300px;
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
  background: ${color.yellowSecondary};
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

// const FsImage = styled.div`
//   border-radius: 0.5rem;
//   max-width: calc(100vw - 2rem);
//   max-height: calc(100vh - 4rem);
//   overflow: hidden;
//   img {
//     object-fit: contain;
//   }
// `;

const CloseIcon = styled(Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  color: ${color.purple};
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
  unoptimized,
}: PageContent_pageCollection_items_contentCollection_items_ImageSlider & {
  unoptimized?: boolean;
}) {
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
            {...e}
            width={300}
            height={300}
            key={i}
            onClick={() => setFullscreenImage(i)}
            unoptimized={unoptimized}
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
            <Image
              src={images[fullscreenImage].url}
              layout="fill"
              unoptimized={unoptimized}
            />
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
