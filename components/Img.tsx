import React from "react";
import styled from "styled-components";

import color from "../styles/color";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  min-width: 100%;
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
};
export default function Img({ url, author, className }: Props) {
  return (
    <Container className={className}>
      <Image src={url} />
      {author && <Author>© {author}</Author>}
    </Container>
  );
}