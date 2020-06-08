// @flow

import React from 'react';
import { getImgUrl } from "../../utils";

type Props = {
  alt: String,
  src?: String,
  quality?: 500 | 1000,
  hash?: String
};

Image.defaultProps = {
  quality: 500
};

export default function Image(props: Props) {
  const { alt, src, hash, quality, ...restProps } = props;
  const source = hash ? getImgUrl(hash, quality) : src;

  return (
    <img alt={alt} src={source} {...restProps} />
  );
};
