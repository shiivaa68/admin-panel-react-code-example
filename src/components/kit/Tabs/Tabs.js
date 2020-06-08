// @flow

import React, { Component } from 'react';
import TabHeader from "./TabHeader";

type Props = {
  initialTab: Number,
  titles: Array
}

export default class Tabs extends Component<Props> {

  state = {
    tabIndex: this.props.initialTab
  };

  setIndex = index => index !== this.state.tabIndex && this.setState({
    tabIndex: index
  });

  renderTab = () => this.props.children.find((child, index) => index === this.state.tabIndex);

  render() {
    const { titles } = this.props;
    const { tabIndex } = this.state;

    return (
      <div>
        <TabHeader titles={titles} tabIndex={tabIndex} setIndex={this.setIndex}/>
        {this.renderTab()}
      </div>
    );
  }
}

