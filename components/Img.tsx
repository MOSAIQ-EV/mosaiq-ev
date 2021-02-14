import React from "react";
import styled from "styled-components";

import color from "../styles/color";

const Container = styled.div<{ imageUrl: string }>`
  position: relative;
  background-image: ${(p) => `url(${p.imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Author = styled.span`
  position: absolute;
  padding: 0.5rem;
  color: ${color.white};
  bottom: 0.25rem;
  right: 0.25rem;
  font-size: 0.75rem;
`;
type Props = {
  url: string;
  author?: string;
  className?: string;
};
export default function Img({ url, author, className }: Props) {
  return (
    <Container className={className} imageUrl={url}>
      <Author>© {author}</Author>
    </Container>
  );
}
