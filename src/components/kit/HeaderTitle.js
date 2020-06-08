// @flow

import React from 'react';
import { Text } from './index';
import styled from 'styled-components';
import { colors } from "../../styleSheet";

const BorderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid ${colors.border};
`;

const TextWrapper = styled.div`
  background-color: ${props => colors[props.wrapperColor]};
  z-index: 9;
`;

const BadgeWrapper = styled.div`
  border-radius: 15px;
  background-color: ${colors.failure};
  padding: 5px 10px;
  margin: 0 5px;
`;

type Props = {
  title?: String,
  titleSize?: 'lg' | 'md' | 'sm' | 'rg',
  detailSize?: 'lg' | 'md' | 'sm' | 'rg',
  detail?: String,
  titleBorder?: Boolean,
  detailBorder?: Boolean,
  titleType?: String,
  titleColor?: String,
  detailColor?: String,
  detailType?: String,
  gap?: Boolean,
  titleWrapperColor?: String,
  detailWrapperColor?: String,
  titleClassName?: String,
  detailClassName?: String,
  badgeTitle?: String,
  titleDir?: String,
  detailDir?: String
};

export default function HeaderTitle(props: Props) {
  const {
    title,
    detail,
    titleBorder,
    detailBorder,
    badgeTitle,
    titleType = "h2",
    detailType = "h3",
    gap = true,
    titleWrapperColor = "grayBackground",
    detailWrapperColor = "grayBackground",
    titleSize = 'lg',
    detailSize = 'sm',
    titleClassName = '',
    titleColor = 'black',
    detailColor = 'black',
    detailClassName = 'my-3 px-3',
    titleDir,
    detailDir
  } = props;

  return (
    <div className={`${gap ? 'mt-2 ' : ''} text-center`}>
      {
        title ?
          titleBorder ?
            <BorderWrapper>
              <TextWrapper
                wrapperColor={titleWrapperColor}
                className="d-flex justify-content-center align-items-center"
              >
                <Text
                  color={titleColor}
                  type={titleType}
                  size={titleSize}
                  className={titleClassName}
                  direction={titleDir}
                >
                  {title}
                </Text>
                {
                  badgeTitle ?
                    <BadgeWrapper>
                      <Text size="rg" color="white">{badgeTitle}</Text>
                    </BadgeWrapper> :
                    null
                }
              </TextWrapper>
              <Line/>
            </BorderWrapper> :
            <div className="d-flex justify-content-center align-items-center">
              <Text
                color={titleColor}
                type={titleType}
                size={titleSize}
                className={titleClassName}
                direction={titleDir}
              >
                {title}
              </Text>
              {
                badgeTitle ?
                  <BadgeWrapper>
                    <Text size="rg" color="white">{badgeTitle}</Text>
                  </BadgeWrapper> :
                  null
              }

            </div>
          : null
      }
      {
        detail ?
          detailBorder ?
            <BorderWrapper>
              <TextWrapper wrapperColor={detailWrapperColor}>
                <Text
                  color={detailColor}
                  type={detailType}
                  size={detailSize}
                  className={detailClassName}
                  direction={detailDir}
                >
                  {detail}
                </Text>
              </TextWrapper>
              <Line/>
            </BorderWrapper> :
            <Text
              color={detailColor}
              type={detailType}
              size={detailSize}
              className={detailClassName}
              direction={detailDir}
            >
              {detail}
            </Text>
          : null
      }
    </div>
  );
}
