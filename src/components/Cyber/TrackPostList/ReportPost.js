// @flow

import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Card, Select, Text } from '../../kit';

type Props = {
  handleStatusChange: Function,
  onReasonChange: Function,
  text: String,
};

export default function ReportPost(props: Props) {
  const { handleStatusChange, onReasonChange, text } = props;

  return (
    <Card hasShadow={false} hasRadius={false} height="400px">
      <Container>
        <Row>
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center "
          >
            <Text color="red">{text}</Text>
          </Col>

          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center"
            style={{ zIndex: 9999 }}
          >
            <Select
              name="st"
              data={[
                { name: 'تایید شده', value: 1 },
                { name: 'رد شده', value: 4 },
                {
                  name: 'در حال بررسی',
                  value: 0,
                },
              ]}
              placeholder="panel.placeHolder.placeHolderPost"
              onChange={handleStatusChange}
              valueSelector="value"
              titleSelector="name"
            />
          </Col>
          <Col>
            <Select
              name="dc"
              data={[
                '_',
                'تصویر نامناسب',
                'محتوای نامناسب',
                'تصویر غیر مرتبط',
                'انتخاب دسته نامرتبط',
                'پست تکراری',
              ]}
              placeholder="panel.placeHolder.placeHolderRejectPost"
              onChange={onReasonChange}
              optionalInput
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
