import styled from "styled-components";
import { colors, typography } from "../../../styleSheet";

const Title = styled.span`
  color: ${props => props.error ? colors.failure : colors.lightGray};
  font-size: ${typography.input.fontSize};
  font-weight: ${typography.input.fontWeight};
  padding: 0 25px;
  opacity: ${props => (props.title || props.error) ? 1 : 0};
`;

export default Title;