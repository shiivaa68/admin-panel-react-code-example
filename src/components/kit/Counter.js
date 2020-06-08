// @flow
import React from 'react';
import { Icon, Text } from './';
import styled from "styled-components";
import { colors } from "../../styleSheet";

const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: ${colors.transparent};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
`;

type Props = {
  add: Function,
  remove: Function,
  count: Number,
};

export default ({ add, remove, count }: Props) => {
  return (
    <div className="d-flex align-items-center justify-content-center user-select-none px-2 py-3">
      <Button onClick={add}>
        <Icon name="small-add" size={25} bold color="success"/>
      </Button>
      <Text className="px-2" size="smb">{count}</Text>
      <Button onClick={remove} disabled={count === 0}>
        <Icon name="small-delete" size={25} bold color="failure"/>
      </Button>
    </div>
  );
}
