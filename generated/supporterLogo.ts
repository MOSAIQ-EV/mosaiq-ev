/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: supporterLogo
// ====================================================

export interface supporterLogo_description {
  json: ContentfulJSON;
}

export interface supporterLogo_image {
  url: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
}

export interface supporterLogo {
  description: supporterLogo_description | null;
  image: supporterLogo_image | null;
}
