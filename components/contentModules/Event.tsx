import React from "react";
import styled, { css } from "styled-components";

import { PageContent_pageCollection_items_sectionsCollection_items_contentCollection_items_Event as Props } from "../../generated/PageContent";
import color from "../../styles/color";
import { upFromBreakpoint } from "../../styles/mediaQueries";
import { boxShadow } from "../../styles/mixins";
import ContentSection from "../ContentSection";
import { Headline1, Headline2, Headline3 } from "../Typography";

const Container = styled.div<{ highlight?: boolean | null }>`
  ${boxShadow};
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  background: ${color.light};
  @media (max-width: 600px) {
    flex-direction: column;
  }
  ${(p) =>
    p.highlight &&
    css`
      background: ${color.petrol};
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const DayMonth = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

const Day = styled(Headline1)`
  color: #000;
`;
const Month = styled(Headline2)`
  color: #000;
  @media (max-width: 600px) {
    font-size: 10vmin;
    margin-left: 1rem;
  }
`;
const Time = styled.h4`
  font-size: 4vmin;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const Info = styled.div`
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
  flex: 1;
`;

const Name = styled(Headline3)`
  margin-bottom: 1rem;
`;

const Location = styled.a`
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
`;

export default function Event({
  date,
  eventDescription,
  location,
  name,
  highlight,
}: Props) {
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
            <Day>{day}</Day>
            <Month>{month}</Month>
          </DayMonth>
          <Time>{time} Uhr</Time>
        </DateContainer>
        <Info>
          <Name>{name}</Name>
          <p>{eventDescription}</p>
          <Location
            href={`http://maps.google.com/?q=${location}`}
            target="_blank"
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
