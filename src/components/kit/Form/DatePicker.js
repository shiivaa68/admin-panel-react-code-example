import React, { Component } from 'react';
import PersianDatePicker from './react-persian-calendar-date-picker';
import moment from 'moment-jalali';
import styled from 'styled-components';
import { globalInputStyle } from './inputStyles';
import Title from "./Title";
import { Icon, Text } from "../";
import IconWrapper from './IconWrapper';
import { connect } from 'react-redux';
import { i18n } from '../../../localization';
import GregorianDatePicker from 'react-datepicker';
import 'react-persian-calendar-date-picker/lib/DatePicker.css';
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  type: string,
  disabled?: boolean,
  title?: string,
  error?: string,
  placeholder: string,
  labelClassName?: string,
  iconName?: string,
  iconSize?: number,
  name: string
}

const Input = styled.input`
  width: 100%;
  ${globalInputStyle};
`;

class DatePicker extends Component<Props> {

  state = {
    selectedDay: null,
    selectedGregorianDate: null
  };

  componentDidMount() {
    const { value } = this.props;
    if (value) {
      const dateArray = value.split('-');
      const gregorianDate = new Date();
      gregorianDate.setFullYear(dateArray[0]);
      gregorianDate.setMonth(dateArray[1] - 1);
      gregorianDate.setDate(dateArray[2]);
      this.setState({
        selectedDay: { year: Number(dateArray[0]), month: Number(dateArray[1]), day: Number(dateArray[2]) },
        selectedGregorianDate: gregorianDate
      });
    } else {
      const today = new Date();
      const eighteenYearsAgo = new Date(today.setFullYear(today.getFullYear() - 18));
      const persianEighteenYearsAgo = moment().add(-18, 'year').format('jYYYY/jMM/jDD').split('/');
      const persianEighteenYearsAgoObj = {
        year: Number(persianEighteenYearsAgo[0]),
        month: Number(persianEighteenYearsAgo[1]),
        day: Number(persianEighteenYearsAgo[2])
      };
      this.setState({
        selectedGregorianDate: eighteenYearsAgo,
        selectedDay: persianEighteenYearsAgoObj
      });
    }
  }

  setSelectedDay = date => {
    const { language, onChange } = this.props;

    if (language.detector === 'fa') {
      this.setState({ selectedDay: date }, () => {
        const date = Object.keys(this.state.selectedDay).map(item => {
          return this.state.selectedDay[item];
        }).reverse().join('-');
        onChange(date);
      });
    } else {
      this.setState({
        selectedGregorianDate: date
      }, () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        onChange(`${year}-${month}-${day}`);
      });
    }
  };


  render() {
    const { placeholder, iconSize = 26, iconName, disabled, title, error, labelClassName, language, name } = this.props;
    const { selectedDay, selectedGregorianDate } = this.state;

    const CustomInput = ({ ref, onFocus, onBlur, isGregorian, value }) => {
      return (
        <Input
          readOnly
          name={name}
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={i18n.t(placeholder)}
          value={isGregorian ? value : selectedDay && selectedDay.year ? `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}` : ''}
          hasIcon={!!iconName}
          disabled={disabled}
        />
      );
    };

    return (
      <label className={`${labelClassName} w-100`}>
        <Title error={error} title={title}>
          <Text className="text-hidden" color={null}>{error || title}</Text>
        </Title>
        <div className="position-relative">
          {
            iconName ?
              <IconWrapper direction={language.direction} hasTitle={!!(title || error)}>
                <Icon name={iconName} size={iconSize} color="lightGray"/>
              </IconWrapper> :
              null
          }
          {
            language.detector === 'fa' ?
              <PersianDatePicker
                selectedDay={selectedDay}
                onChange={this.setSelectedDay}
                renderInput={CustomInput}
              /> :
              <GregorianDatePicker
                selected={selectedGregorianDate}
                onChange={this.setSelectedDay}
                customInput={<CustomInput isGregorian/>}
                className="w-100"
              />
          }
        </div>
      </label>
    )
  }
}

export default connect(
  state => ({
    language: state.language
  })
)(DatePicker);
