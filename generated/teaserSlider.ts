/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: teaserSlider
// ====================================================

export interface teaserSlider_itemsCollection_items_image {
  url: string | null;
  description: string | null;
}

export interface teaserSlider_itemsCollection_items_page_sys {
  id: string;
}

export interface teaserSlider_itemsCollection_items_page {
  headline: string | null;
  sys: teaserSlider_itemsCollection_items_page_sys;
}

export interface teaserSlider_itemsCollection_items {
  image: teaserSlider_itemsCollection_items_image | null;
  page: teaserSlider_itemsCollection_items_page | null;
}

export interface teaserSlider_itemsCollection {
  items: (teaserSlider_itemsCollection_items | null)[];
}

export interface teaserSlider {
  itemsCollection: teaserSlider_itemsCollection | null;
}
