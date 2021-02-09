import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import color from "../styles/color";

import { Logo } from "./Icons";

const Container = styled.header<{ visible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 1em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  background-color: ${color.light};
  transform: translateY(${p => (p.visible ? 0 : -100)}%);
  transition: transform 300ms ease-out;
`;

const Nav = styled.nav`
  flex: 1;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: ${color.dark};
  padding: 1em;
  font-size: 1.2em;
  :hover {
    text-decoration: underline;
  }
`;

const StyledLogo = styled(Logo)`
  height: 3em;
  margin-right: 4em;
`;

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  const handleScroll = () => {
    window.requestAnimationFrame(function () {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setVisible(true);
        return;
      }
      if (currentScroll > 100) {
        setVisible(false);
      }
      if (currentScroll < lastScroll.current) {
        setVisible(true);
      }
      lastScroll.current = currentScroll;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <Container visible={visible}>
      <a href="/">
        <StyledLogo />
      </a>
      <Nav>
        <NavItem href={`/routes.aboutUs`}>Über uns</NavItem>
        <NavItem href={"/routes.events"}>Events</NavItem>
        <NavItem href={"/routes.projects"}>Mitmachen</NavItem>
      </Nav>
    </Container>
  );
}
