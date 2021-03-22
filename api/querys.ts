import { gql } from "graphql-request";

export const Page_Content = gql`
  query PageContent($name: String!, $id: String!) {
    pageCollection(
      where: { OR: [{ name: $name }, { sys: { id: $id } }] }
      limit: 1
    ) {
      items {
        headline
        meta
        contentCollection(limit: 20) {
          items {
            __typename
            ...sectionHeadline
            ...textAndImage
            ...text
            ...image
            ...imageSlider
            ...teaserSlider
            ...event
            ...longText
            ...accordion
            ...video
            ...instagram
            ...supporterLogo
            ...board
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

  fragment imageSlider on ImageSlider {
    imagesCollection(limit: 30) {
      items {
        description
        url
      }
    }
  }
  fragment teaserSlider on TeaserSlider {
    itemsCollection {
      items {
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
    }
  }

  fragment event on Event {
    name
    eventDescription {
      json
    }
    date
    location
    linkToMaps
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

  fragment instagram on Instagram {
    name
  }

  fragment supporterLogo on SupporterLogo {
    description {
      json
    }
    image {
      url
      description
      width
      height
    }
  }

  fragment board on Board {
    title
    memberCollection(limit: 10) {
      items {
        name
        role
        hideFromGoogle
        mail
      }
    }
  }
`;
