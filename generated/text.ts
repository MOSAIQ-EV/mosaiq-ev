/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: text
// ====================================================

export interface text_text {
  json: ContentfulJSON;
}

export interface text_link_sys {
  id: string;
}

export interface text_link {
  sys: text_link_sys;
}

export interface text {
  text: text_text | null;
  link: text_link | null;
}
