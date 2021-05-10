/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: accordion
// ====================================================

export interface accordion_text_links_assets_block {
  url: string | null;
}

export interface accordion_text_links_assets {
  block: (accordion_text_links_assets_block | null)[];
}

export interface accordion_text_links {
  assets: accordion_text_links_assets;
}

export interface accordion_text {
  json: ContentfulJSON;
  links: accordion_text_links;
}

export interface accordion {
  headline: string | null;
  text: accordion_text | null;
}
