import React from "react";
import styled from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Board_memberCollection_items } from "../generated/PageContent";
import { boxShadow } from "../styles/mixins";
import Link from "./Link";

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

const Mail = styled(Link)`
  text-decoration: none;
  margin-top: 0.5rem;
`;
export default function BoardCard({
  image,
  name,
  role,
  email,
}: PageContent_pageCollection_items_contentCollection_items_Board_memberCollection_items) {
  return (
    <Container>
      <Image src={image.url} />
      <Info>
        <h3>{name}</h3>
        <span>{role}</span>
        <Mail href={`mailto:${email}`}>{email}</Mail>
      </Info>
    </Container>
  );
}
