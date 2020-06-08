// @flow

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styleSheet';

type Props = {
  value: Number,
  color?: String
};

const Wrapper = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background-color: ${colors.border};
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: ${props => props.value}%;
  position: absolute;
  background-color: ${props => colors[props.color] || colors.secondaryHover};
  top: 0;
  bottom: 0;
  transition: all .3s;
`;

export default function Progress(props: Props) {
  return (
    <Wrapper>
      <ProgressBar {...props}/>
    </Wrapper>
  );
}
