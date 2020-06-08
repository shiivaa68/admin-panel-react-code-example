import styled from 'styled-components';
import { colors } from '../../../styleSheet';

const ChipsSelectWrapper = styled.div`
  width: 100%;
  margin: 15px 0;
  border-bottom: 1px solid
    ${props => (props.error ? colors.red : colors.lightGray)};
`;

export default ChipsSelectWrapper;
