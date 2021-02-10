import { Document } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";

import { upFromBreakpoint } from "../../styles/mediaQueries";
import ContentSection from "../ContentSection";
import TextBox from "../TextBox";
import { ImageBox } from "./Image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${upFromBreakpoint("medium")} {
    margin: 0 -1rem 2rem -1rem;
  }
`;

const Text = styled(TextBox)`
  z-index: 2;
  border-radius: 0 0 0.5rem 0.5rem;
  ${upFromBreakpoint("medium")} {
    border-radius: 0.5rem;
  }
`;

const Image = styled(ImageBox)`
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  ${upFromBreakpoint("medium")} {
    width: 50%;
    border-radius: 0.5rem;
  }
`;

const StyledContentSection = styled(ContentSection)`
  ${upFromBreakpoint("medium")} {
    :nth-child(even) {
      ${Container} {
        flex-direction: row-reverse;
        ${Text} {
          transform: translate3d(1rem, 2rem, 0);
        }
        ${Image} {
          transform: translate3d(-1rem, 0rem, 0);
        }
      }
    }
    :nth-child(odd) {
      ${Container} {
        flex-direction: row;
        ${Text} {
          transform: translate3d(-1rem, 2rem, 0);
        }
        ${Image} {
          transform: translate3d(1rem, 0rem, 0);
        }
      }
    }
  }
`;

type Props = { text: Document; image: string; link?: string };

export default function TextAndImage({ text, image, link }: Props) {
  return (
    <StyledContentSection>
      <Container>
        <Image src={image} />
        <Text text={text} link={link} />
      </Container>
    </StyledContentSection>
  );
}
