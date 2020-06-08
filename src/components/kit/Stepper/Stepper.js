// @flow

import React, { Component } from 'react';
import { Text, Icon, Container } from '../';
import styled from 'styled-components';
import { breakpoints, colors } from '../../../styleSheet';

const StepDotWrapper = styled.div`
  width: 100px;
`;

const Bar = styled.div`
  height: 5px;
  background-color: ${props => colors[props.active ? 'primary' : 'border']};
  position: absolute;
  top: 30px;
  ${props => props.direction === 'rtl' ? 'left' : 'right'}: ${props => props.active ?
  `calc(${(100 - (100 / props.total * (props.step + 1)))}% ${props.isLastStep ? '+ 100px' : ''})`
  : '100px'};
  ${props => props.direction === 'rtl' ? 'right' : 'left'}: 100px;
  z-index: ${props => props.active ? 8 : 7};
  transition: all .3s;
  
  @media (max-width: ${breakpoints.sm}px) { 
    top: 20px;
    ${props => props.direction === 'rtl' ? 'left' : 'right'}: ${props => props.active ?
    `calc(${(100 - (100 / props.total * (props.step + 1)))}% ${props.isLastStep ? '+ 0px' : ''})`
    : '0px'};
    ${props => props.direction === 'rtl' ? 'right' : 'left'}: 0;
  }

  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px) {
    ${props => props.direction === 'rtl' ? 'left' : 'right'}: ${props => props.active ?
    `calc(${(100 - (100 / props.total * (props.step + 1)))}% ${props.isLastStep ? '+ 50px' : ''})`
    : '50px'};
    ${props => props.direction === 'rtl' ? 'right' : 'left'}: 50px;
  }
`;

const StepDot = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 4px solid ${props => colors[props.alwaysDisabled ? 'primary' : props.isDisabled ? 'border' : 'primary']};
  background-color: ${props => colors[props.done ? 'primary' : 'white']};
  z-index: 9;
  transition: all .3s;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'}!important;
  
  @media (max-width: ${breakpoints.sm}px) { 
    width: 40px;
    height: 40px;
    
    i {
      font-size: 20px;
    }
  }

  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px) { 
    
  }
`;

type Props = {
  titles: Array,
  initialStep: Number,
  language: Object,
  isDone: Boolean,
  alwaysDisabled: Boolean,
  dotTitle: Array,
  isDisabled: Boolean,
  onChange: Function
};

export default class Stepper extends Component<Props> {

  static defaultProps = {
    dotTitle: [],
    isDisabled: false,
    onChange: () => {}
  };

  state = {
    activeIndex: this.props.initialStep
  };

  setStep = index => index !== this.state.activeIndex && this.setState({ activeIndex: index }, () => {
    this.props.onChange(index);
  });

  handleStep = (index, disabled) => {
    if (!disabled) {
      this.setStep(index);
    }
  };

  renderStep = () => this.props.children.find((child, index) => index === this.state.activeIndex);

  render() {
    const { titles, language, isDone, alwaysDisabled, dotTitle, isDisabled } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="overflow-auto">
        <Container className="d-flex align-items-center justify-content-around position-relative">
          {
            titles.map((title, index) => {
              const done = isDone || index < activeIndex;
              const active = index === activeIndex;
              const disabled = alwaysDisabled ? alwaysDisabled : isDisabled;
              const dotTextColor = active ? 'primary' : 'lightGray';

              return (
                <StepDotWrapper className="d-flex flex-column align-items-center" key={index}>
                  <StepDot
                    done={done}
                    isDisabled={disabled}
                    className="mb-2"
                    onClick={() => this.handleStep(index, disabled)}
                    alwaysDisabled={alwaysDisabled}
                  >
                    {
                      done ?
                        <Icon name="small-check" size={45} color="white"/> :
                        <Text size="smb" color={dotTextColor}>{dotTitle[index] || index}</Text>
                    }
                  </StepDot>
                  <Text className="w-100 text-center text-hidden">{title}</Text>
                </StepDotWrapper>
              )
            })
          }
          <Bar/>
          <Bar
            active
            step={activeIndex}
            total={titles.length}
            isLastStep={titles.length === activeIndex + 1}
            direction={language.direction}
          />
        </Container>
        {this.renderStep()}
      </div>
    );
  }
}
