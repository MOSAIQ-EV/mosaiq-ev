/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: image
// ====================================================

export interface image_image {
  url: string | null;
  description: string | null;
}

export interface image_description {
  json: ContentfulJSON;
}

export interface image_link_sys {
  id: string;
}

export interface image_link {
  sys: image_link_sys;
}

export interface image {
  image: image_image | null;
  description: image_description | null;
  link: image_link | null;
  small: boolean | null;
}
