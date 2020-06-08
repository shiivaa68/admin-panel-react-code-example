// @flow

import React, { Component } from 'react';
import ModalFooterButtons from '../ModalFooterButtons';
import ReportPost from '../../../components/Cyber/TrackPostList/ReportPost';
import PostImage from '../../../components/Cyber/TrackPostList/PostImage';
import { CardTitle, HR, Text } from '../../../components/kit';
import { Container, Row } from 'reactstrap';

type Props = {
  row: Array,
  handleCloseModal: Function,
  modalAction: Function,
};

export default class SubmitPostModal extends Component<Props> {
  state = {
    status: null,
    reason: null,
  };

  handleSubmitModalAction = () => {
    const { row, modalAction, showAlert, handleCloseModal } = this.props;
    const { reason, status } = this.state;
    const postId = row.original && row.original._id;
    if (status === null) {
      showAlert('panel.alert.submitPostStatus', 'failure');
    } else if (reason === null) {
      showAlert('panel.alert.reasonRejectPost', 'failure');
    } else {
      modalAction({ pi: postId, st: status, dc: reason, handleCloseModal });
    }
  };

  handleReasonChange = reason => {
    this.setState({
      reason,
    });
  };

  handleStatusChange = status => {
    this.setState({
      status,
    });
  };

  render() {
    const { row, handleCloseModal } = this.props;
    const text = row.original && row.original.text;

    return (
      <CardTitle title="panel.modal.titlepost">
        <Container>
          <Row>
            {this.exist(row, 'original.media.length') ? (
              row.original.media && row.original.media.length ? (
                row.original.media.map(img => (
                  <PostImage
                    caption={img.caption}
                    hash={img.hash}
                    alt={img._id}
                    datetime={img.createdAt}
                  />
                ))
              ) : (
                <Text size="lg" color="secondary">
                  panel.modal.noImage
                </Text>
              )
            ) : null}
          </Row>
        </Container>
        <HR />
        <ReportPost
          text={text}
          onReasonChange={this.handleReasonChange}
          handleStatusChange={this.handleStatusChange}
        />
        <ModalFooterButtons
          onSubmit={this.handleSubmitModalAction}
          onClose={handleCloseModal}
        />
      </CardTitle>
    );
  }
}
