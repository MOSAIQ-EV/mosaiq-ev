/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: text
// ====================================================

export interface text_text_links_assets_block {
  url: string | null;
}

export interface text_text_links_assets {
  block: (text_text_links_assets_block | null)[];
}

export interface text_text_links {
  assets: text_text_links_assets;
}

export interface text_text {
  json: ContentfulJSON;
  links: text_text_links;
}

export interface text_link_sys {
  id: string;
}

export interface text_link {
  sys: text_link_sys;
}

export interface text_document {
  url: string | null;
}

export interface text {
  text: text_text | null;
  link: text_link | null;
  document: text_document | null;
}
