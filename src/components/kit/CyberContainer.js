import styled from 'styled-components';
import { breakpoints } from "../../styleSheet";

const CyberContainer = styled.div`
  width: calc(100% - ${props => props.navWidth});
  margin-right: ${props => props.navWidth.replace('px', '') -5}px;
  margin-top: 64px;
  transition: all .3s;
  padding: 10px;
  
  @media (max-width: ${breakpoints.lg - 1}px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export default CyberContainer;
