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
    return <PricePill onClick={onClick}>£{price}</PricePill>;
  }
}

const PricePill = styled.button`
  border: 1px solid ${props => props.theme.grey};

  width: 7rem;
  font-weight: 500;
  height: 2.5rem;
  border-radius: 500px;

  outline: none;
  background-color: transparent;

  &:hover {
    border: 1px solid ${props => props.theme.darkGrey};

    cursor: pointer;
  }
`;
