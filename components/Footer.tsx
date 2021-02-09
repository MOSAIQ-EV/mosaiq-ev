import React from "react";
import styled from "styled-components";

import color from "../styles/color";
import { upFromBreakpoint, upToBreakpoint } from "../styles/mediaQueries";
import { Facebook, Instagram } from "./Icons";
import { Headline3 as Headline4 } from "./Typography";
import WaveSvgClipPath from "./WaveSvgClipPath";

const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ${upFromBreakpoint("medium")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
    padding: 2rem;
  }
  ${upFromBreakpoint("large")} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2rem;
  }
  background-color: ${color.primary};
  --wave-height: 4rem;
  margin-top: var(--wave-height);
  ::before {
    content: "";
    position: absolute;
    top: calc((var(--wave-height) - 1px) * -1);
    right: 0;
    left: 0;
    height: var(--wave-height);
    background-color: ${color.primary};
    clip-path: url(#footer-wave);
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.light};
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  ${upToBreakpoint("medium")} {
    :not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

const NavItem = styled.a`
  color: ${color.light};
`;

const IconContainer = styled.div`
  display: flex;
  height: 3rem;
  & > svg:first-child {
    margin-right: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.light};
  margin-top: 2rem;
  ${upFromBreakpoint("medium")} {
    grid-column-end: span 2;
  }
  ${upFromBreakpoint("large")} {
    grid-column-end: span 4;
  }
`;

export default function Footer() {
  return (
    <>
      <Container>
        <Box>
          <Headline4>Mitmachen</Headline4>
          <NavItem href="/veranstaltungen">Veranstaltungen</NavItem>
          <NavItem href="/kontakt">Kontakt</NavItem>
        </Box>
        <Box>
          <Headline4>MOSAIQ buchen</Headline4>
          <NavItem href="/projekte">Kooperationen</NavItem>
          <NavItem href="/kontakt">Workshop</NavItem>
          <NavItem href="/kontakt">Seminaranfragen</NavItem>
        </Box>
        <Box>
          <Headline4>Fördern</Headline4>
          <span>
            IBAN: <b>DE58 2005 0550 1268 1351 81</b>
          </span>
          <span>
            BIC: <b>HASPDEHHXXX</b>
          </span>
          <span>
            Gib bitte deine Adresse oder E-Mail Adresse im Überweisungsbetreff
            mit an, damit wir überhaupt wissen, wer du bist.
          </span>
        </Box>
        <Box>
          <Headline4>Social Media</Headline4>
          <IconContainer>
            <Instagram />
            <Facebook />
          </IconContainer>
        </Box>
        <Row>
          <NavItem href={"routes.imprint"}>Impressum</NavItem>
          <span>@MOSAIQ 2021</span>
        </Row>
      </Container>
      <WaveSvgClipPath
        path="M0 0.999985C0 0.999985 0.00150005 0.27046 0.1235 0.0723457C0.2455 -0.125768 0.326084 0.147752 0.4655 0.129161C0.63253 0.106887 0.804496 -0.0722102 0.876832 0.0723457C1 0.318485 1 0.999985 1 0.999985H0Z"
        id="footer-wave"
      />
    </>
  );
}
