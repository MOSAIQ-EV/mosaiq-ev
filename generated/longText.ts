/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: longText
// ====================================================

export interface longText_text_links_assets_block {
  url: string | null;
}

export interface longText_text_links_assets {
  block: (longText_text_links_assets_block | null)[];
}

export interface longText_text_links {
  assets: longText_text_links_assets;
}

export interface longText_text {
  json: ContentfulJSON;
  links: longText_text_links;
}

export interface longText {
  text: longText_text | null;
}
