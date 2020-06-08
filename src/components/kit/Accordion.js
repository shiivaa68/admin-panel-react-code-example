// @flow

import React, { Component } from 'react';
import { Card, Icon } from './index';
import styled, { css } from 'styled-components';

const IconWrapper = styled.div`
  transition: all 0.3s;
  display: flex;
  align-items: center;

  ${props =>
    props.show
      ? css`
          transform: rotate(-90deg);
        `
      : null};
`;

const Wrapper = styled.div`
  transition: all 0.3s;
  min-height: ${props => (props.show ? 250 : 0)}px;
`;

type Props = {
  show?: Boolean,
  title: String,
  children: Element,
  hasShadow: Boolean,
};

export default class Accordion extends Component<Props> {
  static defaultProps = {
    hasShadow: false,
  };

  state = {
    show: this.props.show,
  };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const { children, title, hasShadow } = this.props;
    const { show } = this.state;

    return (
      <Card hasShadow={hasShadow} type="whiteBackground" className="p-3">
        <div className="d-flex pointer" onClick={this.toggle}>
          <IconWrapper show={show}>
            <Icon name="minimal-right" useDirection />
          </IconWrapper>
          <div className="px-1">{title}</div>
        </div>
        <Wrapper show={show} className={show ? 'px-2 py-4' : null}>
          {show ? children : null}
        </Wrapper>
      </Card>
    );
  }
}
