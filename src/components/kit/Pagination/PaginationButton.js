// @flow

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styleSheet';
import { Icon, Text } from '../';
import { breakpoints } from '../../../styleSheet'

const StyledPaginationButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => colors[props.active ? 'primary' : 'white']};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all .3s;
  border-color: ${colors.border};
  border-style: solid;
  border-width: ${props => props.hasBorder ? '0 .5px' : '0'};
  
  &:hover {
    background-color: ${colors.primaryHover};
    
    i, span {
      color: ${colors.white};
    }
  }
  
  @media (max-width: ${breakpoints.sm}px) {
    width: 30px !important;
    height: 30px !important;
  }
`;

type Props = {
  iconName?: String,
  iconSize?: Number,
  pageNumber?: String | Number,
  active?: Boolean,
  iconBold?: Boolean,
  hasBorder?: Boolean,
  onClick: Function,
  disabled?: Boolean
}

export default function PaginationButton(props: Props) {
  const { iconName, iconSize = 12, pageNumber, active, iconBold, hasBorder, onClick, disabled } = props;
  const activeColor = active ? 'white' : 'black';
  return (
    <StyledPaginationButton
      active={active}
      hasBorder={hasBorder}
      onClick={onClick}
      disabled={disabled}
    >
      {
        iconName ?
          <Icon name={iconName} size={iconSize} color={activeColor} bold={iconBold}/> :
          <Text color={activeColor}>{pageNumber}</Text>
      }
    </StyledPaginationButton>
  );
}
