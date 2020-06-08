// @flow

import React from 'react';
import { Icon, Image, Text } from '../';
import RemovePhoto from './RemovePhoto';
import UploaderWrapper from './UploaderWrapper';

type Props = {
  src: String,
  onRemovePhoto: Function
};

export default function UploaderPhoto(props: Props) {
  const { src, onRemovePhoto } = props;

  return (
    <UploaderWrapper>
      <Image src={src} alt="upload" className="h-100"/>
      <RemovePhoto onClick={onRemovePhoto} className="pointer">
        <Icon className="px-1" name="delete" size={15} color="white"/>
        <Text color="white">uploader.remove</Text>
      </RemovePhoto>
    </UploaderWrapper>
  );
}
