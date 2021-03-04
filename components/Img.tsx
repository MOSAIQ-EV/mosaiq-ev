import Image, { ImageProps } from "next/image";
import React from "react";
import styled from "styled-components";

import color from "../styles/color";
import { aspectRatio } from "../styles/mixins";

const Container = styled.div<{ aspectRatio?: number }>`
  position: relative;
  overflow: hidden;
  width: 100%;
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

export const getAuthor = (data: string | null) => {
  return data?.split("©")[1];
};

type Props = {
  url: string;
  author?: string;
  className?: string;
  onClick?: () => void;
  aspectRatio?: number;
};

export default function Img({
  url,
  author,
  className,
  onClick,
  aspectRatio,
}: Props) {
  return (
    <Container
      className={className}
      onClick={onClick}
      aspectRatio={aspectRatio}
    >
      <StyledImage src={url} layout="fill" />
      {author && <Author>© {author}</Author>}
    </Container>
  );
}
