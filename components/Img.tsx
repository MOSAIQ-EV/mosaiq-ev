import Image, { ImageProps } from "next/image";
import React from "react";
import styled from "styled-components";

import { image_image } from "../generated/image";
import color from "../styles/color";
import { aspectRatio } from "../styles/mixins";

const Container = styled.div<{ aspectRatio?: number }>`
  overflow: hidden;
  ${(p) => p.aspectRatio && aspectRatio(p.aspectRatio)}
  background: ${color.yellowSecondary};
`;

const StyledImage = styled(Image)<ImageProps>`
  object-fit: cover;
`;

const Author = styled.span`
  position: absolute;
  padding: 0.5rem;
  color: ${color.white};
  bottom: 0.25rem;
  right: 0.25rem;
  font-size: 0.75rem;
`;

const getMeta = (data: string | null) => {
  const [description, author] = data?.split("©");
  return {
    description,
    author,
  };
};

type Props = image_image & {
  className?: string;
  onClick?: () => void;
  aspectRatio?: number;
  width?: number;
  height?: number;
};

export default function Img({
  className,
  onClick,
  aspectRatio,
  url,
  description,
  width,
  height,
}: Props) {
  const meta = getMeta(description);
  return (
    <Container
      className={className}
      onClick={onClick}
      aspectRatio={aspectRatio}
    >
      {width && height && (
        <StyledImage
          width={width}
          height={height}
          src={url}
          layout={"intrinsic"}
          alt={meta.description}
          priority
        />
      )}
      {(!width || !height) && (
        <StyledImage
          src={url}
          layout={"fill"}
          alt={meta.description}
          priority
        />
      )}
      {meta.author && <Author>© {meta.author}</Author>}
    </Container>
  );
}
