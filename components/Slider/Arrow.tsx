import React from "react";
import styled, { css } from "styled-components";

import color from "../../styles/color";

const Container = styled.div<{ direction: Direction; visible: boolean }>`
  position: absolute;
  top: 0;
  width: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.greenSecondary};
  cursor: pointer;
  ${(p) =>
    p.visible
      ? css`
          opacity: 0.75;
          :hover {
            opacity: 1;
            transform: scale(1.1);
          }
        `
      : css`
          opacity: 0;
        `}
  ${(p) => (p.direction === "right" ? "right: 1rem;" : "left: 1rem;")};
  transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
  z-index: 1;
`;

export type Direction = "left" | "right";

type Props = {
  direction: Direction;
  onClick: (direction: Direction) => void;
  visible: boolean;
  className?: string;
};

const PATHS = {
  left: [
    "M143.503 255.193c68.892-60.161 522.656-399.58 700.605-184.74 126.856 153.152-16.806 201.297 0 389.179 16.285 182.056 214.982 156.743 138.4 326.889C851.27 1078.11 270.379 1060.12 71.536 798.766c-167.787-220.534 3.076-483.413 71.967-543.573z",
    "M526.545 759.769c12.023 12.953 32.27 13.708 45.224 1.686 12.953-12.023 13.708-32.27 1.686-45.224l-46.91 43.538zm46.448-476.514c12.292-12.698 11.961-32.957-.738-45.248-12.698-12.292-32.957-11.961-45.248.738l45.986 44.51zM324 494.494l-22.993-22.256c-11.829 12.221-12.031 31.559-.462 44.024L324 494.494zm249.455 221.737l-226-243.506-46.91 43.537 226 243.507 46.91-43.538zM346.993 516.749l226-233.494-45.986-44.51-226 233.493 45.986 44.511z",
  ],

  right: [
    "M856.497 744.807c-68.892 60.161-522.656 399.583-700.605 184.74-126.856-153.152 16.806-201.297 0-389.179-16.285-182.056-214.98-156.743-138.4-326.889C148.73-78.106 729.621-60.117 928.464 201.234c167.786 220.534-3.076 483.413-71.967 543.573z",
    "M473.455 240.231c-12.023-12.953-32.27-13.708-45.224-1.686-12.953 12.023-13.708 32.27-1.686 45.224l46.91-43.538zm-46.448 476.514c-12.292 12.698-11.961 32.957.738 45.248 12.698 12.292 32.957 11.961 45.248-.738l-45.986-44.51zM676 505.506l22.993 22.256c11.829-12.221 12.031-31.559.462-44.024L676 505.506zM426.545 283.769l226 243.506 46.91-43.537-226-243.507-46.91 43.538zm226.462 199.482l-226 233.494 45.986 44.51 226-233.493-45.986-44.511z",
  ],
};

export default function Arrow({
  className,
  direction,
  onClick,
  visible,
}: Props) {
  return (
    <Container
      visible={visible}
      className={className}
      direction={direction}
      onClick={() => onClick(direction)}
    >
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={PATHS[direction][0]} fill="currentColor" />
        <path d={PATHS[direction][1]} fill="#fff" />
      </svg>
    </Container>
  );
}
