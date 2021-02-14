import Head from "next/head";
import React, { useCallback, useRef } from "react";

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

export default function Page({
  pageCollection,
  colors,
  title,
  noPageHeadlineOverlay,
}: PageContent & {
  colors: string[];
  title?: string;
  noPageHeadlineOverlay?: boolean;
}) {
  const pageHeadline = pageCollection?.items[0]?.headline;
  const nextBackgroundColor = useRef(0);
  const textImageModuleCount = useRef(0);
  const getBackgroundColor = useCallback(() => {
    nextBackgroundColor.current += 1;
    return colors[nextBackgroundColor.current % colors.length];
  }, [colors]);
  return (
    <>
      {title && (
        <Head>
          <title>MOSAIQ e.V. - {title}</title>
        </Head>
      )}
      {pageHeadline && (
        <PageHeadline
          noOverlav={noPageHeadlineOverlay}
          backgroundColor={colors[0]}
        >
          {pageHeadline}
        </PageHeadline>
      )}
      {pageCollection?.items[0]?.contentCollection.items.map((c, i) => {
        if (c.__typename === "TextAndImage") {
          textImageModuleCount.current += 1;
        } else {
          textImageModuleCount.current = 0;
        }
        switch (c.__typename) {
          case "SectionHeadline":
            return (
              <HeadlineSection
                key={c.__typename + i}
                {...c}
                backgroundColor={getBackgroundColor()}
              />
            );
          case "TextAndImage":
            return (
              <TextAndImage
                reverse={textImageModuleCount.current % 2 === 0}
                key={c.__typename + i}
                {...c}
              />
            );
          case "Text":
            return <Text key={c.__typename + i} {...c} />;
          case "Image":
            return <Image key={c.__typename + i} {...c} />;
          case "Slider":
            return <SliderModule key={c.__typename + i} {...c} />;
          case "Event":
            return <Event key={c.__typename + i} {...c} />;
          case "LongText":
            return (
              <LongText
                key={c.__typename + i}
                {...c}
                backgroundColor={getBackgroundColor()}
              />
            );
          case "Accordion":
            return (
              <Accordion
                key={c.__typename + i}
                {...c}
                backgroundColor={getBackgroundColor()}
              />
            );
          case "Video":
            return <Video key={c.__typename + i} {...c} />;
          case "Board":
            return <Board key={c.__typename + i} {...c} />;
          default:
            return null;
        }
      })}
    </>
  );
}
