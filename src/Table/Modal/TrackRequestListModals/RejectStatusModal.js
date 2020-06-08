// @flow

import React from 'react';
import { Col, Text, CardTitle } from '../../../components/kit';
import ModalFooterButtons from '../ModalFooterButtons';

type Props = {
  row: Object,
  handleCloseModal: Function,
  modalAction: Function,
};

export default function RejectStatusModal(props: Props) {
  const { row, handleCloseModal, modalAction } = props;
  const Id = row.original && row.original._id;
  const description = row.original && row.original.description;

  const handleSubmitModalAction = () => {
    modalAction({ ri: Id, handleCloseModal });
  };

  return (
    <CardTitle title="panel.modal.rejectRequest">
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <Text>panel.modal.descriptionMsg_1</Text>
        <Text className="px-1" color="blue">
          {description}
        </Text>
        <Text>panel.modal.descriptionMsg_5</Text>
      </Col>
      <ModalFooterButtons
        onSubmit={handleSubmitModalAction}
        onClose={handleCloseModal}
      />
    </CardTitle>
  );
}
