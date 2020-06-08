// @flow

import React from 'react';
import { Card, Icon } from "../index";
import styled from "styled-components";
import { colors } from "../../../styleSheet";

const Wrapper = styled(Card)`
  &:hover {
    background-color: ${colors.white};
    cursor: pointer;
  }
`;

type Props = {
  active: Boolean,
  iconName: String,
  onClick: Function
}

export default function Option({ active, iconName, onClick }: Props) {
  return (
    <Wrapper
      hasShadow={false}
      className="py-1 px-3 d-flex align-items-center mx-1"
      type={active ? 'white' : 'transparent'}
      onClick={onClick}
    >
      <Icon name={iconName} size={20} color={active ? 'secondary' : 'lightGray'}/>
    </Wrapper>
  );
}
