import styled from 'styled-components';
import { colors } from "../../../styleSheet";

const RemovePhoto = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

export default RemovePhoto;
