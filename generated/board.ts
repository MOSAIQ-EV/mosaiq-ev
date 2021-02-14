/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: board
// ====================================================

export interface board_memberCollection_items_image {
  url: string | null;
  description: string | null;
}

export interface board_memberCollection_items {
  image: board_memberCollection_items_image | null;
  name: string | null;
  role: string | null;
  email: string | null;
}

export interface board_memberCollection {
  items: (board_memberCollection_items | null)[];
}

export interface board {
  memberCollection: board_memberCollection | null;
}
