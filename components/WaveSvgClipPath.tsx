import React from "react";
import styled from "styled-components";

const Container = styled.svg`
  display: block;
  height: 0;
  width: 0;
`;

type Props = {
  path: string;
  id: string;
};

export default function WaveSvgClipPath({ path, id }: Props) {
  return (
    <Container>
      <clipPath id={id} clipPathUnits="objectBoundingBox">
        <path d={path} />
      </clipPath>
    </Container>
  );
}
