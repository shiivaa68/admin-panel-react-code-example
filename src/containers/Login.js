// @flow

import React, { Component } from 'react';
import { Button, Col, Container, Row, TextInput, Text, HeaderTitle, Card } from '../components/kit';
import { Formik, Form } from 'formik';
import LoginSchema from '../validators/login';
import { connect } from 'react-redux';
import { actions as loginActions } from '../redux/modules/login';
import { getRegisterCache, setRegisterCacheItem } from '../utils';
import styled from 'styled-components';
import { background_uneed_1 } from '../assets/images';

const LoginDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DivBackImage = styled.div`
  background-image: url(${background_uneed_1});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginForm = ({ loginMethod, loginPass }) => {
  const initialValue = getRegisterCache().loginPass;
  return (
    <Formik
      initialValues={initialValue || {}}
      validationSchema={LoginSchema}
      onSubmit={values => {
        setRegisterCacheItem('loginPass', { ...values, ms: 1 });
        loginMethod({ ...values, ms: 1 });
      }}
    >
      {({ handleChange, errors, handleSubmit, values }) => (
        <Form>
          <Row className="mb-5 justify-content-center px-4">
            <Col xs={12}>
              <TextInput
                name="un"
                iconName="user"
                placeholder="panel.placeholders.username"
                error={errors.un}
                onChange={handleChange}
                value={values.un}
              />
            </Col>
            <Col xs={12}>
              <TextInput
                name="pw"
                iconName="password"
                type="password"
                placeholder="panel.placeholders.password"
                error={errors.pw}
                onChange={handleChange}
                value={values.pw}
              />
            </Col>
          </Row>
          <Row className="mb-5 justify-content-center text-center">
            <Col xs={9} sm={7} md={6} lg={4} xl={3}>
              <Button type="primary" filled size="lg" onClick={handleSubmit} disabled={loginPass.loading}>
                <Text color="white" size="sm">panel.placeholders.login</Text>
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

class Login extends Component {

  render() {
    const { loginMethod, loginPass } = this.props;
    return (
      <DivBackImage>
        <LoginDiv>
          <Card type="white" hasShadow={false} hasRadius={false}>
            <Container className="pb-1">
              <HeaderTitle
                title="panel.login.login"
                detail="panel.login.loginDetail"
                titleClassName="my-3"
              />
              <LoginForm loginMethod={loginMethod} loginPass={loginPass}/>
            </Container>
          </Card>
        </LoginDiv>
      </DivBackImage>
    );
  }
}

export default connect(
  state => ({
    loginPass: state.login
  }),
  {
    loginMethod: loginActions.load
  }
)(Login);
