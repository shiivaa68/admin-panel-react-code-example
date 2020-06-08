import styled from "styled-components";
import { setIconWrapperPositionStyle } from "./inputStyles";

const IconWrapper = styled.div`
  position: absolute;
  top: 22px;
  ${setIconWrapperPositionStyle}: 15px;
  cursor: ${props => props.type === 'password' ? 'pointer' : 'default'};
  user-select: none;
  z-index: 100;
`;

export default IconWrapper;
