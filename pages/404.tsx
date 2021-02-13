import React from "react";

import PageHeadline from "../components/PageHeadline";
import { mainColor } from "../styles/color";
export default function FourOhFour() {
  return (
    <PageHeadline backgroundColor={mainColor.red}>
      Da ist wohl etwas schief gelaufen...
    </PageHeadline>
  );
}
