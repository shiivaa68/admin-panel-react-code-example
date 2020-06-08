// @flow

import React from 'react';
import styled from 'styled-components';
import { getImgUrl } from '../../utils';
import { colors } from '../../styleSheet';
import Icon from "./Icon";

const Image = styled.img`
  width: ${props => props.full ? '100%' : '50px'};
  height: ${props => props.full ? '100%' : '50px'};
  border-radius: ${props => props.rounded ? 50 : 0}px;  
`;

const EmptyImage = styled.div`
  width: ${props => props.full ? '100%' : '50px'};
  height: ${props => props.full ? '100%' : '50px'};
  border-radius: ${props => props.rounded ? 50 : 0}px;
  border: 1px solid ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  hash: String,
  alt: String,
  quality?: 500 | 1000,
  rounded?: Boolean,
  full?: Boolean
};

const Avatar = (props: Props) => {
  if (props.hash) {
    return <Image full={props.full} rounded={props.rounded} src={getImgUrl(props.hash, props.quality)}
                  alt={props.alt}/>;
  }
  return (
    <EmptyImage full={props.full} rounded={props.rounded}>
      <Icon name="user" size={20} color="lightGray"/>
    </EmptyImage>
  );
};

Avatar.defaultProps = {
  quality: 500,
  rounded: false
};

export default Avatar;

