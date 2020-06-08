// @flow

import React from 'react';

type Props = {
  step: Number,
  children: Element
}

export default function Step({ children }: Props) {
  return <>{children}</>;
}
