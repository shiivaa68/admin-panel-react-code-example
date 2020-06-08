// @flow
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styleSheet';
import { Text } from '../';

const Label = styled.label`
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${props => (props.disabled ? colors.lightGray : colors.black)};
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  transition: all 0.3s;

  &:checked ~ div > div:after {
    opacity: 1;
  }
`;

const setBorderColor = ({ checked, disabled }) => {
  if (checked && disabled) {
    return colors.lightGray;
  } else if (checked && !disabled) {
    return colors.primary;
  } else {
    return colors.white;
  }
};

const CheckMarkWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  margin: 0 5px;
`;

const CheckMark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  background-color: ${props =>
    props.disabled ? colors.disabled : colors.white};

  :after {
    content: '';
    position: absolute;
    opacity: 0;
    left: 9px;
    top: -2px;
    width: 10px;
    height: 23px;
    border: solid ${setBorderColor};
    border-width: 0 2px 3px 0;
    transform: rotate(45deg);
    transition: all 0.5s;
  }
`;

type Props = {
  titleElement?: Element,
  title?: String,
  checked: Boolean,
  disabled?: Boolean,
  wrapperClassName?: String,
  onClick: Function,
};

export default function CheckBox(props: Props) {
  const {
    title,
    titleElement,
    checked,
    disabled,
    onClick,
    wrapperClassName,
  } = props;
  return (
    <Label
      disabled={disabled}
      className={`${wrapperClassName} user-select-none`}
    >
      <Input type="checkbox" checked={checked} disabled={disabled} />
      <CheckMarkWrapper onClick={onClick}>
        <CheckMark disabled={disabled} checked={checked} />
      </CheckMarkWrapper>
      {title ? <Text>{title}</Text> : null}
      {titleElement ? titleElement : null}
    </Label>
  );
}
