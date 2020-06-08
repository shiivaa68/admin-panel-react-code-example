// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import styled, { css } from "styled-components";
import { colors, typography } from "../../styleSheet";

type Props = {
  children: String,
  bold: Boolean,
  color: 'black' | 'gray' | 'lightGray' | 'disabled' | 'white' | 'primary' | 'secondary',
  type: String,
  size: 'lg' | 'md' | 'sm' | 'rg',
  direction: String
};

const Text = (
  {
    children,
    t,
    type = "span",
    i18n,
    lng,
    i18nOptions,
    tReady,
    defaultNS,
    reportNS,
    color,
    direction,
    ...restProps
  }: Props
) => {
  let dir = direction || 'rtl';
  let translatedText = children;
  if (i18n) {
    dir = direction ? direction :
      i18n.language === 'fa' || i18n.language === 'ar' || i18n.language === 'af' ? 'rtl' : 'ltr';
    translatedText = children === ":" ? children : t(children);
  }
  return React.createElement(type, { ...restProps, dir }, translatedText);
};

const setTypography = ({ size = 'rg' }) => {
  return css`
    font-size: ${typography[size].fontSize};
    font-weight: ${typography[size].fontWeight};
  `;
};

const setWeight = ({ bold }) => {
  if (bold) {
    return css`
      font-weight: bold;
    `;
  }
};

const setColor = ({ color = 'black' }) => colors[color];

const StyledText = styled(Text)`
  color: ${setColor};
  ${setTypography};
  margin: 0;
  transition: all .5s;
  ${setWeight};
`;

const TranslatedText = withNamespaces()(StyledText);

export {
  TranslatedText,
  StyledText
}
