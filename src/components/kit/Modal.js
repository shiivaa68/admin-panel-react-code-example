// @flow

import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Text, Icon, Row, Col, Card } from '../kit';
import styled from "styled-components";
import { colors } from "../../styleSheet";

const ModalHeader = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: ${props => props.secondary ? 'none' : `1px solid ${colors.border}`};
`;

type Props = {
  modalHeader?: Boolean,
  modalFooter?: Element,
  children: Element,
  backdrop?: true | false | 'static',
  title?: String,
  secondary?: Boolean
};

export default class CustomModal extends Component<Props> {

  state = {
    isOpen: false,
    row: {}
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  setModalVisibility = (visibility, row = {}) => this.setState({ isOpen: visibility, row });

  show = (row) => this.setModalVisibility(true, row);

  hide = () => this.setModalVisibility(false);

  render() {
    const {
      modalFooter = false,
      modalHeader = true,
      children,
      backdrop = 'static',
      title,
      secondary = false,
      ...restProps
    } = this.props;
    const { isOpen, row } = this.state;

    return (
      <Modal
        size="lg"
        isOpen={isOpen}
        toggle={this.toggle}
        backdrop={backdrop}
        contentClassName={secondary ? 'bg-transparent shadow-none' : 'bg-white'}
        {...restProps}
      >
        {
          modalHeader ?
            <ModalHeader secondary={secondary}>
              <Row className="h-100 align-items-center">
                <Col
                  xs={2}
                  className={`d-flex pointer ${secondary ? 'align-self-end py-2 px-4 justify-content-start' : 'justify-content-end'}`}
                  onClick={() => this.hide()}
                >
                  <Icon name="close" color={secondary ? 'white' : 'lightGray'} size={secondary ? 32 : 16}/>
                </Col>
                <Col xs={8} className="d-flex justify-content-center">
                  <Text size="md">{title}</Text>
                </Col>
                <Col xs={2} className="d-flex justify-content-center"/>
              </Row>
            </ModalHeader> :
            null
        }
        <Card type={secondary ? 'white' : 'transparent'} className="overflow-hidden">
          <ModalBody>
            {
              children.type ?
                <children.type {...children.props} row={row} handleCloseModal={this.hide} /> :
                children
            }
          </ModalBody>
        </Card>
        {
          modalFooter ?
            <ModalFooter>
              {modalFooter}
            </ModalFooter> :
            null
        }
      </Modal>
    );
  }
}
