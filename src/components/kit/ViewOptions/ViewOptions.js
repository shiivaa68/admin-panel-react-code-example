import React, { Component } from 'react';
import { Card } from "../";
import Option from "./Option";
import { withRouter } from 'react-router-dom';
import { setNewQueryParams, viewOption } from "../../../utils";

class ViewOptions extends Component {

  handleChangeView = (view, history) => {
    history.replace(`${history.location.pathname}?${setNewQueryParams({ view })}`);
  };

  render() {
    const { history } = this.props;
    const isListView = viewOption() === 'list';

    return (
      <Card hasShadow={false} type="border" className="d-flex py-1 w-max h-auto">
        <Option active={!isListView} iconName="view-card" onClick={() => this.handleChangeView('card', history)}/>
        <Option active={isListView} iconName="view-list" onClick={() => this.handleChangeView('list', history)}/>
      </Card>
    );
  }
}

export default withRouter(ViewOptions);
