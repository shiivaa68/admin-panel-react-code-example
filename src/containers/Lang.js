// @flow

import React from 'react';
import { changeLanguage } from '../redux/modules/language';
import { connect } from 'react-redux';
import { languages } from '../localization';
import { Card, Dropdown, Text } from '../components/kit';
import styled from 'styled-components';
import { colors } from "../styleSheet";

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  border-bottom: 1px solid ${colors.border};
  
  &:last-child {
    border: none;
  }
`;

type Props = {
  language: Object,
  changeLanguage: Function,
  color: String,
  iconColor: String
};

function Lang({ changeLanguage, language, color = "black", iconColor }: Props) {

  const handleChange = (language) => {
    changeLanguage(language);
  };

  return (
    <Dropdown iconName="language" title={language.value} titleColor={color} iconColor={iconColor}>
      <Card type="whiteBackground" className="p-1">
        <Ul className="m-0">
          {Object.values(languages).map((language, index) =>
            <Li
              onClick={() => handleChange(language)}
              className="py-2 text-center pointer"
              key={index}
            >
              <Text>{language.value}</Text>
            </Li>)}
        </Ul>
      </Card>
    </Dropdown>
  );
}

export default connect(
  state => ({
    language: state.language
  }),
  {
    changeLanguage
  }
)(Lang);
