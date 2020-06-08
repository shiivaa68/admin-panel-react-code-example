// @flow

import React from 'react'
import { Button, HR, Text, Col, Row, Container } from '../../components/kit';

type Props = {
  onSubmit: Function,
  onClose: Function,
  submitText?: String,
  cancelText?: String
}

ModalFooterButtons.defaultProps = {
  submitText: 'panel.modal.submit',
  cancelText: 'panel.modal.cancel'
};

export default function ModalFooterButtons(props: Props) {
  const { onSubmit, onClose, cancelText, submitText } = props;
  return (
    <Container className="py-2">
      <Row>
        <Col xs={12}>
          <HR/>
        </Col>
        <Col xs={12} className="d-flex justify-content-center w-100">
          <Button onClick={onSubmit} type="primary" filled size="sm" className="mx-2">
            <Text color="white">{submitText}</Text>
          </Button>
          <Button onClick={onClose} type="red" size="sm" className="mx-2">
            <Text>{cancelText}</Text>
          </Button>
        </Col>
      </Row>
    </Container>
  )
};
