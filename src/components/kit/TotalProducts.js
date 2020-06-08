// @flow

import React from 'react';
import { Text } from "./index";
import styled from "styled-components";
import { colors } from "../../styleSheet";

const TotalProductsWrapper = styled.div`
  border-radius: 10px;
  background-color: ${colors.failure};
  padding: 5px 10px;
`;

type Props = {
  totalProducts: Number
}

export default function TotalProducts({ totalProducts }: Props) {
  return (
    <TotalProductsWrapper className="w-max">
      <Text color="white" className="px-1">{totalProducts}</Text>
      <Text color="white">product.product</Text>
    </TotalProductsWrapper>
  );
}
