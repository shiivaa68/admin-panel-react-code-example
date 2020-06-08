import React from 'react';
import { Col } from 'reactstrap';
import { Card, DateTime, Text, Image } from '../../kit';

type Props = {
  caption: String,
  hash: String,
  alt: String,
  datetime: String
}

export default function PostImage(props: Props) {
  const { alt, hash, caption, datetime } = props;
  const captionText = caption || 'post.noCaption';

  return (
    <Col xs={12} sm={6} className="py-2">
      <Card type="grayBackground" className="w-100 d-flex" hasShadow={false} hasBorder>
        <Card className="overflow-hidden d-flex align-items-center flex-column w-100">
          <Image alt={alt} hash={hash} className="img-fluid"/>
          <Card className="w-100 overflow-hidden d-flex flex-column p-3" type="primary" hasRadius={false}
                hasShadow={false}>
            <Text className="px-1" color="white" size="sm">{captionText}</Text>
            <DateTime className="px-1" color="white">{datetime}</DateTime>
          </Card>
        </Card>
      </Card>
    </Col>
  );
};



