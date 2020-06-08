import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styleSheet';
// import { appLoadingLogo, appLoadingLogoEn } from '../../assets/images';
import { Spinner } from '../kit';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
`;

function AppLoading({ language }) {
  // const src = language.detector === 'fa' ? appLoadingLogo : appLoadingLogoEn;

  return (
    <Wrapper>
      {/*<img src={src} alt="biz-logo" className="mb-4"/>*/}
      <Spinner size="100" color="white"/>
    </Wrapper>
  );
}

export default connect(
  state => ({
    language: state.language
  })
)(AppLoading);
