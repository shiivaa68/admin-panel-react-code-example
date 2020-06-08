import React from 'react';
import StyledCard from './StyledCard';

type Props = {
  hasShadow?: Boolean,
  children?: Element,
  type?: String,
  hasRadius?: Boolean,
  hasBorder?: Boolean,
  borderStyle?: String,
  borderColor?: String,
  sliderShadow?: Boolean,
  width?: String,
  height?: String,
  radius?: String,
  hasAnimation?: Boolean,
  backgroundImage?: String,
  hoverType?: String
};

Card.defaultProps = {
  hasShadow: true,
  hasRadius: true,
  hasBorder: false,
  borderStyle: 'solid',
  type: 'transparent',
  sliderShadow: false,
  borderColor: 'lighterGray',
  radius: '15px',
  hasAnimation: true
};

export default function Card({ children, hasShadow, hasRadius, hasBorder, ...restProps }: Props) {
  return (
    <StyledCard hasShadow={hasShadow} hasRadius={hasRadius} hasBorder={hasBorder} {...restProps}>
      {children}
    </StyledCard>
  );
}
