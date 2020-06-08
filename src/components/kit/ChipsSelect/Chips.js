// @flow

import React from 'react';
import { Card, Text, Icon } from '../';

type Props = {
  data: Array,
  onRemove: Function,
};

export default function Chips(props: Props) {
  const { onRemove, data } = props;

  const handleClick = (e, select) => {
    e.stopPropagation();
    onRemove(select);
  };

  return (
    <div
      className="d-flex pb-2 flex-nowrap overflow-auto"
      onClick={e => e.stopPropagation()}
    >
      {data.map((select, i) => (
        <Card
          key={i}
          hasBorder
          borderColor="lighterGray"
          className="d-flex align-self-center justify-content-between p-1 w-max ml-2"
          hasShadow={false}
          type="white"
        >
          <Text className="px-2 w-max">{select.name}</Text>
          <Icon
            name="close"
            className="d-flex align-self-center pointer"
            size={18}
            color="lightGray"
            onClick={e => handleClick(e, select)}
          />
        </Card>
      ))}
    </div>
  );
}
