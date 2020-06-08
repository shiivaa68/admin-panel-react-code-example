// @flow

import React from 'react';
import styled from 'styled-components';
import { colors } from "../../../styleSheet";

type Props = {
  onClick: Function,
  className: String,
  on: Boolean,
  disabled: Boolean
};

const setParentBackgroundColor = ({ on, disabled }) => {
  if (disabled) {
    return colors.disabled;
  } else {
    return on ? colors.primary : colors.border;
  }
};

const Parent = styled.div`
  position: relative;
  width: 70px;
  height: 40px;
  border-radius: 20px;
  border: none;
  transition: all .3s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background-color: ${setParentBackgroundColor};
`;

const Child = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  transition: all .3s;
  top: -1px;
  left: ${props => props.on ? 30 : 0}px;
  box-shadow: 0 15px 15px ${props => props.disabled ? 0 : '20px'} rgba(0, 0, 0, 0.05);
  background-color: ${props => props.disabled ? colors.lightGray : colors.white};
`;

export default function Toggle({ onClick, on, disabled }: Props) {
  return (
    <Parent onClick={disabled ? null : onClick} on={on} disabled={disabled}>
      <Child on={on} disabled={disabled}/>
    </Parent>
  );
}
