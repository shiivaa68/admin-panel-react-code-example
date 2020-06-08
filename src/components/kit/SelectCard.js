// @flow
import React from 'react';
import { Card, Text, Radio, Icon } from './';
import styled from "styled-components";
import { colors } from "../../styleSheet";

type Props = {
  title: String,
  description: String,
  price: Number,
  onClick: Function,
  checked: Boolean,
  formName: String,
  id: Number,
  discount: Number,
  isDone: Boolean
};

const Wrapper = styled(Card)`
  height: 70px;
  border-color: ${props => colors[props.checked ? 'primary' : 'border']};
`;

export default function SelectCard({ title, formName, description, onClick, price, checked, id, discount, isDone }: Props) {
  return (
    <Wrapper hasShadow={false} hasBorder checked={checked} className="d-flex flex-column justify-content-center px-2">
      <div className="py-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-start">
          {
            isDone ? <Icon size={50} name="check-circle" color="secondaryHover"/> : <Radio
              className="m-0"
              name={formName}
              onClick={() => onClick({ target: { name: formName, value: id } })}
              checked={checked}
            />
          }

          <div className="px-2 d-flex justify-content-center flex-column">
            <Text bold>{title}</Text>
            <Text color="lightGray">{description}</Text>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Text>selectCard.shippingCost</Text>
          <Text>:</Text>
          <Text className="px-2">{Number(price).toLocaleString()}</Text>
          <Text>invoice.rial</Text>
          {
            discount ? <Card type="failure" hasShadow={false} className="ml-2 mr-2 p-1 pl-2 pr-2">
              <Text color="white">selectCard.postageDiscount</Text>
              <Text color="white">{discount || 0}</Text>
              <Text color="white">%</Text>
            </Card> : null
          }

        </div>
      </div>
    </Wrapper>
  );
}
