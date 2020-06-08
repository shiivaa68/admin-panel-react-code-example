// @flow

import React from 'react';
import { getQueryParam, history, setNewQueryParams } from '../../../utils';

type Props = {
  data: Array,
  titleSelector?: String,
  valueSelector?: String,
  hasGeneral?: Boolean,
  value: String,
  onChange: Function,
  param: String,
  filter: Object,
};

TableFilterSelect.defaultProps = {
  titleSelector: 'title',
  valueSelector: 'value',
  hasGeneral: true,
};

export default function TableFilterSelect(props: Props) {
  const {
    data,
    titleSelector,
    valueSelector,
    hasGeneral,
    onChange,
    param,
    filter,
  } = props;

  const selectValue = filter ? filter.value : getQueryParam(param);

  const handleChange = e => {
    if (e.target.value === 'generalValue') {
      const queryParams = getQueryParam();
      delete queryParams[param];
      history.push(
        `${history.location.pathname}?${setNewQueryParams(queryParams)}`
      );
      onChange();
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <select onChange={handleChange} value={selectValue}>
      {hasGeneral ? <option value="generalValue">-</option> : null}
      {data.map((item, i) => (
        <option value={valueSelector ? item[valueSelector] : item} key={i}>
          {titleSelector ? item[titleSelector] : item}
        </option>
      ))}
    </select>
  );
}
