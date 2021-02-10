import { gql } from "graphql-request";

export const Page_Content = gql`
  query PageContent($name: String!, $id: String!) {
    pageCollection(
      where: { OR: [{ name: $name }, { sys: { id: $id } }] }
      limit: 1
    ) {
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
