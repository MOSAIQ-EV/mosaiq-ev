import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";

import color from "../styles/color";

const Container = styled.div<{ open: boolean }>`
  width: 2.2rem;
  height: 1.5rem;
  position: relative;
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: calc(100% / 8);
    width: 100%;
    background: ${(p) => (p.open ? color.white : color.blue)};
    border-radius: 10px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 44%;
  }
  span:nth-child(4) {
    top: 88.5%;
  }
  ${(p) =>
    p.open &&
    css`
      span:nth-child(1) {
        top: 44%;
        width: 0%;
        left: 50%;
      }
      span:nth-child(2) {
        transform: rotate(45deg);
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
      }
      span:nth-child(4) {
        top: 44%;
        width: 0%;
        left: 50%;
      }
    `}
`;

type Props = {
  onClick: (e: MouseEvent) => void;
  open: boolean;
  className?: string;
};
export default function BurgerMenu({ onClick, open, className }: Props) {
  return (
    <Container open={open} onClick={onClick} className={className}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
}
