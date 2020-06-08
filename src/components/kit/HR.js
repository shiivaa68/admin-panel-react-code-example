import React from 'react';
import styled from 'styled-components';
import { colors } from "../../styleSheet";

const Divider = styled.hr`
  border-color: ${colors.border};
`;

export default function HR(props) {
  return <Divider {...props}/>;
}
