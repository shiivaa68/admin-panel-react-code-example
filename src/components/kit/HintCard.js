// @flow

import React from 'react';
import { Card, Col, Row } from "./";
import styled, { css } from "styled-components";

type Props = {
  image: String,
  aside: Element,
  article: Element
};

const Wrapper = styled.div`
  min-height: 500px;
  ${props => props.image ? css`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  ` : null};
`;

export default function HintCard({ article, aside, image }: Props) {
  return (
    <Card type="white" className="w-100 h-100 overflow-hidden">
      <Row className="w-100 m-0">
        <Col xs={12} sm={12} md={5} lg={5} xl={5} className="p-0">
          <Wrapper image={image} className="h-100">
            {aside}
          </Wrapper>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} xl={7}>
          <Wrapper className="h-100">
            {article}
          </Wrapper>
        </Col>
      </Row>
    </Card>
  );
}
