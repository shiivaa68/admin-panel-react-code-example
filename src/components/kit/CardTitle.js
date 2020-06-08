// @flow

import React from 'react';
import { Card, Text, HR, Icon } from './';
import styled from "styled-components";
import { colors } from "../../styleSheet";

type Props = {
  hasShadow?: Boolean,
  children: Element,
  title: String,
  iconName?: String,
  iconSize?: Number,
  titleColor?: String,
  textCenter?: Boolean,
  hasRadius?: Boolean,
  priceField?: String,
  moreLess?: '+' | '-' | String,
  badgeTitle?: String
}

const BadgeWrapper = styled.div`
  border-radius: 15px;
  background-color: ${colors.failure};
  padding: 5px 10px;
  margin: 0 5px;
`;

export default function CardTitle(
  {
    hasShadow,
    children,
    title,
    iconName,
    iconSize = 32,
    titleColor,
    textCenter,
    hasRadius,
    priceField,
    moreLess,
    badgeTitle,
    ...restProps
  }: Props) {
  return (
    <Card hasShadow={hasShadow} hasRadius={hasRadius} {...restProps}>
      <div
        className={
          `${textCenter ? 'justify-content-center' : null
          } 
          py-4 
          px-3 
          d-flex 
          align-items-center 
          justify-content-between`
        }
      >
        {iconName ? <Icon name={iconName} size={iconSize} color="gray" className="px-2"/> : null}
        <div className="justify-content-center align-items-center d-flex">
          <Text size="smb" color={titleColor}>{title}</Text>
          {
            badgeTitle ? <BadgeWrapper>
              <Text size="rg" color="white">{badgeTitle}</Text>
            </BadgeWrapper> : null
          }
        </div>
        <div>
          {
            moreLess ? <Text size="smb" color="primary">{priceField}</Text> : null
          }
          {
            moreLess === '+' ?
              <Icon name="triangle-up" size={16} color="primary" className="px-2"/> : null
          }
          {
            moreLess === '-' ? <Icon name="triangle-down" size={16} color="primary" className="px-2"/> : null
          }
        </div>
      </div>
      <HR className="m-0"/>
      {children}
    </Card>
  );
}
