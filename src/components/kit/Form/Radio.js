import React from 'react';
import styled from 'styled-components';
import { Text } from "../";
import { colors } from "../../../styleSheet";

const Label = styled.label`
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all .3s;
  overflow: auto;
  color: ${props => props.disabled ? colors.lightGray : colors.black};
  
  input:checked ~ div > div:after {
    opacity: 1;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

const setBackgroundColor = ({ checked, disabled }) => {
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
  border: 1px solid ${colors.border};
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: ${props => props.disabled ? colors.disabled : colors.white};
  border-radius: 50%;
  transition: all .3s;
  
  &:after {
    content: "";
    position: absolute;
    opacity: 0;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${setBackgroundColor};
    transition: all .3s;
  }
`;

export default function Radio({ title, name, checked, disabled, className, onClick }) {
  return (
    <Label disabled={disabled} className={`${className} user-select-none`}>
      <Input type="radio" name={name} checked={checked} disabled={disabled} onClick={onClick} />
      <CheckMarkWrapper>
        <CheckMark checked={checked} disabled={disabled}/>
      </CheckMarkWrapper>
      {title ? <Text type="span">{title}</Text> : null}
    </Label>
  );
}
