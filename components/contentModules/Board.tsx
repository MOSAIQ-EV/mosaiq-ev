import React from "react";

import { PageContent_pageCollection_items_contentCollection_items_Board } from "../../generated/PageContent";
import BoardMember from "../BoardMember";
import LongText from "./LongText";
export default function Board({
  memberCollection,
  title,
  backgroundColor,
}: PageContent_pageCollection_items_contentCollection_items_Board & {
  backgroundColor: string;
}) {
  return (
    <LongText
      __typename="LongText"
      text={null}
      backgroundColor={backgroundColor}
    >
      <h1>{title}</h1>
      {memberCollection.items?.map((m) => (
        <BoardMember key={m.name} {...m} />
      ))}
    </LongText>
  );
}
