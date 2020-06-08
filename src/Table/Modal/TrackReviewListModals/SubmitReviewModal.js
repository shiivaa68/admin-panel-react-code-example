import React, { Component } from 'react';
import { Card, CardTitle, Select, Text } from '../../../components/kit';
import { Col, Container, Row } from 'reactstrap';
import ModalFooterButtons from '../ModalFooterButtons';

type Props = {
  row: Object,
  handleStatusChange: Function,
  handleCloseModal: Function,
  modalAction: Function,
};

export default class SubmitReviewModal extends Component<Props> {
  state = {
    status: null,
  };

  handleSubmitModalAction = () => {
    const { row, modalAction, showAlert, handleCloseModal } = this.props;
    const { status } = this.state;
    const reviewId = row.original && row.original._id;
    if (status === null) {
      showAlert('panel.alert.submitReviewStatus', 'failure');
    } else {
      modalAction({ ri: reviewId, st: status, handleCloseModal });
    }
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
      <CardTitle title="panel.modal.titleComment">
        <Card hasShadow={false} hasRadius={false} height="200px">
          <Container>
            <Row>
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center "
              >
                <Text color="red">{text}</Text>
              </Col>
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center"
                style={{ zIndex: 9999 }}
              >
                <Select
                  name="st"
                  data={[
                    { name: 'تایید شده', value: 1 },
                    { name: 'رد شده', value: 2 },
                  ]}
                  placeholder="panel.placeHolder.placeholderReview"
                  onChange={this.handleStatusChange}
                  valueSelector="value"
                  titleSelector="name"
                />
              </Col>
            </Row>
          </Container>
        </Card>
        <ModalFooterButtons
          onSubmit={this.handleSubmitModalAction}
          onClose={handleCloseModal}
        />
      </CardTitle>
    );
  }
}
