// @flow

import React from 'react';
import { Text } from './';

type Props = {
  title: String,
  value: String
};

export default function TitleValue(props: Props) {
  const { title, value } = props;

  return (
    <div>
      <Text size="smb" color="primary">{title}</Text>
      <Text>:</Text>
      <Text size="rg" color="secondary">{value}</Text>
    </div>
  );
}
