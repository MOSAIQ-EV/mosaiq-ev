import React from "react";
import styled from "styled-components";

import { boxShadow } from "../../styles/mixins";
import ContentSection from "../ContentSection";

const RatioContainer = styled.div`
  position: relative;
  padding-bottom: 56.52%;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  ${boxShadow};
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const getVideoIdFromUrl = (url: string, type: "youtube" | "vimeo") => {
  if (type === "youtube") {
    const matches = url.match(new RegExp("v=" + "(.*)" + "&"));
    return matches && matches[1];
  }
  if (type === "vimeo") {
    const matches = url.match(/\d+/g);
    return matches && matches[0];
  }
};

type Props = {
  url: string;
};

export default function Video({ url }: Props) {
  const isYoutube = url.includes("youtube");
  const vimeoLink = `https://player.vimeo.com/video/${getVideoIdFromUrl(
    url,
    "vimeo",
  )}?title=0&byline=0&portrait=0`;
  console.log(vimeoLink);
  const youtubeLink = `https://www.youtube-nocookie.com/embed/${getVideoIdFromUrl(
    url,
    "youtube",
  )}?&rel=0&showinfo=0&modestbranding=1`;
  return (
    <ContentSection>
      <RatioContainer>
        <iframe
          title="Video"
          src={isYoutube ? youtubeLink : vimeoLink}
          frameBorder="0"
          allowFullScreen
        />
      </RatioContainer>
    </ContentSection>
  );
}
