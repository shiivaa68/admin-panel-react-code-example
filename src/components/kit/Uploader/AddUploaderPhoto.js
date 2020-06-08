// @flow

import React from 'react';
import { Icon, Text } from '../';
import UploaderWrapper from './UploaderWrapper';

type Props = {
  onAdd: Function,
  addText: String
};

export default function AddUploaderPhoto(props: Props) {
  const { onAdd, addText } = props;

  return (
    <UploaderWrapper onClick={onAdd} className="pointer">
      <Icon name="add" size={22} color="gray" className="mb-1"/>
      <Text className="mt-1" color="gray">{addText}</Text>
    </UploaderWrapper>
  );
}
