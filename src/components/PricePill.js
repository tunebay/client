// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {|
  price: number,
  onClick: () => any,
|};

export default class extends Component<Props, void> {
  render() {
    const { price, onClick } = this.props;
    return <PricePill onClick={onClick}>{price}</PricePill>;
  }
}

const PricePill = styled.button``;
