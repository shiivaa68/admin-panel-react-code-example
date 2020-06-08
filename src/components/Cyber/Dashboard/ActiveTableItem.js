import React from 'react';
import { Text, Row, Col, Icon } from "../../kit";

export default function ActiveTableItem({ title, thisMonth, lastMonth }) {
  const isGreater = (thisMonth || 0) - (lastMonth || 0) > 0;
  const color = isGreater ? 'secondaryHover' : 'failure';

  return (
    <Row>
      <Col xs={12} sm={12} md={10} lg={8} xl={6}>
        <Row className="d-flex justify-content-between">
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <Text color="gray">{title}</Text>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <Text>{Number(thisMonth).toLocaleString()}</Text>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <Text color={color}>
              {Math.abs(thisMonth - lastMonth).toLocaleString()}
            </Text>
          </Col>
          <Col xl={1} lg={1} md={1} sm={12} xs={12}>
            <Icon
              name={`triangle-${isGreater ? 'up' : 'down'}`}
              color={color}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={2} lg={4} xl={6}/>
    </Row>
  );
}
