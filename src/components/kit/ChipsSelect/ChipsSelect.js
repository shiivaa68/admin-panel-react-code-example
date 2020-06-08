// @flow

import React, { Component } from 'react';
import { Icon, Text, Modal, Card, Button } from '../';
import Chips from './Chips';
import ChipsSelectWrapper from './ChipsSelectWrapper';
import CategoryList from './CategoryList';

type Props = {
  data: Array,
  onSelect: Function,
  error: String,
  initialSelected?: Array,
  multiSelect?: Boolean,
};

export default class ChipsSelect extends Component<Props> {
  _modal = React.createRef();

  state = {
    selected: this.props.initialSelected || [],
  };

  handleToggleSelect = item => {
    const hasCheck = this.state.selected.find(
      select => select._id === item._id
    );
    if (hasCheck) {
      this.setState(
        {
          selected: this.state.selected.filter(
            select => select._id !== item._id
          ),
        },
        () => {
          this.props.onSelect(this.state.selected);
        }
      );
    } else {
      if (this.props.multiSelect) {
        this.setState(
          {
            selected: [...this.state.selected, item],
          },
          () => {
            this.props.onSelect(this.state.selected);
          }
        );
      } else {
        this.setState(
          {
            selected: [item],
          },
          () => {
            this.props.onSelect(this.state.selected);
          }
        );
      }
    }
  };

  renderModalFooter = () => {
    return (
      <Card
        type="backgroundGray"
        className="w-100 h-100 d-flex align-items-center justify-content-center py-2"
        hasRadius={false}
      >
        <Button
          type="primary"
          filled
          size="lg"
          textColor="white"
          onClick={() => this._modal.current.hide()}
        >
          <Text color="white">panel.modal.serviceconfirm</Text>
        </Button>
      </Card>
    );
  };

  render() {
    const { data, error } = this.props;

    return (
      <>
        <ChipsSelectWrapper error={error}>
          <div className="d-flex align-self-center justify-content-between pb-2">
            <Text color="blue" size="lg">
              panel.modal.serviceList
            </Text>
            <Icon
              name="add"
              size={22}
              color="blue"
              className="pointer"
              onClick={() => this._modal.current.toggle()}
            />
          </div>
          {this.state.selected && this.state.selected.length ? (
            <Chips
              data={this.state.selected}
              onRemove={this.handleToggleSelect}
            />
          ) : null}
          <Modal
            ref={this._modal}
            title="panel.modal.titleServiceModal"
            backdrop
            modalFooter={this.renderModalFooter()}
          >
            <CategoryList
              data={data}
              selected={this.state.selected}
              handleCheck={this.handleToggleSelect}
            />
          </Modal>
        </ChipsSelectWrapper>
        {error ? (
          <div>
            <div className="d-flex w-100 align-items-center pt-1">
              <Text className="px-1" size="sm" color="red">
                {error}
              </Text>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
