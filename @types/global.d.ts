import { Document } from "@contentful/rich-text-types";
declare global {
  type ContentfulDateTime = string;
  type ContentfulJSON = Document;
}
