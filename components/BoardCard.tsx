import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Board_memberCollection_items as Props } from "../generated/PageContent";
import color from "../styles/color";
import { boxShadow } from "../styles/mixins";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  overflow: hidden;
  ${boxShadow}
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
`;

const Mail = styled.a`
  color: ${color.petrol};
  font-weight: bold;
  text-decoration: none;
  margin-top: 0.5rem;
`;
export default function BoardCard({ image, name, role, email }: Props) {
  if (!image?.url || !name || !role || !email) return null;
  return (
    <Container>
      <Image src={image.url} />
      <Info>
        <Name>{name}</Name>
        <span>{role}</span>
        <Mail href={`mailto:${email}`}>{email}</Mail>
      </Info>
    </Container>
  );
}
