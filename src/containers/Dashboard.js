import React from 'react';
import { CyberContainer } from "../components/kit";
import { connect } from "react-redux";

class Dashboard extends React.Component {

  render() {
    const { cyberNav } = this.props;
    return (
      <CyberContainer navWidth={cyberNav.navWidth}>
        hello dashboard
      </CyberContainer>
    );
  }
}

export default connect(
  state => ({
    cyberNav: state.cyberNav
  })
)(Dashboard);
