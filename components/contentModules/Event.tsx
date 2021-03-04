import React from "react";
import styled, { css } from "styled-components";

import { PageContent_pageCollection_items_contentCollection_items_Event } from "../../generated/PageContent";
import color from "../../styles/color";
import { upFromBreakpoint, upToBreakpoint } from "../../styles/mediaQueries";
import { boxShadow } from "../../styles/mixins";
import ContentSection from "../ContentSection";
import RichText from "../RichText";

const Container = styled.div<{ highlight?: boolean | null }>`
  ${boxShadow};
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  background: ${color.white};
  @media (max-width: 600px) {
    flex-direction: column;
  }
  ${(p) =>
    p.highlight &&
    css`
      background: ${color.green};
      color: #fff;
      h1,
      a,
      h2 {
        color: #fff;
      }
    `}
`;

const StyledContentSection = styled(ContentSection)`
  ${upFromBreakpoint("medium")} {
    :nth-child(odd) {
      ${Container} {
        margin-right: 8vmin;
      }
    }
    :nth-child(even) {
      ${Container} {
        margin-left: 8vmin;
      }
    }
  }
`;

const DateContainer = styled.div`
  margin-right: 4rem;
`;

const Info = styled.div`
  flex: 1;
`;

const DayMonth = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

const Time = styled.h3`
  margin-top: 1.5rem;
  ${upToBreakpoint("medium")} {
    margin-top: 1rem;
  }
`;

const Location = styled.a<{ disabled: boolean }>`
  display: block;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
  cursor: pointer;
  svg {
    margin-right: 1rem;
    width: 1rem;
  }
  pointer-events: ${(p) => (p.disabled ? "none" : "all")};
`;

export default function Event({
  date,
  eventDescription,
  location,
  name,
  highlight,
  linkToMaps,
}: PageContent_pageCollection_items_contentCollection_items_Event) {
  if (!date || !eventDescription || !location || !name) return null;
  const time = new Date(date).toLocaleTimeString().slice(0, -3);
  const [day, month] = new Intl.DateTimeFormat("de", {
    day: "2-digit",
    month: "long",
  })
    .format(new Date(date))
    .split(" ");

  return (
    <StyledContentSection>
      <Container highlight={highlight}>
        <DateContainer>
          <DayMonth>
            <h2>{day}</h2>
            <h2>{month}</h2>
          </DayMonth>
          <Time>{time} Uhr</Time>
        </DateContainer>
        <Info>
          <h3>{name}</h3>
          <RichText document={eventDescription.json} />
          <Location
            href={`http://maps.google.com/?q=${location}`}
            target="_blank"
            disabled={!linkToMaps}
          >
            <svg
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.404.007C5.905-.213.568 4.99.568 11.439c0 7.32 7.024 12.631 10.96 20.27a.54.54 0 00.96 0c3.561-6.873 9.648-11.482 10.776-18.104C24.432 6.753 19.35.241 12.404.007zm-.396 17.424a5.992 5.992 0 110-11.984 5.992 5.992 0 010 11.984z"
                fill="currentColor"
              />
            </svg>
            {location}
          </Location>
        </Info>
      </Container>
    </StyledContentSection>
  );
}
