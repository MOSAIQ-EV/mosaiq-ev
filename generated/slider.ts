/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: slider
// ====================================================

export interface slider_itemsCollection_items_SliderTeaser_image {
  url: string | null;
}

export interface slider_itemsCollection_items_SliderTeaser_page_sys {
  id: string;
}

export interface slider_itemsCollection_items_SliderTeaser_page {
  headline: string | null;
  sys: slider_itemsCollection_items_SliderTeaser_page_sys;
}

export interface slider_itemsCollection_items_SliderTeaser {
  __typename: "SliderTeaser";
  image: slider_itemsCollection_items_SliderTeaser_image | null;
  page: slider_itemsCollection_items_SliderTeaser_page | null;
}

export interface slider_itemsCollection_items_SliderImage_image {
  url: string | null;
}

export interface slider_itemsCollection_items_SliderImage {
  __typename: "SliderImage";
  image: slider_itemsCollection_items_SliderImage_image | null;
}

export type slider_itemsCollection_items = slider_itemsCollection_items_SliderTeaser | slider_itemsCollection_items_SliderImage;

export interface slider_itemsCollection {
  items: (slider_itemsCollection_items | null)[];
}

export interface slider {
  itemsCollection: slider_itemsCollection | null;
}
