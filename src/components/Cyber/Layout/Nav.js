import React, { Component } from 'react';
import { Icon, Logo } from '../../kit';
import styled from 'styled-components';
import { colors } from '../../../styleSheet';
import NavItem from './NavItem';
import { connect } from 'react-redux';
import { showAlert } from '../../../redux/modules/alert';
import { Link } from 'react-router-dom';
import { history } from '../../../utils';

const Wrapper = styled.nav`
  width: ${props => props.navWidth};
  height: 100vh;
  background-color: ${colors.black};
  top: 0;
  ${props => props.language.direction === 'rtl' ? 'right' : 'left'}: 0;
  bottom: 0;
  transition: all .3s;
`;

const LogoWrapper = styled.div`
  height: 60px;
`;

class Nav extends Component {
  render() {
    const { language, navWidth, isNavOpen, toggleNav, showAlert, navItems } = this.props;
    const size = isNavOpen ? 'lg' : 'sm';

    return (
      <Wrapper
        language={language}
        navWidth={navWidth}
        className="position-fixed overflow-auto d-none d-sm-none d-md-none d-lg-block"
      >
        <Link to="/">
          <LogoWrapper className="mx-3">
            <Logo size={size} language={language} isNavOpen={isNavOpen}/>
          </LogoWrapper>
        </Link>
        <div onClick={toggleNav} className="d-flex align-items-center p-4">
          <Icon
            name={isNavOpen ? !history.location.pathname.includes('Map') && 'arrow-right' : 'burger-menu'}
            size={30}
            color="white"
          />
        </div>
        {
          navItems.map(navItem =>
            <NavItem
              key={navItem.id}
              navItem={navItem}
              isNavOpen={isNavOpen}
              showAlert={showAlert}
            />
          )}
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    language: state.language
  }),
  {
    showAlert
  }
)(Nav);
