/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: textAndImage
// ====================================================

export interface textAndImage_text {
  json: ContentfulJSON;
}

export interface textAndImage_image {
  url: string | null;
}

export interface textAndImage_link_sys {
  id: string;
}

export interface textAndImage_link {
  sys: textAndImage_link_sys;
}

export interface textAndImage_document {
  url: string | null;
}

export interface textAndImage {
  text: textAndImage_text | null;
  image: textAndImage_image | null;
  link: textAndImage_link | null;
  document: textAndImage_document | null;
}
