// @flow
import React, { PureComponent } from 'react';
import { Card, Text } from './';
import { bankImage } from '../../config';
import { colors } from '../../styleSheet';
import styled from 'styled-components';

type Props = {
  onChange?: Function,
  data: Array
};

const ImageWrapper = styled.div`
  width: 85px;
  height: 85px;
`;

const CustumCard = styled(Card)`
  border-color: ${props => colors[props.borderColor]};
  height: 150px;
  width: 230px;
  display: flex;
  flex-direction: column!important;
  justify-content: center!important;
`;

const CustumCardCity = styled(Card)`
  border-color: ${props => colors[props.borderColor]};
  height: 60px;
  width: 250px;
  display: flex;
  flex-direction: column!important;
  justify-content: center!important;
`;

class CityBankSelectCard extends PureComponent<Props> {

  static defaultProps = {
    isBank: false,
    discount: 0,
    shippingCost: 0
  };

  handleCallBack = (id) => this.props.onChange({ target: { name: this.props.name, value: Number(id) } });

  render() {
    const { data, value } = this.props;
    return (
      data.map((item, index) => (
          item.img && item.img.length ?
            (
              <CustumCard
                className="m-1 user-select-none pointer"
                hasShadow={false}
                hasBorder
                borderColor={value === Number(item.id) ? 'primary' : 'border'}
                key={index}
                type="white"
                onClick={() => this.handleCallBack(item.id)}
              >
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <ImageWrapper hasShadow={false}>
                    <img className="w-100 h-100" src={bankImage(item.img)} alt="bank"/>
                  </ImageWrapper>
                  <Text className="py-2">{item.title}</Text>
                </div>
              </CustumCard>
            ) :
            (
              <CustumCardCity
                className="m-1 user-select-none pointer"
                hasShadow={false}
                hasBorder
                borderColor={value === Number(item.id) ? 'primary' : 'border'}
                key={index}
                type="white"
                onClick={() => this.handleCallBack(item.id)}
              >
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <Text>{item.name}</Text>
                </div>
              </CustumCardCity>
            )
        )
      )
    )
  }
}

export default CityBankSelectCard;
