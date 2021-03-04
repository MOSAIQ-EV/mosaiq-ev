import { useRouter } from "next/dist/client/router";
import React, { useCallback } from "react";
import styled, { css } from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_TextAndImage } from "../../generated/PageContent";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import { boxShadow, hoverAnimation } from "../../styles/mixins";
import ContentSection from "../ContentSection";
import Img from "../Img";
import TextBox from "../TextBox";

const Text = styled(TextBox)`
  z-index: 2;
  border-radius: 0 0 0.5rem 0.5rem;
  transition: transform 200ms ease-in-out;

  ${upFromBreakpoint("medium")} {
    width: 50%;
    border-radius: 0.5rem;
  }
`;

const Image = styled(Img)`
  border-radius: 0.5rem 0.5rem 0 0;
  height: max-content;
  transition: transform 200ms ease-in-out;
  ${boxShadow}
  ${upFromBreakpoint("medium")} {
    width: 50%;
    border-radius: 0.5rem;
    ${(p) => p.onClick && "cursor:pointer;"}
  }
`;

const Container = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: column;
  ${hoverAnimation};
  ${upFromBreakpoint("medium")} {
    ${(p) =>
      css`
        @media (hover: hover) and (pointer: fine) {
          transition: transform 200ms ease-in-out;
          :hover {
            ${Text} {
              transform: translate3d(
                ${p.reverse ? "1.5rem, 1.5rem, 0" : "-1.5rem, 1.5rem, 0"}
              );
            }
          }
        }
      `}
    margin: 0 -1rem 2rem -1rem;
    flex-direction: row;
    ${Text} {
      transform: translate3d(-1rem, 2rem, 0);
    }
    ${Image} {
      transform: translate3d(1rem, 0rem, 0);
      & > span {
        margin-right: ${(p) => (p.reverse ? 0 : 2.25)}rem;
      }
    }

    ${(p) =>
      p.reverse &&
      css`
        flex-direction: row-reverse;
        ${Text} {
          transform: translate3d(1rem, 2rem, 0);
        }
        ${Image} {
          transform: translate3d(-1rem, 0rem, 0);
        }
      `}
  }
`;

export default function TextAndImage({
  image,
  reverse,
  ...text
}: PageContent_pageCollection_items_contentCollection_items_TextAndImage & {
  reverse: boolean;
}) {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/projekte/${text.link.sys.id}`);
  }, [router, text.link?.sys?.id]);
  return (
    <ContentSection>
      <Container reverse={reverse}>
        <Image
          {...image}
          aspectRatio={4 / 3}
          onClick={text.link ? handleClick : null}
        />
        <Text {...text} />
      </Container>
    </ContentSection>
  );
}
