// @flow

import React from 'react';
import { Col, Text, CardTitle } from '../../../components/kit';
import ModalFooterButtons from '../ModalFooterButtons';

type Props = {
  row: Array,
  handleCloseModal: Function,
  modalAction: Function,
};

export default function TrackBlockModal(props: Props) {
  const { row, handleCloseModal, modalAction } = props;
  const userId = row.original && row.original.user;
  const userName = row.original && row.original.requester.name;

  const handleSubmitModalAction = () => {
    modalAction({ ui: userId, handleCloseModal });
  };

  return (
    <CardTitle title="panel.modal.title">
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <Text>panel.modal.descriptionMsg_1</Text>
        <Text className="px-1" color="blue">
          {userName}
        </Text>
        <Text>panel.modal.descriptionMsg_2</Text>
      </Col>
      <ModalFooterButtons
        onClose={handleCloseModal}
        onSubmit={handleSubmitModalAction}
      />
    </CardTitle>
  );
}
