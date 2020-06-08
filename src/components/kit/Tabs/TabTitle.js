// @flow

import React from 'react';
import { Text, Icon } from '../';

type Props = {
  iconName: String,
  iconSize?: Number,
  text: String,
  active: Number,
  onClick: Function
};

export default function TabTitle({ iconName, iconSize = 22, text, active, onClick }: Props) {
  const size = active ? 'smb' : 'sm';
  const color = active ? 'black' : 'lightGray';

  return (
    <div
      className={`d-flex flex-row align-items-center justify-content-center py-2 px-2 px-sm-2 py-sm-0 px-md-4 
                  py-md-0 pointer`}
      onClick={onClick}
    >
      <Icon color={color} className="px-1" name={iconName} size={iconSize}/>
      <Text className="px-1" color={color} size={size}>{text}</Text>
    </div>
  );
}
