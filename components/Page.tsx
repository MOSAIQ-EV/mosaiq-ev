import React, { Fragment } from "react";

import { PageContent } from "../generated/PageContent";
import Accordion from "./contentModules/Accordion";
import Board from "./contentModules/Board";
import Event from "./contentModules/Event";
import Image from "./contentModules/Image";
import LongText from "./contentModules/LongText";
import SliderModule from "./contentModules/SliderModule";
import Text from "./contentModules/Text";
import TextAndImage from "./contentModules/TextAndImage";
import Video from "./contentModules/Video";
import HeadlineSection from "./HeadlineSection";
import PageHeadline from "./PageHeadline";
import {
  Body1,
  Body2,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
} from "./Typography";
export default function Page(props: PageContent) {
  const pageHeadline = props?.pageCollection?.items[0]?.headline;

  return (
    <>
      {pageHeadline && <PageHeadline headline={pageHeadline} />}
      {/* <div style={{ width: "100%", minHeight: 600, padding: "200px 2rem" }}>
        <Headline1>Headline 1</Headline1>
        <Headline2>Headline 2</Headline2>
        <Headline3>Headline 3</Headline3>
        <Headline4>Headline 4</Headline4>
        <Body1>Body 1</Body1>
        <Body2>Body 1</Body2>
      </div> */}
      {props?.pageCollection?.items[0]?.sectionsCollection?.items.map(
        (section, i) => (
          <Fragment key={i}>
            {section?.headline && (
              <HeadlineSection
                key={section.headline + i}
                headline={section.headline}
              />
            )}
            {section?.contentCollection?.items.map((c, i) => {
              switch (c?.__typename) {
                case "TextAndImage":
                  if (!c.text?.json || !c.image?.url) return null;
                  return <TextAndImage key={c.__typename + i} {...c} />;
                case "Text":
                  if (!c.text) return null;
                  return <Text key={c.__typename + i} {...c} />;
                case "Image":
                  if (!c.image?.url) return null;
                  return (
                    <Image
                      key={c.__typename + i}
                      image={c.image.url}
                      description={c.description?.json}
                      link={c.link?.sys.id}
                    />
                  );
                case "Video":
                  if (!c.url) return null;
                  return <Video key={c.__typename + i} url={c.url} />;
                case "Accordion":
                  if (!c.headline || !c.text?.json) return null;
                  return (
                    <Accordion
                      key={c.__typename + i}
                      headline={c.headline}
                      text={c.text.json}
                    />
                  );
                case "LongText":
                  if (!c.text?.json) return null;
                  return <LongText key={c.__typename + i} text={c.text.json} />;
                case "Board":
                  if (!c.memberCollection?.items) return null;
                  return (
                    <Board
                      key={c.__typename + i}
                      items={c.memberCollection.items}
                    />
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
          </Fragment>
        ),
      )}
    </>
  );
}
