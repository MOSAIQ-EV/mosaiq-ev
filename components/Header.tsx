import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import { navPaths } from "../page-config";
import color from "../styles/color";
import { upFromBreakpoint, upToBreakpoint } from "../styles/mediaQueries";
import BurgerMenu from "./BurgerMenu";
import { Logo } from "./Icons";
import { font } from "./Typography";
import WaveSvgClipPath from "./WaveSvgClipPath";

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
  background-color: ${color.white};
  transform: translateY(${(p) => (p.visible ? 0 : -100)}%);
  transition: transform 300ms ease-out;
`;

const moveIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Nav = styled.nav<{ open: boolean }>`
  ${upToBreakpoint("large")} {
    ${(p) =>
      p.open
        ? css`
            position: absolute;
            z-index: 1;
            top: 0;
            left: 1rem;
            right: 0;
            height: 90vh;
            background: ${color.greenSecondary};
            display: flex;
            flex-direction: column;
            padding: 3rem 1rem;
            clip-path: url(#nav-wave);
            animation: ${moveIn} 500ms forwards;
            & > * {
              display: block;
              animation: ${moveIn} 750ms forwards;
              margin-left: auto;
            }
          `
        : css`
            display: none;
          `}
  }
`;

const Backdrop = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0rem;
  right: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  user-select: none;
  pointer-events: none;
  opacity: ${(p) => (p.visible ? 1 : 0)};
  transition: opacity 400ms ease-in-out;
  ${upFromBreakpoint("large")} {
    display: none;
  }
`;

const NavItem = styled.a<{ active: boolean; color: string }>`
  position: relative;
  text-decoration: none;
  color: ${color.black};
  padding: 1rem;
  font-size: 1.2rem;
  ${upToBreakpoint("large")} {
    ${font.headline3};
    font-weight: normal;
    color: ${color.white};
  }
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
    bottom: 0.6rem;
    background-image: url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 144 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.05212 8.13657C24.7997 3.31469 37.5491 14.7115 54.5267 13.9855C71.5043 13.2595 91.5801 1.28769 138.999 8.13693' stroke='${(
      p,
    ) =>
      p.color.replace(
        "#",
        "%23",
      )}' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
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

const Menu = styled(BurgerMenu)`
  margin-left: auto;
  z-index: 2;
  ${upFromBreakpoint("large")} {
    display: none;
  }
`;

const StyledLogo = styled(Logo)`
  height: 3rem;
  margin-right: 4rem;
  ${upToBreakpoint("medium")} {
    height: 2rem;
    margin-right: 2rem;
  }
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
      <a href="/" aria-label="Zur Startseite">
        <StyledLogo />
      </a>
      <Menu
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        open={mobileNavOpen}
      />
      <Nav open={mobileNavOpen}>
        {Object.keys(navPaths).map((p) => (
          <NavItem
            key={p}
            color={navPaths[p].color}
            active={router.pathname === navPaths[p].path}
            href={navPaths[p].path}
          >
            {navPaths[p].name}
          </NavItem>
        ))}
        <WaveSvgClipPath
          id="nav-wave"
          path="M0.0969336 0C0.289315 0 1 0 1 0C1 0 1 0.736327 1 0.912985C1 1.08964 0.636227 0.953988 0.406995 0.884297C0.269952 0.842633 0.128629 0.923929 0.0534431 0.803769C-0.0213951 0.684164 0.0771961 0.584552 0.0677694 0.444413C0.055886 0.267754 -0.0954477 0 0.0969336 0Z"
        />
      </Nav>
      <Backdrop visible={mobileNavOpen} />
    </Container>
  );
}
