import React from 'react';

type Props = {
  list: String,
  name: String,
  id: String,
  option: String,
}
export default function DataList(props: Props) {
  const { list, name, id, option } = props;
  return (
    <div>
      <input type="text" list={list} name={name} autoComplete="off"
             className="form-control underline"/>
      <datalist id={id} style="float:left;">
        <option>{option}</option>
      </datalist>
    </div>
  );
}














