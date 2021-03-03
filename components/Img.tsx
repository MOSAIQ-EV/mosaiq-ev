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

const Image = styled.img`
  display: block;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
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
      <picture>
        <source
          srcSet={`${url}${
            url.includes("images.ctfassets") ? "?fm=webp&q=10" : ""
          }`}
        />
        <source
          srcSet={`${url}${
            url.includes("images.ctfassets") ? "?fm=jpg&q=10" : ""
          }`}
        />
        <Image src={`${url}?fm=jpg&q=10`} alt="Source sets are awesome!" />
      </picture>
      {author && <Author>© {author}</Author>}
    </Container>
  );
}
