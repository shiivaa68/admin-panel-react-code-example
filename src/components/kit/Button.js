import React from 'react';
import styled, { css } from 'styled-components';
import { colors, typography } from "../../styleSheet";

type Props = {
  size: 'lg' | 'sm',
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'failure' | 'disabled',
  filled?: boolean,
  disabled?: boolean
}

const setStyleFromSize = ({ size }) => {
  if (size === 'lg') {
    return css`
      height: 60px;
      border-radius: 30px;
      padding: 0 55px;
      font-size: ${typography.button.lg.fontSize};
      font-weight: ${typography.button.lg.fontWeight};
    `;
  }
  if (size === 'sm') {
    return css`
      height: 40px;
      border-radius: 20px;
      padding: 0 35px;
      font-size: ${typography.button.sm.fontSize};
      font-weight: ${typography.button.sm.fontWeight};
    `;
  }
};

const setStyleFromTypeAndFilled = ({ type, filled, disabled }) => {
  let color = colors[type];
  if (filled) {
    return css`
      background-color: ${color};
      color: ${colors.white};
      border: none;
      
      &:hover {
        background-color: ${disabled ? colors.disabled : colors[type + 'Hover']};
      }
    `;
  } else {
    return css`
      background-color: ${colors.transparent};
      color: ${colors.black};
      border: 2px solid ${color};
      
      &:hover {
        border-color: ${disabled ? colors.disabled : colors[type + 'Hover']};
      }
    `;
  }
};

const setDisableStyle = ({ disabled, filled }) => {
  if (disabled) {
    return css`
      background-color: ${filled ? colors.disabled : colors.white};
      color: ${colors.lightGray};
      border: ${filled ? 'none' : `1px solid ${colors.disabled}`};
      cursor: not-allowed;
    `;
  }
};

const StyledButton = styled.button`
  cursor: pointer;
  transition: all .5s;
  ${setStyleFromSize};
  ${setStyleFromTypeAndFilled};
  ${setDisableStyle};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:focus {
    outline: 0;
  }
`;

export default function Button({ children, ...props }: Props) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}
