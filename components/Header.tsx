import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { navPaths } from "../page-config";
import color from "../styles/color";
import { upToBreakpoint } from "../styles/mediaQueries";
import { Logo } from "./Icons";

const Container = styled.header<{ visible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: ${color.light};
  transform: translateY(${(p) => (p.visible ? 0 : -100)}%);
  transition: transform 300ms ease-out;
`;

const Nav = styled.nav<{ open: boolean }>`
  ${upToBreakpoint("large")} {
    ${(p) =>
      p.open &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        background: lightgreen;
      `}
  }
`;

const NavItem = styled.a<{ active: boolean }>`
  position: relative;
  text-decoration: none;
  color: ${color.dark};
  padding: 1rem;
  font-size: 1.2rem;
  :hover {
    ::after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 10px;
    background-repeat: no-repeat;
    bottom: 0.9rem;
    background-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 144 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.05212 8.13657C24.7997 3.31469 37.5491 14.7115 54.5267 13.9855C71.5043 13.2595 91.5801 1.28769 138.999 8.13693' stroke='%23858CC6' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-size: 100%;
    transform: scaleX(0.5);
    opacity: 0;
    transition: all 300ms;
    z-index: -1;
  }
  ${(p) =>
    p.active &&
    css`
      ::after {
        transform: scaleX(1);
        opacity: 1;
      }
    `}
`;

const StyledLogo = styled(Logo)`
  height: 3em;
  margin-right: 4em;
`;

export default function Header() {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleScroll = useCallback(() => {
    window.requestAnimationFrame(function () {
      if (!mobileNavOpen) {
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
      }
    });
  }, [mobileNavOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, visible]);

  return (
    <Container visible={visible}>
      <a href="/">
        <StyledLogo />
      </a>
      <Nav open={mobileNavOpen}>
        {Object.keys(navPaths).map((p) => (
          <NavItem
            key={p}
            active={router.pathname === navPaths[p].path}
            href={navPaths[p].path}
          >
            {navPaths[p].name}
          </NavItem>
        ))}
      </Nav>
    </Container>
  );
}
