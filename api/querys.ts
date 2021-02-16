import { gql } from "graphql-request";

export const Page_Content = gql`
  query PageContent($name: String!, $id: String!) {
    pageCollection(
      where: { OR: [{ name: $name }, { sys: { id: $id } }] }
      limit: 1
    ) {
      items {
        headline
        contentCollection(limit: 20) {
          items {
            __typename
            ...sectionHeadline
            ...textAndImage
            ...text
            ...image
            ...slider
            ...event
            ...longText
            ...accordion
            ...video
          }
        }
      }
    }
  }
  fragment sectionHeadline on SectionHeadline {
    headline
  }

  fragment textAndImage on TextAndImage {
    text {
      json
    }
    image {
      url
      description
    }
    link {
      sys {
        id
      }
    }
    document {
      url
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
    document {
      url
    }
  }
  fragment image on Image {
    image {
      url
      description
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
      description
    }
  }

  fragment sliderTeaser on SliderTeaser {
    image {
      url
      description
    }
    page {
      headline
      sys {
        id
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

  fragment longText on LongText {
    text {
      json
    }
  }

  fragment accordion on Accordion {
    headline
    text {
      json
    }
  }

  fragment video on Video {
    url
  }
`;
