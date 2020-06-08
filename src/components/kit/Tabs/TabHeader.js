// @flow

import React from 'react';
import TabTitle from "./TabTitle";
import styled from "styled-components";
import { colors } from "../../../styleSheet";

const Wrapper = styled.div`
  border-bottom: 1px solid ${colors.border};
`;

type Props = {
  titles: Array,
  tabIndex: Number,
  setIndex: Function
};

export default function TabHeader({ titles, tabIndex, setIndex }: Props) {
  return (
    <Wrapper className="w-100 py-2 d-flex flex-column flex-sm-row align-items-center justify-content-center user-select-none">
      {titles.map((title, index) => (
        <TabTitle
          key={index}
          iconName={title.iconName}
          text={title.text}
          active={tabIndex === index}
          onClick={() => setIndex(index)}
        />
      ))}
    </Wrapper>
  );
}
