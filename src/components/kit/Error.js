// @flow

import React from 'react';
import { Card, Text } from './';

type Props = {
  error: Object
};

export default function Error({ error }: Props) {
  return (
    <Card type="white" className="d-flex align-items-center justify-content-center w-100">
      <Text size="lg">{`error.${error.type}`}</Text>
    </Card>
  );
}
