// @flow

import React from 'react';
import styled from "styled-components";
import { colors } from "../../styleSheet";

type Props = {
  name: String,
  size?: Number,
  className?: String,
  color?: String,
  bold?: Boolean,
  useDirection?: Boolean,
  children?: String,
  type?: String
};

const StyledIcon = styled.i`
  font-size: ${props => props.size || 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'}!important;
  transition: all .3s;
  color: ${props => colors[props.color]};
`;

export default function Icon({ name, className, color = 'black', useDirection, children, type = 'biz', ...restProps }: Props) {
  return (
    <StyledIcon
      className={
        type === 'biz' ? `biz biz-${name} ${className || ''} ${useDirection ? 'icon-dir' : null}`
        : `icon icon-${name} ${className || ''} ${useDirection ? 'icon-dir' : null}`
      }
      color={color}
      dir="ltr"
      {...restProps}
    >{children}</StyledIcon>
  );
}
