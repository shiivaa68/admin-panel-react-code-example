// @flow

import React, { Component } from 'react';
import ModalFooterButtons from '../ModalFooterButtons';
import { CardTitle, Uploader } from '../../../components/kit';
import { Container, Row } from 'reactstrap';

type Props = {
  row: Array,
  handleCloseModal: Function,
  modalAction: Function,
  file: Object,
};

export default class SubmitPostModal extends Component<Props> {
  state = {
    uploadMedia: {},
  };

  handleSubmitModalAction = () => {
    const { modalAction, showAlert, handleCloseModal } = this.props;
    const { uploadMedia } = this.state;
    if (uploadMedia === null) {
      showAlert('تصویر را وارد نمایید', 'failure');
    } else {
      modalAction({ uploadMedia, handleCloseModal });
    }
  };

  handleFile = file => {
    const { row } = this.props;
    const postId = row.original && row.original._id;
    const uploadMedia = {
      ma: file,
      fi: postId,
      ft: 0,
    };
    this.setState({ uploadMedia });
  };

  render() {
    const { handleCloseModal } = this.props;

    return (
      <CardTitle title="panel.modal.uploadImg">
        <Container>
          <Row>
            <Uploader
              handleUploadFile={this.handleFile}
              handleRemoveFile={() => console.log('should remove file here')}
            />
          </Row>
        </Container>
        <ModalFooterButtons
          onSubmit={this.handleSubmitModalAction}
          onClose={handleCloseModal}
        />
      </CardTitle>
    );
  }
}
