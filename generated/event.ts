/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: event
// ====================================================

export interface event_eventDescription {
  json: ContentfulJSON;
}

export interface event {
  name: string | null;
  eventDescription: event_eventDescription | null;
  date: ContentfulDateTime | null;
  location: string | null;
  linkToMaps: boolean | null;
  highlight: boolean | null;
}
