// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../';
import PaginationButton from './PaginationButton';
import { getQueryParam, setNewQueryParams } from '../../../utils';
import { breakpoints } from '../../../styleSheet';

type Props = {
  total: Number,
  perPage: Number,
  onChange: Function
}

const Wrapper = styled(Card)`
  height: 50px;
  
  @media (max-width: ${breakpoints.sm}px) {
    height: 30px !important;
  }
`;

class Pagination extends Component<Props> {

  static defaultProps = {
    onChange: () => {
    }
  };

  state = {
    buttons: []
  };

  componentDidMount() {
    this.generateButtons();
  }

  handleQueryParams = (history, page) => {
    history.push(`${history.location.pathname}?${setNewQueryParams({ page })}`);
    this.props.onChange();
  };

  pages = () => Math.ceil(this.props.total / this.props.perPage);

  generateButtons = () => {
    const pages = this.pages();
    let buttons = [];
    for (let i = 0; i < pages; i++) {
      buttons.push(i + 1);
    }
    this.setState({ buttons });
  };

  handleActive = (page, currentPage) => page === Number(currentPage);

  render() {
    const { history, total, perPage } = this.props;
    const { buttons } = this.state;
    const currentPage = Number(getQueryParam('page')) || 1;
    const start = currentPage > 1 ? currentPage - 2 : 0;
    const end = currentPage + 1 < this.pages() ? currentPage + 1 : this.pages();

    return (
      <Wrapper className="d-inline-flex overflow-hidden" type="white" dir="ltr">
        <PaginationButton
          iconName="first"
          iconSize={30}
          onClick={() => this.handleQueryParams(history, 1)}
          disabled={currentPage === 1}
        />
        <PaginationButton
          iconName="minimal-left"
          iconBold
          hasBorder
          onClick={() => this.handleQueryParams(history, currentPage - 1)}
          disabled={currentPage === 1}
        />
        {
          currentPage > start && start !== 0 ?
            <PaginationButton
              pageNumber="..."
              onClick={() => this.handleQueryParams(history, currentPage - 2)}
            /> :
            null
        }
        {
          buttons.slice(start, end).map((button, index) => {
            return (
              <PaginationButton
                pageNumber={button}
                key={index}
                hasBorder
                active={this.handleActive(button, currentPage)}
                onClick={() => this.handleQueryParams(history, button)}
              />
            );
          })
        }
        {
          currentPage < end && end !== this.pages() ?
            <PaginationButton
              pageNumber="..."
              onClick={() => this.handleQueryParams(history, currentPage + 2)}
            /> :
            null
        }
        <PaginationButton
          iconName="minimal-right"
          iconBold
          hasBorder
          onClick={() => this.handleQueryParams(history, currentPage + 1)}
          disabled={currentPage === this.pages()}
        />
        <PaginationButton
          iconName="last"
          iconSize={30}
          onClick={() => this.handleQueryParams(history, Math.ceil(total / perPage))}
          disabled={currentPage === this.pages()}
        />
      </Wrapper>
    );
  }
}

export default withRouter(Pagination);
