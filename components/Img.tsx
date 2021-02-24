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
  onClick?: () => void;
};

export default function Img({ url, author, className, onClick }: Props) {
  return (
    <Container className={className} onClick={onClick}>
      <picture>
        <source srcSet={`${url}?fm=webp&q=80`} type="image/webp" />
        <source srcSet={`${url}?fm=jpg&q=80`} type="image/jpeg" />
        <Image src={`${url}?fm=jpg&q=80`} alt="Source sets are awesome!" />
      </picture>
      {author && <Author>© {author}</Author>}
    </Container>
  );
}
