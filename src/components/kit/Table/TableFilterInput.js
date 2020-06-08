// @flow

import React from 'react';
import { getQueryParam } from '../../../utils';
import { TextInput } from '../';
import styled from 'styled-components';

type Props = {
  onChange: Function,
  filter: Object,
  param: String
}

const CustomTextInput = styled(TextInput)`
  height: 35px;
`;

export default function TableFilterInput({ onChange, filter, param }: Props) {
  return (
    <CustomTextInput
      showTitle={false}
      onChange={e => onChange(e.target.value)}
      value={filter ? filter.value : getQueryParam(param)}
    />
  )
}
