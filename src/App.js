import React, { Component, PureComponent } from 'react';
import AppRouter from './router/AppRouter';
import { Alert, AppLoading, Error } from './components/kit';
import styled from 'styled-components';
import { colors } from './styleSheet';
import { connect } from 'react-redux';
import { setAppFontFamily, exist } from './utils';

const StyledAppContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.grayBackground};
`;

Component.prototype.exist = exist;
PureComponent.prototype.exist = exist;

class App extends Component {

  handleAppLoading = ({ sessionStart }) => {
    setAppFontFamily(this.props);
    const hasError = !!sessionStart.error.type;
    if (sessionStart.loading && !sessionStart.loaded) {
      return <AppLoading/>;
    } else if (hasError) {
      return <Error error={sessionStart.error}/>;
    } else {
      return <AppRouter/>;
    }
  };

  render() {
    const { language } = this.props;

    return (
      <StyledAppContainer language={language}>
        {this.handleAppLoading(this.props)}
        <Alert/>
      </StyledAppContainer>
    );
  }
}

export default connect(
  state => ({
    sessionStart: state.sessionStart,
    language: state.language
  })
)(App);
