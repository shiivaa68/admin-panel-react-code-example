import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Text, Icon } from "../";
import { i18n } from "../../../localization";
import Title from "./Title";
import { globalInputStyle, setErrorStyle, setDisableStyle } from './inputStyles';
import IconWrapper from './IconWrapper';

const TextInput = styled.input`
  ${globalInputStyle};
  ${setDisableStyle};
  ${setErrorStyle};
`;

const TextArea = styled.textarea`
  ${globalInputStyle};
  height: auto;
  resize: vertical;
`;

const Captcha = styled.img`
  width: 50%;
  height: 56px;
  position: absolute;
  top: 7px;
  border-radius: ${props => props.direction === 'rtl' ? '30px 0 0 30px' : '0 30px 30px 0'};
  ${props => props.direction === 'rtl' ? 'left' : 'right'}: 2px;
`;

type Props = {
  type: String,
  disabled?: Boolean,
  title?: String,
  error?: String,
  placeholder: String,
  labelClassName?: String,
  iconName?: String,
  iconSize?: Number,
  captcha?: Boolean,
  showTitle?: Boolean,
  inputType?: String,
  value?: String
}

class Input extends Component<Props> {

  state = {
    showPassword: false
  };

  toggleShowPassword = () => this.setState({ showPassword: !this.state.showPassword });

  render() {
    const {
      title,
      error,
      type = "text",
      inputType,
      placeholder,
      children,
      labelClassName,
      iconSize = 26,
      iconName,
      language,
      captcha,
      showTitle = true,
      value,
      ...props
    } = this.props;
    const { showPassword } = this.state;
    const translatedPlaceholder = i18n.t(placeholder);
    const input = type === 'textarea' ?
      <TextArea hasIcon={!!iconName} placeholder={translatedPlaceholder} value={value} {...props}/> :
      type === 'password' ?
        <TextInput
          type={showPassword ? 'text' : 'password'}
          hasIcon={!!iconName}
          placeholder={translatedPlaceholder}
          {...props}
        /> :
        <TextInput hasIcon={!!iconName} placeholder={translatedPlaceholder} type={inputType} value={value} {...props}/>;

    return (
      <label className={`${labelClassName} w-100`}>
        {
          showTitle ?
            <Title error={error} title={title}>
              <Text color={null}>{error || title}</Text>
            </Title> :
            null
        }
        <div className="position-relative">
          {
            iconName ?
              <IconWrapper direction={language.direction} hasTitle={!!(title || error)}>
                <Icon name={iconName} size={iconSize} color="lightGray"/>
              </IconWrapper> :
              null
          }
          {
            type === 'password' ?
              <IconWrapper
                direction={language.direction}
                type={type}
                onClick={this.toggleShowPassword}
                hasTitle={!!(title || error)}
              >
                <Icon name={showPassword ? 'show' : 'hide'} size={iconSize} color="lightGray"/>
              </IconWrapper> :
              null
          }
          {input}
          {captcha ? <Captcha src={captcha} alt="captcha" direction={language.direction}/> : null}
        </div>
        {children}
      </label>
    );
  }
}

export default connect(
  state => ({
    language: state.language
  })
)(Input);
