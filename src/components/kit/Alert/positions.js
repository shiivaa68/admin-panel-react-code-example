import { css } from 'styled-components';

export const positions = {
  TOP: 'TOP',
  TOP_START: 'TOP_START',
  TOP_END: 'TOP_END',
  MIDDLE: 'MIDDLE',
  MIDDLE_START: 'MIDDLE_START',
  MIDDLE_END: 'MIDDLE_END',
  BOTTOM: 'BOTTOM',
  BOTTOM_START: 'BOTTOM_START',
  BOTTOM_END: 'BOTTOM_END'
};

const handleDirection = (position, direction) => {
  if (position === 'START' && direction === 'ltr') {
    return 'left';
  } else if (position === 'START' && direction === 'rtl') {
    return 'right';
  } else if (position === 'END' && direction === 'ltr') {
    return 'right';
  } else if (position === 'END' && direction === 'rtl') {
    return 'left';
  } else {
    return 'left';
  }
};

const handleSpacing = spacing => `${spacing}px`;

const findPositionAlignment = position => position.split('_')[1];

export const renderAlertInPosition = ({ position, language, spacing }) => {
  if (position) {
    switch (position) {
      case positions.TOP:
        return css`
          position: fixed;
          top: ${handleSpacing(spacing)};
          left: 50%;
          transform: translate(-50%, 0);
     `;
      case positions.TOP_START:
      case positions.TOP_END:
        return css`
          position: fixed; 
          top: ${handleSpacing(spacing)};
          ${handleDirection(findPositionAlignment(position), language.direction)}: ${handleSpacing(spacing)};
      `;
      default:
      case positions.MIDDLE:
        return css`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
      `;
      case positions.MIDDLE_START:
      case positions.MIDDLE_END:
        return css`
          position: fixed;
          top: 50%;
          ${handleDirection(findPositionAlignment(position), language.direction)}: ${handleSpacing(spacing)};
          transform: translate(0, -50%);
      `;
      case positions.BOTTOM:
        return css`
          position: fixed;
          bottom: ${handleSpacing(spacing)};
          left: 50%;
          transform: translate(-50%, 0);
      `;
      case positions.BOTTOM_START:
      case positions.BOTTOM_END:
        return css`
          position: fixed;
          bottom: ${handleSpacing(spacing)};
          ${handleDirection(findPositionAlignment(position), language.direction)}: ${handleSpacing(spacing)};
      `;
    }
  }
};
