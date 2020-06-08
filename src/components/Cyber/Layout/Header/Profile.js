import React from 'react';
import { Card, Dropdown, Text } from "../../../kit";
import styled from "styled-components";
import { colors } from "../../../../styleSheet";
import { cyberTitle } from "../../../../utils";
import { avatarImage } from "../../../../config";

const listItems = [
  'profile.myProfile',
  'profile.calendar',
  'profile.newMessages',
  'profile.primarySignOut',
  'profile.signOut'
];

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  border-bottom: 1px solid ${colors.border};
  
  &:last-of-type {
    border: none;
  }
`;

export default function Profile({ login, logoutAction, language }) {

  const handleClick = title => {
    if (title === 'profile.signOut' || title === 'profile.primarySignOut') {
      logoutAction();
    }
  };

  return (
    <Dropdown
      image={avatarImage(login.data.avatar, 65, 65)}
      title={cyberTitle.getUserName(login.data, language.detector)}
      bigIcon
      iconSize={32}
      iconColor="secondary"
    >
      <Card type="white" className="p-1">
        <Ul className="m-0">
          {
            listItems.map((item, i) => (
              <Li className="py-2 px-3 pointer" key={i} onClick={() => handleClick(item)}>
                <Text>{item}</Text>
              </Li>
            ))
          }
        </Ul>
      </Card>
    </Dropdown>
  );
}
