/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: imageSlider
// ====================================================

export interface imageSlider_imagesCollection_items {
  description: string | null;
  url: string | null;
}

export interface imageSlider_imagesCollection {
  items: (imageSlider_imagesCollection_items | null)[];
}

export interface imageSlider {
  imagesCollection: imageSlider_imagesCollection | null;
}
