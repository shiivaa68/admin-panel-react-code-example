import React from 'react';
import { Card, Text } from './';

type Props = {
  status: Number,
  colors: Array,
  text: String,
};

export default function Status(props: Props) {
  const { status, text, colors } = props;
  return (
    <Card type={colors[status]} className="px-4 py-1">
      <Text>{text}</Text>
    </Card>
  );
}
