import React from 'react';
import { Card, Dropdown, Text } from '../../../kit';
import styled from 'styled-components';
import { colors } from "../../../../styleSheet";

//آخرین ورود شما به سیستم
// ۱۰ دقیقه پیش
// سقف ورود بدنه شما پر است.
// ۹/۱۲/۹۷

const Wrapper = styled.div`
  width: 275px;
  border-bottom: 1px solid ${colors.border};
  
  &:last-of-type {
    border: none;
  }
`;

const Bullet = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${colors.secondary};
`;

export default function Notifications() {
  return (
    <Dropdown iconName="notifications" title="notifications.title">
      <Card type="white" className="p-1">
        <Wrapper className="d-flex my-2">
          <div className="px-4 py-2">
            <Bullet/>
          </div>
          <div className="d-flex flex-column">
            <Text bold className="py-1">آخرین ورود شما به سیستم</Text>
            <Text className="py-2">۱۰ دقیقه پیش</Text>
          </div>
        </Wrapper>
        <Wrapper className="d-flex my-2">
          <div className="px-4 py-2">
            <Bullet/>
          </div>
          <div className="d-flex flex-column">
            <Text bold className="py-1">آخرین ورود شما به سیستم</Text>
            <Text className="py-2">۱۰ دقیقه پیش</Text>
          </div>
        </Wrapper>
      </Card>
    </Dropdown>
  );
}
