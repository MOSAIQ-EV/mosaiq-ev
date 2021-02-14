/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: sliderTeaser
// ====================================================

export interface sliderTeaser_image {
  url: string | null;
  description: string | null;
}

export interface sliderTeaser_page_sys {
  id: string;
}

export interface sliderTeaser_page {
  headline: string | null;
  sys: sliderTeaser_page_sys;
}

export interface sliderTeaser {
  image: sliderTeaser_image | null;
  page: sliderTeaser_page | null;
}
