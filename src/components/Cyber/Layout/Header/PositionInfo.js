import React from 'react';
import { Card, Dropdown, HR, Icon, Text, Ul } from '../../../kit';
import styled from "styled-components";
import { colors } from "../../../../styleSheet";
import { cyberTitle, formatDate } from "../../../../utils";

const ListItem = styled.li`
  border-bottom: 1px solid ${colors.border};
  width: 300px;
  
  &:last-of-type {
    border: none;
  }
`;

const OwnerItem = styled(Card)`
  width: 45px;
  height: 45px;
`;

export default function PositionInfo({ login, language }) {
  const { userId, parentId, regDate, lastLogin } = login.data;

  return (
    <Dropdown iconName="archive" title="positionInfo.title">
      <Card type="white" className="p-1">
        <Ul className="m-0" listStylePosition="inside" type="secondary">
          <div className="d-flex align-items-center py-2 px-3">
            <OwnerItem className="d-flex align-items-center justify-content-center">
              <Icon name="user" size={25} color="secondary"/>
            </OwnerItem>
            <div className="px-2">
              <Text bold>positionInfo.owner</Text>
              <Text>:</Text>
              <Text>{cyberTitle.getCyberTitle('', login.data,language.detector)}</Text>
            </div>
          </div>
          <HR className="m-0"/>
          <ListItem className="py-2 px-3">
            <Text bold>positionInfo.marketingCode</Text>
            <Text>1K22K264B5</Text>
          </ListItem>
          <ListItem className="py-2 px-3">
            <Text bold>positionInfo.marketerCode</Text>
            <Text>{userId}</Text>
          </ListItem>
          <ListItem className="py-2 px-3">
            <Text bold>positionInfo.referrer</Text>
            <Text>{parentId}</Text>
          </ListItem>
          <ListItem className="py-2 px-3">
            <Text bold>positionInfo.joinDate</Text>
            <Text>{formatDate(regDate, language, 'jYYYY/jMM/jDD')}</Text>
          </ListItem>
          <ListItem className="py-2 px-3">
            <Text bold>positionInfo.lastLogin</Text>
            <Text>{formatDate(lastLogin, language, 'jYYYY/jMM/jDD')}</Text>
          </ListItem>
        </Ul>
      </Card>
    </Dropdown>
  );
}
