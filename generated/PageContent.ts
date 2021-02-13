/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageContent
// ====================================================

export interface PageContent_pageCollection_items_contentCollection_items_SectionHeadline {
  __typename: "SectionHeadline";
  headline: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_TextAndImage_text {
  json: ContentfulJSON;
}

export interface PageContent_pageCollection_items_contentCollection_items_TextAndImage_image {
  url: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_TextAndImage_link_sys {
  id: string;
}

export interface PageContent_pageCollection_items_contentCollection_items_TextAndImage_link {
  sys: PageContent_pageCollection_items_contentCollection_items_TextAndImage_link_sys;
}

export interface PageContent_pageCollection_items_contentCollection_items_TextAndImage_document {
  url: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_TextAndImage {
  __typename: "TextAndImage";
  text: PageContent_pageCollection_items_contentCollection_items_TextAndImage_text | null;
  image: PageContent_pageCollection_items_contentCollection_items_TextAndImage_image | null;
  link: PageContent_pageCollection_items_contentCollection_items_TextAndImage_link | null;
  document: PageContent_pageCollection_items_contentCollection_items_TextAndImage_document | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Text_text {
  json: ContentfulJSON;
}

export interface PageContent_pageCollection_items_contentCollection_items_Text_link_sys {
  id: string;
}

export interface PageContent_pageCollection_items_contentCollection_items_Text_link {
  sys: PageContent_pageCollection_items_contentCollection_items_Text_link_sys;
}

export interface PageContent_pageCollection_items_contentCollection_items_Text_document {
  url: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Text {
  __typename: "Text";
  text: PageContent_pageCollection_items_contentCollection_items_Text_text | null;
  link: PageContent_pageCollection_items_contentCollection_items_Text_link | null;
  document: PageContent_pageCollection_items_contentCollection_items_Text_document | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Image_image {
  url: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Image_description {
  json: ContentfulJSON;
}

export interface PageContent_pageCollection_items_contentCollection_items_Image_link_sys {
  id: string;
}

export interface PageContent_pageCollection_items_contentCollection_items_Image_link {
  sys: PageContent_pageCollection_items_contentCollection_items_Image_link_sys;
}

export interface PageContent_pageCollection_items_contentCollection_items_Image {
  __typename: "Image";
  image: PageContent_pageCollection_items_contentCollection_items_Image_image | null;
  description: PageContent_pageCollection_items_contentCollection_items_Image_description | null;
  link: PageContent_pageCollection_items_contentCollection_items_Image_link | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser_image {
  url: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser_page_sys {
  id: string;
}

export interface PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser_page {
  headline: string | null;
  sys: PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser_page_sys;
}

export interface PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser {
  __typename: "SliderTeaser";
  image: PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser_image | null;
  page: PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser_page | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderImage_image {
  url: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderImage {
  __typename: "SliderImage";
  image: PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderImage_image | null;
}

export type PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items = PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderTeaser | PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items_SliderImage;

export interface PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection {
  items: (PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection_items | null)[];
}

export interface PageContent_pageCollection_items_contentCollection_items_Slider {
  __typename: "Slider";
  itemsCollection: PageContent_pageCollection_items_contentCollection_items_Slider_itemsCollection | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Event {
  __typename: "Event";
  name: string | null;
  eventDescription: string | null;
  date: ContentfulDateTime | null;
  location: string | null;
  highlight: boolean | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_LongText_text {
  json: ContentfulJSON;
}

export interface PageContent_pageCollection_items_contentCollection_items_LongText {
  __typename: "LongText";
  text: PageContent_pageCollection_items_contentCollection_items_LongText_text | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Accordion_text {
  json: ContentfulJSON;
}

export interface PageContent_pageCollection_items_contentCollection_items_Accordion {
  __typename: "Accordion";
  headline: string | null;
  text: PageContent_pageCollection_items_contentCollection_items_Accordion_text | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Video {
  __typename: "Video";
  url: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Board_memberCollection_items_image {
  url: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Board_memberCollection_items {
  image: PageContent_pageCollection_items_contentCollection_items_Board_memberCollection_items_image | null;
  name: string | null;
  role: string | null;
  email: string | null;
}

export interface PageContent_pageCollection_items_contentCollection_items_Board_memberCollection {
  items: (PageContent_pageCollection_items_contentCollection_items_Board_memberCollection_items | null)[];
}

export interface PageContent_pageCollection_items_contentCollection_items_Board {
  __typename: "Board";
  memberCollection: PageContent_pageCollection_items_contentCollection_items_Board_memberCollection | null;
}

export type PageContent_pageCollection_items_contentCollection_items = PageContent_pageCollection_items_contentCollection_items_SectionHeadline | PageContent_pageCollection_items_contentCollection_items_TextAndImage | PageContent_pageCollection_items_contentCollection_items_Text | PageContent_pageCollection_items_contentCollection_items_Image | PageContent_pageCollection_items_contentCollection_items_Slider | PageContent_pageCollection_items_contentCollection_items_Event | PageContent_pageCollection_items_contentCollection_items_LongText | PageContent_pageCollection_items_contentCollection_items_Accordion | PageContent_pageCollection_items_contentCollection_items_Video | PageContent_pageCollection_items_contentCollection_items_Board;

export interface PageContent_pageCollection_items_contentCollection {
  items: (PageContent_pageCollection_items_contentCollection_items | null)[];
}

export interface PageContent_pageCollection_items {
  headline: string | null;
  contentCollection: PageContent_pageCollection_items_contentCollection | null;
}

export interface PageContent_pageCollection {
  items: (PageContent_pageCollection_items | null)[];
}

export interface PageContent {
  pageCollection: PageContent_pageCollection | null;
}

export interface PageContentVariables {
  name: string;
  id: string;
}
