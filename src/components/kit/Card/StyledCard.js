import styled, { css } from 'styled-components';
import { colors } from '../../../styleSheet';

const StyledCard = styled.div`
  ${props => props.width ? css`
    width: ${props.width};
  ` : null};
  ${props => props.height ? css`
    height: ${props.height};
  ` : null};
  ${props => props.hasShadow ? css`
    box-shadow: ${props => props.sliderShadow ? colors.sliderBoxShadow : colors.boxShadow}
  ` : null};
  border-radius: ${props => props.hasRadius ? props.radius : 0};
  ${props => props.hasAnimation ? css`
    transition: all .5s;
  ` : null};
  ${props => props.backgroundImage ? css`
    background-image: url(${props.backgroundImage});
  ` : null};
  background-color: ${props => colors[props.type]};
  ${props => props.hasBorder ? css`
    border: 1px ${props.borderStyle} ${colors[props.borderColor]};
  ` : null};

  &:hover {
    ${props => props.hasShadow ? css`
      box-shadow: ${props => props.sliderShadow ? colors.sliderBoxShadowHover : colors.boxShadowHover}
    ` : null};
    ${props => props.hoverType ? css`
      background-color: ${colors[props.hoverType]};
    ` : null};
  }
`;

export default StyledCard;
