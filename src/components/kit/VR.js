// @flow
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styleSheet';


const Divider = styled.div`
  width: ${props => props.width || 2}px;
  height: 100%;
  padding: ${props => props.padding}px 0;
  background-color: ${colors.border};
  align-self: center;
  justify-content: center;
`;

type Props = {};

export default (props: Props) => {
  return <Divider {...props}/>
};
