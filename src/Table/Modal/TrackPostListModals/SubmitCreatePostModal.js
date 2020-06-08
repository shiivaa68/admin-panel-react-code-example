// @flow

import React from 'react';
import { Col, Text, CardTitle } from '../../../components/kit';
import ModalFooterButtons from '../ModalFooterButtons';

type Props = {
  row: Object,
  handleCloseModal: Function,
  modalAction: Function
}

export default function SubmitCreatePostModal(props: Props) {
  const { row, handleCloseModal, modalAction } = props;
  const id = row.original && row.original._id;
  const businessname = row.original && row.original.business.name;

  const handleSubmitModalAction = () => {
    modalAction({ pi: id, handleCloseModal });
  };

  return (
    <CardTitle title="panel.modal.submitcreatepost">
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <Text>panel.modal.descriptionMsg_1</Text>
        <Text className="px-1" color="blue">{businessname}</Text>
        <Text>panel.modal.descriptionMsg_4</Text>
      </Col>
      <ModalFooterButtons onSubmit={handleSubmitModalAction} onClose={handleCloseModal}/>
    </CardTitle>
  );
}
