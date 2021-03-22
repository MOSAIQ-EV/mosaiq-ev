/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: board
// ====================================================

export interface board_memberCollection_items {
  name: string | null;
  role: string | null;
  hideFromGoogle: boolean | null;
  mail: string | null;
}

export interface board_memberCollection {
  items: (board_memberCollection_items | null)[];
}

export interface board {
  title: string | null;
  memberCollection: board_memberCollection | null;
}
