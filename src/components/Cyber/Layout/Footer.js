import React from 'react';
import { Text } from '../../kit';
import styled from 'styled-components';
import { breakpoints, colors } from '../../../styleSheet';

const StyledFooter = styled.footer`
  width: calc(100% - ${props => props.navWidth});
  min-height: 70px;
  background-color: ${colors.black};
  position: fixed;
  bottom: 0;
  left: 0;
  transition: all .3s;
  z-index: 99;
  
  @media (max-width: ${breakpoints.lg - 1}px) {
    width: 100%;
  }
`;

export default function Footer({ navWidth }) {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center text-center" navWidth={navWidth}>
      <Text>footer.copyright</Text>
    </StyledFooter>
  );
}
