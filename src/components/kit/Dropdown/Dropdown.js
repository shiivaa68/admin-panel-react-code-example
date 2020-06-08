// @flow

import React, { Component } from 'react';
import { Icon, Text, Card } from "../";
import styled from "styled-components";

const Children = styled(Card)`
  min-width: 150px;
  max-height: 300px;
  position: absolute;
  display: ${props => props.isOpen ? 'block' : 'none'};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  z-index: 9;
  top: 50px;
  left: 8%;
  transform: translate(-50%);
`;

const MinimalIconWrapper = styled.div`
  transition: all .3s;
  transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
`;

const IconWrapper = styled(Card)`
  width: ${props => props.bigIcon ? '65px' : 'unset'};
  height: ${props => props.bigIcon ? '65px' : 'unset'};
`;

type Props = {
  iconName?: String,
  iconSize?: Number,
  iconColor?: String,
  title: String,
  titleColor: String,
  children: Element,
  bigIcon?: Boolean,
  image?: String
};

export default class Dropdown extends Component<Props> {

  static defaultProps = {
    iconSize: 20
  };

  state = {
    isOpen: false
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isOpen: false
      });
    }
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { iconName, iconSize, iconColor, title, children, bigIcon, image, titleColor } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="h-100" ref={this.setWrapperRef}>
        <div
          className="d-inline-flex align-items-center justify-content-center h-100 position-relative pointer user-select-none"
          onClick={this.toggle}
        >
          <IconWrapper
            bigIcon={bigIcon}
            hasShadow={bigIcon}
            hasRadius={bigIcon}
            type={bigIcon ? 'white' : 'transparent'}
            className="overflow-hidden"
          >
            <div className="d-flex align-items-center justify-content-center w-100 h-100 overflow-hidden">
              {
                image ?
                  <img src={image} alt={`dropdown-${image}`}/> :
                  <Icon name={iconName} size={iconSize} color={iconColor} className="px-1"/>
              }
            </div>
          </IconWrapper>
          <Text color={titleColor} className="px-1">{title}</Text>
          <MinimalIconWrapper isOpen={isOpen} className="d-flex align-items-center justify-content-center">
            <Icon name="minimal-down" className="px-1" size={10} color={titleColor}/>
          </MinimalIconWrapper>
        </div>
        <Children isOpen={isOpen} type="white" className="overflow-auto">
          {children}
        </Children>
      </div>
    );
  }
}
