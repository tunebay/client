import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { Chevron } from './icons';

interface Props {
  price: number;
  onClick(): any;
}

export default class extends Component<Props> {
  render() {
    const { price, onClick } = this.props;
    return (
      <PricePill>
        <Main onClick={onClick}>£{price}</Main>
        <Menu>
          <Chevron size="0.6rem" fill="#666666" />
        </Menu>
      </PricePill>
    );
  }
}

const PricePill = styled.div`
  width: 7rem;
  font-weight: 600;
  height: 2.5rem;

  outline: none;
  display: flex;
`;

const buttonStyles = css`
  color: ${props => props.theme.darkestGrey};

  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  font-weight: 600;
  transition: all 100ms ease;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.black};
  }

  ${PricePill}:hover & {
    border-color: ${props => props.theme.darkGrey};
  }
`;

const Main = styled.button`
  border: 1px solid ${props => props.theme.grey};

  border-radius: 500px 0 0 500px;
  flex: 3;
  font-size: 1.2rem;
  padding-left: 3px;

  border-right: none;

  ${buttonStyles};
`;

const Menu = styled.button`
  border: 1px solid ${props => props.theme.grey};

  border-radius: 0 500px 500px 0;
  padding: 2px 2px 0 0;
  flex: 1;

  ${buttonStyles};
`;
