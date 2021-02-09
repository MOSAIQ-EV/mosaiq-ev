import React, { ReactNode } from "react";
import styled from "styled-components";

import { maxWidth, sectionPadding } from "../styles/mixins";

const Section = styled.section`
  position: relative;
  ${sectionPadding}
`;

const Content = styled.div`
  ${maxWidth}
`;

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ContentSection({ children, className }: Props) {
  return (
    <Section className={className}>
      <Content>{children}</Content>
    </Section>
  );
}
