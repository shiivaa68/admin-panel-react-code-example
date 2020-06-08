// @flow

import React, { Component } from 'react';
import { Container, Row, Col, Text, Loading, DateTime, Avatar, Accordion, Card } from '../../../components/kit';
import { connect } from 'react-redux';
import { actions as getTrackRequestActions } from '../../../redux/modules/getTrackRequest';

type Props = {
  row: Object,
  handleCloseModal: Function,
  modalAction: Function,
  loadTrackRequests: Function,
  trackRequests: Object,
}

class ShowResponsersModal extends Component<Props> {

  state = {};

  componentDidMount() {
    this.props.loadTrackRequests({ ri: this.props.row.original._id });
  }

  render() {
    const { trackRequests } = this.props;

    return (
      <Loading loading={trackRequests.loading} inside>
        <Container fluid className="p-2">
          <Row>
            {this.exist(trackRequests, 'data.request.responses.length') ?
              trackRequests.data.request.responses.map(response => {
                const title = (
                  <div className="d-flex align-items-center justify-content-between w-100 px-3 py-1">
                    <Avatar rounded
                            hash={response.broadcast.business.avatar ? response.broadcast.business.avatar.hash : null}
                            alt="test"/>
                    <Text color="lightGray" className="px-2">{response.broadcast.business.name}</Text>
                    <div>
                      <Text>{response.broadcast.address}</Text>
                      <DateTime datetime={response.createdAt}/>
                    </div>
                  </div>
                );

                return (
                  <Col xs={12}>
                    <Accordion title={title}>
                      {
                        response.messages.map(message => {
                          return (
                            <Card type="grayBackground" className="px-3 py-2" hasShadow={false} hasBorder>
                              <Text color="black" className="px-2">{message.text}</Text>
                            </Card>
                          )
                        })
                      }
                    </Accordion>
                  </Col>
                )
              }) :
              null
            }
          </Row>
        </Container>
      </Loading>
    );
  }
}

export default connect(
  state => ({
    trackRequests: state.trackRequests
  }),
  {
    loadTrackRequests: getTrackRequestActions.load
  }
)(ShowResponsersModal);
