import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

import { upFromBreakpoint, upToBreakpoint } from "../../styles/mediaQueries";
import { boxShadow } from "../../styles/mixins";
import TextBox from "../TextBox";

export const ImageBox = styled.img`
  border-radius: 0.5rem;
  object-fit: cover;
  max-width: 100%;
  ${boxShadow};
  ${upToBreakpoint("medium")} {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${upToBreakpoint("medium")} {
    & > div {
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }

  ${upFromBreakpoint("medium")} {
    :nth-child(odd) {
      margin: 0 0 -2rem 6rem;
      & > div {
        margin: 0 3rem 0 -2rem;
        transform: translateY(-2rem);
      }
    }
    :nth-child(even) {
      margin: 0 6rem -2rem 0;
      & > div {
        margin: 0 -2rem 0 3rem;
        transform: translateY(-2rem);
      }
    }
  }
`;

type Props = { image: string; description?: Document; link?: string };

export default function Image({ image, description, link }: Props) {
  return (
    <Container>
      <ImageBox src={image} />
      {description && <TextBox text={description} link={link} />}
    </Container>
  );
}
