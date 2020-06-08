import styled from 'styled-components';
import { colors } from "../../../styleSheet";

const handleRadius = ({ direction }) => {
  if (direction === 'rtl') {
    return '0 50% 50% 0';
  } else {
    return '50% 0 0 50%';
  }
};

export default styled.div`
  width: 15px;
  height: 100%;
  border-radius: ${handleRadius};
  background-color: ${props => colors[props.status]};
`;
