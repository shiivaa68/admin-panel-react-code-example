import { css } from "styled-components";
import { colors, typography } from "../../../styleSheet";

const globalInputStyle = css`
  width: 100%;
  height: 60px;
  border: 1px solid ${colors.border};
  border-radius: 30px;
  color: ${colors.black};
  transition: all .5s;
  padding: ${props => props.hasIcon ? '20px 50px' : '20px 25px'};
  margin: 5px 0 0;
  font-size: ${typography.input.fontSize};
  font-weight: ${typography.input.fontWeight};
  
  ::placeholder {
    color: ${colors.lightGray};
  }
  
  &:focus {
    border-width: 2px;
    border-color: ${colors.primary};
  }
  
  &:focus-within {
    border-width: 2px;
    border-color: ${colors.primary};
  }
`;

const setDisableStyle = ({ disabled }) => {
  if (disabled) {
    return css`
      border-width: 1px;
      background-color: ${colors.disabled};
      color: ${colors.lightGray};
      
      &:hover {
        cursor: not-allowed;
      }
    `;
  }
};

const setErrorStyle = ({ error }) => {
  if (error) {
    return css`
      color: ${colors.black};
      border-color: ${colors.failure};
    `;
  }
};

const setIconWrapperPositionStyle = ({ type, direction }) => {
  if (type === 'password') {
    return direction === 'rtl' ? 'left' : 'right';
  } else {
    return direction === 'rtl' ? 'right' : 'left';
  }
};

export {
  globalInputStyle,
  setDisableStyle,
  setErrorStyle,
  setIconWrapperPositionStyle
};
