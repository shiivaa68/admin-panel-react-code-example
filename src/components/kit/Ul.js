import styled from "styled-components";
import { colors } from "../../styleSheet";

export default styled.ul`
  color: ${props => colors[props.type]};
  list-style: disc ${props => props.listStylePosition || 'unset'};
`;
