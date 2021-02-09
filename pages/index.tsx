import { gql } from "graphql-request";
import { GetServerSideProps } from "next";
import React from "react";

import { client } from "../api";
import Accordion from "../components/contentModules/Accordion";
import Board from "../components/contentModules/Board";
import Event from "../components/contentModules/Event";
import Image from "../components/contentModules/Image";
import LongText from "../components/contentModules/LongText";
import SliderModule from "../components/contentModules/SliderModule";
import Text from "../components/contentModules/Text";
import TextAndImage from "../components/contentModules/TextAndImage";
import Video from "../components/contentModules/Video";
import ContentSection from "../components/ContentSection";
import HeadlineSection from "../components/HeadlineSection";
import PageHeadline from "../components/PageHeadline";
import {
  Body1,
  Body2,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
} from "../components/Typography";
import { PageContent } from "../generated/PageContent";
// import ContentSection from "../common/ContentSection";
// import HeadlineSection from "../common/HeadlineSection";
// import PageHeadline from "../common/PageHeadline";
// import {
//   Body1,
//   Body2,
//   Headline1,
//   Headline2,
//   Headline3,
//   Headline4,
// } from "../compo/Typography";
// import Accordion from "../contentModules/Accordion";
// import Board from "../contentModules/Board";
// import Event from "../contentModules/Event";
// import Image from "../contentModules/Image";
// import LongText from "../contentModules/LongText";
// import SliderModule from "../contentModules/SliderModule";
// import Text from "../contentModules/Text";
// import TextAndImage from "../contentModules/TextAndImage";
// import Video from "../contentModules/Video";
// import { PageContent } from "../generated/PageContent";

const Page_Content = gql`
  query PageContent($name: String!) {
    pageCollection(where: { name: $name }, limit: 1) {
      items {
        headline
        sectionsCollection(limit: 10) {
          items {
            headline
            contentCollection(limit: 20) {
              items {
                __typename
                ...textAndImage
                ...text
                ...image
                ...video
                ...accordion
                ...longText
                ...board
                ...event
                ...slider
              }
            }
          }
        }
      }
    }
  }

  fragment textAndImage on TextAndImage {
    text {
      json
    }
    image {
      url
    }
    link {
      sys {
        id
      }
    }
  }

  fragment text on Text {
    text {
      json
    }
    link {
      sys {
        id
      }
    }
  }

  fragment image on Image {
    image {
      url
    }
    description {
      json
    }
    link {
      sys {
        id
      }
    }
  }
  fragment video on Video {
    url
  }

  fragment accordion on Accordion {
    headline
    text {
      json
    }
  }

  fragment longText on LongText {
    text {
      json
    }
  }

  fragment board on Board {
    memberCollection(limit: 10) {
      items {
        image {
          url
        }
        name
        role
        email
      }
    }
  }
  fragment event on Event {
    name
    eventDescription
    date
    location
    highlight
  }

  fragment slider on Slider {
    itemsCollection(limit: 15) {
      items {
        __typename
        ...sliderTeaser
        ...sliderImage
      }
    }
  }

  fragment sliderImage on SliderImage {
    image {
      url
    }
  }

  fragment sliderTeaser on SliderTeaser {
    image {
      url
    }
    page {
      headline
      sys {
        id
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.request(Page_Content, {
    name: "Startseite",
  });
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};

export default function StartPage({ data }: { data: PageContent }) {
  const pageHeadline = data?.pageCollection?.items[0]?.headline;
  return (
    <>
      {pageHeadline && <PageHeadline headline={pageHeadline} />}
      <div style={{ width: "100%", minHeight: 600, padding: "200px 2rem" }}>
        <Headline1>Headline 1</Headline1>
        <Headline2>Headline 2</Headline2>
        <Headline3>Headline 3</Headline3>
        <Headline4>Headline 4</Headline4>
        <Body1>Body 1</Body1>
        <Body2>Body 1</Body2>
      </div>
      {data?.pageCollection?.items[0]?.sectionsCollection?.items.map(
        (section) => (
          <>
            {section?.headline && (
              <HeadlineSection headline={section.headline} />
            )}
            {section?.contentCollection?.items.map((c, i) => {
              switch (c?.__typename) {
                case "TextAndImage":
                  if (!c.text?.json || !c.image?.url) return null;
                  return (
                    <ContentSection>
                      <TextAndImage
                        key={c.__typename + i}
                        text={c.text?.json}
                        image={c.image?.url}
                        link={c.link?.sys.id}
                      />
                    </ContentSection>
                  );
                case "Text":
                  if (!c.text?.json) return null;
                  return <Text text={c.text.json} link={c.link?.sys.id} />;
                case "Image":
                  if (!c.image?.url) return null;
                  return (
                    <ContentSection key={c.__typename + i}>
                      <Image
                        image={c.image.url}
                        description={c.description?.json}
                        link={c.link?.sys.id}
                      />
                    </ContentSection>
                  );
                case "Video":
                  if (!c.url) return null;
                  return (
                    <ContentSection key={c.__typename + i}>
                      <Video url={c.url} />
                    </ContentSection>
                  );
                case "Accordion":
                  if (!c.headline || !c.text?.json) return null;
                  return <Accordion headline={c.headline} text={c.text.json} />;
                case "LongText":
                  if (!c.text?.json) return null;
                  return <LongText key={c.__typename + i} text={c.text.json} />;
                case "Board":
                  if (!c.memberCollection?.items) return null;
                  return (
                    <ContentSection>
                      <Board
                        key={c.__typename + i}
                        items={c.memberCollection.items}
                      />
                    </ContentSection>
                  );
                case "Event":
                  return <Event key={c.__typename + i} {...c} />;
                case "Slider":
                  if (!c.itemsCollection?.items) return null;
                  return (
                    <SliderModule
                      key={c.__typename + i}
                      items={c.itemsCollection?.items}
                    />
                  );
              }
            })}
          </>
        ),
      )}
    </>
  );
}
