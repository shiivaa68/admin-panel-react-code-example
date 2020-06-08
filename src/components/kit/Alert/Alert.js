// @flow

import React from 'react';
import { Card, Text, Container, Row, Col } from '../';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { renderAlertInPosition } from './positions';
import { hideAlert } from '../../../redux/modules/alert';
import AlertBorder from './AlertBorder';

const AlertContainer = styled(Card)`
  min-width: 300px;
  ${props => props.useStatic ? null : css`max-width: calc(100% - 2 * ${props => props.spacing}px);`};
  align-items: center;
  ${renderAlertInPosition};
  z-index: ${props => props.useStatic ? 1000 : 1100};
`;

type Props = {
  language?: Object,
  alert?: Object,
  hideAlert?: Function,
  useStatic?: Object,
  canClose?: Boolean,
  fluid: Boolean,
  textSize?: string
};

class ConnectedAlert extends React.Component<Props> {

  spacing = 25;

  render() {
    const { alert, language, hideAlert, canClose = true, useStatic, className, textSize, fluid = false } = this.props;
    let { position, message, isOpen, status } = useStatic || alert;

    return isOpen ? (
      <AlertContainer
        position={position}
        language={language}
        spacing={this.spacing}
        className={className}
        useStatic={useStatic}
        type="white"
      >
        <Container fluid={fluid} className="h-100">
          <Row className="p-2 h-100">
            <Col className="d-flex align-items-center p-0" xs={canClose ? 9 : 12}>
              <AlertBorder direction={language.direction} status={status}/>
              <Text size={textSize} className="p-2 w-100">{message}</Text>
            </Col>
            {
              canClose ?
                <Col onClick={hideAlert} xs={3} className="d-flex align-items-center justify-content-center pointer">
                  <Text>x</Text>
                </Col> :
                null
            }
          </Row>
        </Container>
      </AlertContainer>
    ) : null;
  }
}

export default connect(
  state => ({
    language: state.language,
    alert: state.alert
  }),
  {
    hideAlert
  }
)(ConnectedAlert);
