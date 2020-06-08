import styled from 'styled-components';
import { colors } from '../../../styleSheet';

const Li = styled.li`
  border-bottom: 1px solid ${colors.gray};
  &:last-child {
    border: none;
  }
`;

export default Li;
