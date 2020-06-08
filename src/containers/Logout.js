import React, { Component } from 'react';
import { Button, Container, Loading, Text, CyberContainer } from '../components/kit';
import { connect } from 'react-redux';
import { actions as logoutActions } from '../redux/modules/logout';

class Logout extends Component {

  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    const { logout, logoutUser, cyberNav, language } = this.props;

    return (
      <CyberContainer navWidth={cyberNav.navWidth} language={language}>
        <Container>
          <Text className="text-center w-100 p-5" type="p" size="lg">logout.detail</Text>
          <Loading loading={logout.loading} color="primary" className="text-center">
            <Button size="lg" type="primary" filled onClick={logoutUser}>
              <Text color="white">logout.title</Text>
            </Button>
          </Loading>
        </Container>
      </CyberContainer>
    );
  }
}

export default connect(
  state => ({
    language: state.language,
    logout: state.logout,
    cyberNav: state.cyberNav
  }),
  {
    logoutUser: logoutActions.load
  }
)(Logout);
