import React, { useState } from 'react';
import { Card, Col, Container, Icon, Logo, Row, Text } from '../../kit';
import styled from 'styled-components';
import Lang from '../../../containers/Lang';
import { colors } from "../../../styleSheet";
import NavItem from "./NavItem";
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  width: calc(100% - ${props => props.navWidth});
  height: 64px;
  top: 0;
  ${props => props.language.direction === 'rtl' ? 'left' : 'right'}: 0;
  z-index: 999;
  transition: all .3s;
`;

const CustomCard = styled(Card)`
  cursor: pointer;
`;

const ResponsiveStyledHeader = styled.header`
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 999;
  background-color: ${colors.white};
`;

const ResponsiveCyberMenu = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .85);
  transition: all .3s;
  z-index: 9999999;
  overflow: auto;
  height: ${props => props.isOpen ? '100%' : 0};
`;

export default function Header({ language, navWidth, logoutAction, cyberMenu, showAlert }) {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledHeader
        className="position-fixed d-none d-sm-none d-md-none d-lg-block"
        language={language}
        navWidth={navWidth}
      >
        <Card hasShadow={false} type="black" hasRadius={false} className="w-100 h-100">
          <Container className="h-100">
            <div className="w-100 h-100 d-flex justify-content-end align-items-center">
              <div className="d-flex justify-content-end">
                <CustomCard type="failure" onClick={logoutAction} className="d-flex justify-content-center align-items-center p-2">
                  <Text color="white" size="sm">panel.header.logout</Text>
                  <Icon name="close" color="white" size={20} className="px-2"/>
                </CustomCard>
              </div>
            </div>
          </Container>
        </Card>
      </StyledHeader>
      <ResponsiveStyledHeader className="d-flex d-sm-flex d-md-flex d-lg-none position-fixed align-items-center">
        <Container className="h-100">
          <Row className="h-100">
            <Col xs={4} className="d-flex justify-content-center h-100 align-items-center">
              {
                cyberMenu && cyberMenu.length ?
                  <div onClick={() => setOpen(true)}>
                    <Icon name="burger-menu" size={35}/>
                  </div> :
                  null
              }
              <ResponsiveCyberMenu className="position-fixed" isOpen={isOpen}>
                {
                  cyberMenu && cyberMenu.length ?
                    <div>
                      <div className="d-flex align-items-center justify-content-center p-2">
                        <Icon name="close" size={35} onClick={() => setOpen(false)} color="white"/>
                      </div>
                      {
                        cyberMenu.map((item, i) => (
                          <NavItem
                            navItem={item}
                            isNavOpen
                            showAlert={showAlert}
                            closeMenu={() => setOpen(false)} key={i}
                          />
                        ))
                      }
                    </div> :
                    null
                }
              </ResponsiveCyberMenu>
            </Col>
            <Col xs={4} className="d-flex justify-content-center h-100 align-items-center">
              <Link to="/">
                <Logo size="md" language={language}/>
              </Link>
            </Col>
            <Col xs={4} className="d-flex justify-content-center h-100">
              <Lang/>
            </Col>
          </Row>
        </Container>
      </ResponsiveStyledHeader>
    </>
  );
}
