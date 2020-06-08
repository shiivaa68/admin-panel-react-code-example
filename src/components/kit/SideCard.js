// @flow
import React from 'react';
import { Card, Row, Col, HeaderTitle, Text, Tooltip } from '../kit';

type Props = {
  graySideContent: String,
  whiteSideContent: String,
};
export default (props: Props) => {
  const id = `whiteSideContent${new Date().getMilliseconds()}`;
  return (
    <Card type="white" className="overflow-hidden">
      <Row className="d-flex justify-content-between">
        <Col xs={6} className="d-flex align-items-center justify-content-center w-100 px-0">
          <Card hasShadow={false} className="py-5 w-100 h-100" type="grayBackground" hasRadius={false}>
            <HeaderTitle
              gap={false}
              titleType="span"
              titleSize="rg"
              title={props.graySideContent}
              titleColor="lightGray"
              badgeTitle="kits.temporaryBadge"
            />
          </Card>
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center w-100 px-0">
          <Card hasShadow={false} className="py-5 d-flex justify-content-center w-100 h-100" type="white">
            <Tooltip target={id}>
              {Number(props.whiteSideContent).toLocaleString()}
            </Tooltip>
            <Text
              id={id}
              className="text-hidden px-4"
              bold
              size="md"
              direction="ltr"
            >
              {Number(props.whiteSideContent).toLocaleString()}
            </Text>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
