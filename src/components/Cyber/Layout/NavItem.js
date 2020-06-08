import React, { useState } from 'react';
import { Icon, Text } from '../../kit';
import styled from 'styled-components';
import { colors } from '../../../styleSheet';
import { withRouter } from 'react-router-dom';

const ActiveBar = styled.div`
  width: 7px;
  height: 45px;
  background-color: ${props => colors[props.active ? 'primaryHover' : 'white']};
  transition: all .3s;
`;

const StyledIcon = styled(Icon)`
  transition: all .3s;
  transform: rotate(${props => props.isOpen ? '180deg' : 0});
`;

const Children = styled.div`
  max-height: ${props => props.isOpen ? 150 : 0}px;
  transition: all .3s;
`;

const ChildRule = styled.div`
  height: 1px;
  width: 45px;
  background-color: ${props => colors[props.color]};
  transition: all .3s;
`;

function NavItem({ navItem, isNavOpen, history, closeMenu }) {

  const [isOpen, setOpen] = useState(false);

  const setVisibility = isOpen => setOpen(isOpen);

  const handleNavItemClick = navItem => {
    if (navItem.child && navItem.child.length) {
      setVisibility(!isOpen);
    } else {
      if(navItem.lname === 'panel'){
        history.push('/panel')
      } else {
        history.push(`/panel/${navItem.lname}`);
      }
      closeMenu && closeMenu();
    }
  };

  const handleRootActive = (navItem) => {
    const currentRoute = history.location.pathname.split('/')[3];
    if (navItem.child && navItem.child.length) {
      const hasChild = navItem.child.find(child => child.lname.split('/')[1] === currentRoute);
      return !!hasChild;
    } else {
      if (currentRoute) {
        return navItem.lname.includes(currentRoute);
      } else {
        return navItem.lname === 'panel';
      }
    }
  };

  const activeColor = active => active ? 'white' : 'gray';

  const currentRoute = history.location.pathname.split('/')[3];

  const rootColor = activeColor(handleRootActive(navItem));

  const hasChildren = navItem.child && navItem.child.length;

  return (
    <div key={navItem.id} className="overflow-hidden mb-4">
      <div
        className="d-flex align-items-center justify-content-between pointer"
        onClick={() => handleNavItemClick(navItem)}
      >
        <div className="d-flex align-items-center">
          <ActiveBar active={handleRootActive(navItem)}/>
          <Icon
            name=""
            size={25}
            color={rootColor}
            className="px-3"
          >
            {navItem.icon}
          </Icon>
          {
            isNavOpen ?
              <Text
                color={rootColor}
                className="text-hidden"
              >
                {navItem.fname}
              </Text> :
              null
          }
        </div>
        {
          hasChildren ?
            <StyledIcon
              isOpen={isOpen}
              name="minimal-down"
              size={13}
              className="px-3"
              color={rootColor}
            /> :
            null
        }
      </div>
      <Children isOpen={isOpen}>
        {
          hasChildren && navItem.child.map(child => {
            const childActiveColor = activeColor(child.lname.split('/')[1] === currentRoute);
            return (
              <div
                key={child.id}
                className="d-flex align-items-center py-2 pointer"
                onClick={() => handleNavItemClick(child)}
              >
                <ChildRule color={childActiveColor}/>
                {
                  isNavOpen ?
                    <Text className="px-3 text-hidden" color={childActiveColor}>{child.fname}</Text> :
                    <Icon size={25} color={childActiveColor} name="" className="px-3">{child.icon}</Icon>
                }
              </div>
            );
          })
        }
      </Children>
    </div>
  );
}

export default withRouter(NavItem);
