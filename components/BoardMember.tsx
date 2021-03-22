import React, { useRef, useState } from "react";
import StyledFrame from "react-styled-frame";
import styled, { createGlobalStyle } from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Board_memberCollection_items } from "../generated/PageContent";
import color from "../styles/color";
import Link from "./Link";
import { font } from "./Typography";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-family: 'Varela Round', sans-serif;
        color: ${color.white}
    }
    h3 {
        ${font.headline3}
    }
    div, span, p, a {
        ${font.text}
    }
`;

const Iframe = styled(StyledFrame)`
  width: 100%;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  overflow: auto;
  margin-bottom: 2rem;
`;

const Role = styled.div`
  margin-bottom: 0.75rem;
`;

const Mail = styled(Link)`
  color: ${color.white};
`;

export default function BoardMember({
  hideFromGoogle,
  name,
  role,
  mail,
}: PageContent_pageCollection_items_contentCollection_items_Board_memberCollection_items) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  return (
    <>
      {hideFromGoogle && (
        <Iframe
          onLoad={() => {
            if (ref.current) {
              setHeight(ref.current.clientHeight);
            }
          }}
          height={height}
          initialContent="<!DOCTYPE html><html><head><meta name='robots' content='noindex, nofollow' /><link rel='preconnect' href='https://fonts.gstatic.com'><link href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' rel='stylesheet'></link></head><body><div></div></body></html>"
        >
          <>
            <GlobalStyle />
            <h3>{name}</h3>
            <Role>{role}</Role>
            <Mail href={`mailto:${mail}`}>{mail}</Mail>
          </>
        </Iframe>
      )}
      <Container style={{ display: height ? "none" : "auto" }} ref={ref}>
        <h3>{name}</h3>
        <Role>{role}</Role>
        <Mail href={`mailto:${mail}`}>{mail}</Mail>
      </Container>
    </>
  );
}
