import React, { ReactNode } from "react";
import { Collapse as ReactCollapse } from "react-collapse";
import { createGlobalStyle } from "styled-components";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const CollapseStyle = createGlobalStyle`
  .ReactCollapse--collapse {
    transition: height 300ms;
  }
`;

export const Collapse = ({ isOpen, children }: Props) => {
  return (
    <>
      <CollapseStyle />
      <ReactCollapse isOpened={isOpen}>{children}</ReactCollapse>
    </>
  );
};
