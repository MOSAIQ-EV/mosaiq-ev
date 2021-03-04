import React from "react";
import styled from "styled-components";

import color from "../styles/color";
import { upFromBreakpoint, upToBreakpoint } from "../styles/mediaQueries";
import { Facebook, Instagram } from "./Icons";
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
  background-color: ${color.blue};
  --wave-height: 4rem;
  margin-top: var(--wave-height);
  ::before {
    content: "";
    position: absolute;
    top: calc((var(--wave-height) - 1px) * -1);
    right: 0;
    left: 0;
    height: var(--wave-height);
    background-color: ${color.blue};
    clip-path: url(#footer-wave);
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.white};
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
  color: ${color.white};
`;

const IconContainer = styled.div`
  display: flex;
  & > a:first-child {
    margin-right: 2rem;
  }
  a {
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    display: block;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.white};
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
          <h3>Mitmachen</h3>
          <NavItem href="/veranstaltungen">Veranstaltungen</NavItem>
          <NavItem href="/kontakt">Kontakt</NavItem>
        </Box>
        <Box>
          <h3>MOSAIQ buchen</h3>
          <NavItem href="/projekte">Kooperationen</NavItem>
          <NavItem href="/kontakt">Workshop</NavItem>
          <NavItem href="/kontakt">Seminaranfragen</NavItem>
        </Box>
        <Box>
          <h3>Fördern</h3>
          <span>
            IBAN: <b>DE05 4306 0967 1129 7671 00</b>
          </span>
          <span>
            BIC: <b>GENODEM1GLS</b>
          </span>
          <span>
            Wir freuen uns über jede Spendensumme. Eine Spendenbescheinigung
            kann auf Nachfrage ausgestellt werden.
          </span>
        </Box>
        <Box>
          <h3>Social Media</h3>
          <IconContainer>
            <a
              href="https://www.instagram.com/mosaiq_hamburg"
              target="__blank"
              aria-label="Instagran"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/MOSAIQhamburg"
              target="__blank"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </IconContainer>
        </Box>
        <Row>
          <NavItem href={"/impressum"}>Impressum</NavItem>
          <span>@MOSAIQ {new Date().getFullYear()}</span>
        </Row>
      </Container>
      <WaveSvgClipPath
        path="M0 0.999985C0 0.999985 0.00150005 0.27046 0.1235 0.0723457C0.2455 -0.125768 0.326084 0.147752 0.4655 0.129161C0.63253 0.106887 0.804496 -0.0722102 0.876832 0.0723457C1 0.318485 1 0.999985 1 0.999985H0Z"
        id="footer-wave"
      />
    </>
  );
}
