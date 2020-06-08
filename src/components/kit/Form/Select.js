// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { globalInputStyle } from './inputStyles';
import { Icon, Text, TextInput, Loading } from '../';
import IconWrapper from './IconWrapper';
import Title from './Title';
import { colors } from '../../../styleSheet';

type Props = {
  placeholder?: String,
  titleSelector: String,
  valueSelector: String,
  labelClassName?: String,
  name: String,
  error?: String,
  title?: String,
  iconName?: String,
  iconSize?: Number,
  searchPlaceHolder?: String,
  searchable?: Boolean,
  data: Array,
  loading?: Boolean,
  onChange: Function,
  showTitle?: Boolean,
  optionalInput?: Boolean,
  optionalInputPlaceholder?: String
};

const SelectInput = styled.div`
  ${globalInputStyle};
  padding: 0 20px;
  background-color: ${colors.white};
  cursor: pointer;
  position: relative;
  z-index: 112;
  border-width: ${props => props.show ? 2 : 1}px;
  border-color: ${props => props.show ? colors.primary : colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSelect = styled.div`
  width: 100%;
  max-height: ${props => props.show ? 250 : 0}px;
  background-color: ${props => props.searchable ? colors.grayBackground : colors.white};
  border: 1px solid ${colors.border};
  color: ${colors.lightGray};
  position: absolute;
  top: 30px;
  right: 0;
  left: 0;
  transition: all .3s;
  z-index: 111;
  padding: ${props => props.show ? '30px 0 0' : 0};
  border-radius: 0 0 15px 15px;
  overflow: hidden;
`;

const SelectIconWrapper = styled.div`
  transform: rotate(${props => props.show ? 0 : 180}deg);
  transition: all .3s;
`;

const InputWrapper = styled.div`
  border-bottom: 1px solid ${colors.border};
`;

const ResultsWrapper = styled.div`
  width: 100%;
  max-height: ${props => props.searchable ? 115 : 220}px;
  background-color: ${colors.white};
  overflow: auto;
`;

class Select extends Component<Props> {

  static defaultProps = {
    searchPlaceHolder: 'form.search',
    optionalInputPlaceholder: 'form.reason',
    showTitle: true,
    loading: false
  };

  state = {
    show: false,
    data: this.props.data,
    searched: this.props.data,
    selected: null,
    isUpdated: false,
    optionalInputValue: ''
  };

  componentDidMount() {
    if (this.props.value) {
      this.setState({
        selected: this.props.value
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      this.setState({
        data: this.props.data,
        searched: this.props.data
      });
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.data.length !== this.props.data.length) {
      this.setState({
        data: nextProps.data,
        searched: nextProps.data
      });
    }
    if (nextProps.value && !this.state.isUpdated) {
      if (nextProps.setFieldValue) {
        nextProps.setFieldValue(nextProps.name, nextProps.value);
      }
      this.setState({
        selected: nextProps.value,
        isUpdated: true
      });
    }
    if (nextProps.value === '' && this.props.value !== nextProps.value) {
      this.setState({
        selected: null
      });
    }
  }

  search = event => {
    const { titleSelector } = this.props;
    // eslint-disable-next-line array-callback-return
    const searched = this.state.data.filter(item => {
      if (titleSelector) {
        if (item[titleSelector].includes(event.target.value)) {
          return item;
        }
      }
      if (item.includes(event.target.value)) {
        return item;
      }
    });

    this.setState({ searched });
  };

  onOptionalInputChange = event => {
    this.setState({
      optionalInputValue: event.target.value
    }, () => {
      this.props.onChange(this.state.optionalInputValue);
    });
  };

  toggle = () => this.setState({ show: !this.state.show });

  select = selected => {
    this.setState({
      selected,
      show: false
    }, () => this.props.onChange && this.props.onChange(selected));
  };

  getSelectedTitle = () => {
    const { placeholder, data, valueSelector, titleSelector } = this.props;
    const { selected } = this.state;
    if (selected === null) {
      return placeholder;
    }
    if (titleSelector && valueSelector) {
      const title = data.find(item => item[valueSelector] === selected);
      if (title) {
        return title[titleSelector];
      }
    } else {
      return data.find(item => item === selected);
    }
  };

  render() {
    const {
      language,
      labelClassName,
      error,
      title,
      iconName,
      iconSize,
      searchable,
      showTitle,
      loading,
      searchPlaceHolder,
      titleSelector,
      valueSelector,
      optionalInput,
      optionalInputPlaceholder
    } = this.props;
    const { show, searched, selected } = this.state;

    return (
      <label className={`w-100 ${labelClassName}`}>
        {
          showTitle ?
            <Title error={error} title={title}>
              <Text color={null}>{error || title}</Text>
            </Title> :
            null
        }
        <div className="position-relative">
          {
            iconName ?
              <IconWrapper direction={language.direction} hasTitle={!!(title || error)}>
                <Icon name={iconName} size={iconSize} color="lightGray"/>
              </IconWrapper> :
              null
          }
          <SelectInput onClick={this.toggle} show={show}>
            <Text color={selected ? 'black' : 'gray'} className="px-3">{this.getSelectedTitle()}</Text>
            <SelectIconWrapper show={show}>
              <Icon name="minimal-top" size={12} color="lightGray"/>
            </SelectIconWrapper>
          </SelectInput>
          <StyledSelect show={show} searchable={searchable || optionalInput}>
            {
              searchable ?
                <InputWrapper className="p-3">
                  <TextInput
                    iconName="search"
                    showTitle={false}
                    placeholder={searchPlaceHolder}
                    onChange={this.search}
                  />
                </InputWrapper> :
                null
            }
            {
              optionalInput ?
                <InputWrapper className="p-3">
                  <TextInput
                    iconName="edit"
                    showTitle={false}
                    placeholder={optionalInputPlaceholder}
                    onChange={this.onOptionalInputChange}
                  />
                </InputWrapper> :
                null
            }
            <ResultsWrapper searchable={searchable || optionalInput} className="p-2">
              <Loading loading={loading} color="primary" loadingClassName="h-100" inside>
                {
                  !loading && searched.length ? searched.map((search, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 px-4 pointer"
                        onClick={() => valueSelector ? this.select(search[valueSelector]) : this.select(search)}
                      >
                        {
                          titleSelector ? <Text>{search[titleSelector]}</Text> : <Text>{search}</Text>
                        }
                      </div>
                    )
                  }) : null
                }
                {
                  !loading && !searched.length ?
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <Text>form.noResult</Text>
                    </div> : null
                }
              </Loading>
            </ResultsWrapper>
          </StyledSelect>
        </div>
      </label>
    )
  }
}

export default connect(
  state => ({
    language: state.language
  })
)(Select);
