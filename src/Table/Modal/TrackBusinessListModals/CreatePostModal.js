// @flow

import React, { Component } from 'react';
import ModalFooterButtons from '../ModalFooterButtons';
import { connect } from 'react-redux';
import { actions as servicesActions } from '../../../redux/modules/services';
import {
  CardTitle,
  Row,
  TextInput,
  Col,
  Loading,
} from '../../../components/kit';
import Container from 'reactstrap/es/Container';
import ChipsSelect from '../../../components/kit/ChipsSelect/ChipsSelect';

type Props = {
  row: Array,
  handleCloseModal: Function,
  modalAction: Function,
  services: Array,
};

class CreatePostModal extends Component<Props> {
  state = {
    title: '',
    text: '',
    serviceId: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    this.props.loadServices({ tp: 0 });
  }

  handleSelect = value => {
    if (value[0]) {
      this.setState({
        serviceId: value[0]._id,
      });
    } else {
      this.setState({
        serviceId: '',
      });
    }
  };

  handleSubmitModalAction = () => {
    const { row, modalAction, showAlert, handleCloseModal } = this.props;
    const { title, text, serviceId } = this.state;
    const CreatepostId = row.original && row.original._id;
    if (!title) {
      showAlert('panel.alert.titlePostBusiness', 'failure');
    } else if (!text) {
      showAlert('panel.alert.textPostBusiness', 'failure');
    } else if (!serviceId) {
      showAlert('panel.alert.serviceIdBusiness', 'failure');
    } else {
      modalAction({
        bi: CreatepostId,
        tl: title,
        tx: text,
        handleCloseModal,
        si: serviceId,
      });
    }
  };

  render() {
    const { handleCloseModal, services } = this.props;
    const { title, text } = this.state;

    return (
      <Loading loading={services.loading}>
        <CardTitle title="panel.modal.createPostBussiness">
          <Container>
            <Row>
              <Col xs={12}>
                <TextInput
                  placeholder="panel.placeHolder.placeHolderCreatePostTitle"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={12}>
                <TextInput
                  placeholder="panel.placeHolder.placeHolderCreatePostText"
                  name="text"
                  value={text}
                  onChange={this.handleChange}
                />
              </Col>
              {this.exist(services, 'data.data') ? (
                <Col>
                  <ChipsSelect
                    onSelect={this.handleSelect}
                    name="chips"
                    error=""
                    data={services.data.data}
                  />
                </Col>
              ) : null}
            </Row>
          </Container>
          <ModalFooterButtons
            onSubmit={this.handleSubmitModalAction}
            onClose={handleCloseModal}
          />
        </CardTitle>
      </Loading>
    );
  }
}

export default connect(
  state => ({
    services: state.services,
  }),
  {
    loadServices: servicesActions.load,
  }
)(CreatePostModal);
