// @flow

import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import loadingLottie from '../../assets/loading-lottie';
import { Card } from '../kit';

const LoadingWrapper = styled(Card)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: ${props => props.loading ? props.inside ? 'relative' : 'fixed' : 'unset'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.loading ? 'rgba(0, 0, 0, .1)' : 'rgba(0, 0, 0, 0)'};
  z-index: 99999999;
  transition: all .5s;
`;

type Props = {
  loading: Boolean,
  inside?: Boolean
};

export default function Loading(props: Props) {
  const { loading, children, className, loadingClassName, inside = false, ...restProps } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div
      className={loading ? loadingClassName + " position-relative" : ' ' + className}
      {...restProps}
    >
      {children}
      <LoadingWrapper loading={loading} hasShadow={false} inside={inside}>
        {
          loading ?
            <Lottie
              options={defaultOptions}
              height={100}
              width={100}
              isStopped={false}
              isPaused={false}
              style={{ zIndex: 999999 }}
            /> : null
        }
      </LoadingWrapper>
    </div>
  );
}
